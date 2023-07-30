// ####
// Мой универсальный метод для аякса.
function AJAX( method , needAsync , urlTarget , dataForSend='' )
{
	// https://api.jquery.com/jquery.ajax/
	var FIN = {
		'LOOPBACK' : { 'method':method, 'needAsync':needAsync , 'urlTarget':urlTarget, 'data':dataForSend },
		
		'STATUS_SUCCESS': false, // Успешное получение ответа.
		'STATUS_ERROR': false, // Что-то пошло не так.
		'ANSWER': 'Undef', // Полученный ответ, без обработок.
		
		// Все, что ниже на переработку.  Чекать новые возвращаемые параметры
		'ERROR_OBJ': 'Undef', // Объект ошибки.
		'ERROR_MSG': 'Undef', // Текст сообщения ошибки.
		'ERROR_MSG_RAW': 'Undef', // Текст сообщения ошибки, без обработок.
		'ERROR_MSG_REAL': 'Undef', // Большой, главный текст сообщения ошибки.
		'ERROR_RESP_CODE': 'Undef', // jqXHR.responseCode
		
		//'TRYCATCH_ERROR': false, // Вылет по исключению.
		//'TRYCATCH_INFO': '', // Вся инфа исключения.
	};
	
	// #### #### ####
	
	if( testMode_AlertInsteadAnyAjax_Enabled )
	{
		console.log('AJAX = Test Mode Enabled');
		console.log( dataForSend );
		alert('AJAX = Test Mode = Был был аякс');
		return FIN;
	}
	
	// #### #### ####
	
	var settingsArr = {  
			type: method,     // An alias for method. You should use type if youre using versions of jQuery prior to 1.9.0
			//method: method, // /* Метод передачи (GET POST  get post) */
			async: needAsync, // bool
			
			url: urlTarget,   /* Куда пойдет запрос */
			
			crossDomain: true,
			//headers: {   },
			
			//dataType: 'html',  // html json text jsonp   /* Тип данных в ответе (xml, json, script, html). */
			//dataType: 'text',  // 
			
			data: dataForSend,
			
			// #### #### ####
			
			beforeSend: function(xhr)
			{
				//console.log('AJAX = Блок beforeSend (Пустой)');
				
			},
			
			// ####
			
			success: function(response) // Anything data, String textStatus, jqXHR jqXHR
			{
				FIN['STATUS_SUCCESS'] = true;
				FIN['ANSWER'] = response;
				console.log('AJAX = Блок success отработал: '+dataForSend['REASON']);
			},
			
			// ####
			
			error:   function(jqXHR, exceptionMsg)  //  jqXHR jqXHR, String textStatus, String errorThrown
			{
				//console.log(jqXHR);
				FIN['STATUS_ERROR'] = true;
				FIN['ANSWER'] = jqXHR.responseText;
				
				FIN['ERROR_OBJ'] = jqXHR;
				FIN['ERROR_MSG_RAW'] = exceptionMsg;
				FIN['ERROR_MSG_REAL'] = jqXHR.statusText;
				FIN['ERROR_RESP_CODE'] = jqXHR.status;
				
				if (jqXHR.status === 0) {
					FIN['ERROR_MSG'] = 'Not connect. Verify Network.';
					
				} else if (jqXHR.status == 404) {
					FIN['ERROR_MSG'] = 'Requested page not found (404).';
					
				} else if (jqXHR.status == 500) {
					FIN['ERROR_MSG'] = '### Internal Server Error (500). ###';
					
				} else if (exceptionMsg === 'parsererror') {
					FIN['ERROR_MSG'] = 'Requested JSON parse failed.';
					
				} else if (exceptionMsg === 'timeout') {
					FIN['ERROR_MSG'] = 'Time out error.';
					
				} else if (exceptionMsg === 'abort') {
					FIN['ERROR_MSG'] = 'Ajax request aborted.';
					
				} else {
					FIN['ERROR_MSG'] = 'Uncaught Error. ' + jqXHR.responseText;
				}
				
				console.log('AJAX = Блок error отработал');
			}, // error
			
			// ####
			
			// Послу успеха или ошибки
			complete: function(jqXHR, textStatus ) // jqXHR jqXHR, String textStatus
			{
				//console.log('AJAX = Блок complete (пустой)');
			}
			
			// ####
	};
	
	
	// #### #### ####
	
	// Это обернуть в исключение
	$.ajax( settingsArr );
	
	// #### #### ####
	
	return FIN;
}

// End