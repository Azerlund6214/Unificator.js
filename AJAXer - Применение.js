//


// /* Отключение аякса

var result = AJAX('POST', ReqTypeIsAsyncBool , serverUrl , FINAL );
console.log(result);

// #### #### #### ####
// #### Разбор результатов

if( result['STATUS_SUCCESS'] === true )
{
	console.log('%cУспешная отправка => ' + result['ANSWER'], 'color:black; background-color:lime; font-size:16px');
}
else
{
	console.log('*** Ошибка ***');
	console.log('Тип запроса: '+ReqType);
	
	if( ReqType === 'ASYNC' )
	{
		console.log('%cПлановый вылет: Тк ASYNC - не дожидались ответа, он придет позже.','color:black; background-color:#d1ff00;');
		console.log('!!! Проверять, тк асинх тоже может вылететь, напр по 500');
	}
	else
	{
		console.log('%c### Это внепалновый вылет ###', 'color:black; background-color:red; font-size:16px');
		console.log('ERROR_MSG: '+result['ERROR_MSG'] );
		console.log('ERROR_MSG_REAL: '+result['ERROR_MSG_REAL'] );
		console.log('ERROR_RESP_CODE: ' + result['ERROR_RESP_CODE'] );

		if( importantLog )
		{
			// Тут можно вставить таймер. 300мс
			console.log('Это важный лог, но вылетел. Отправляю повторно 1 раз.');
			var result = AJAX('POST', ReqTypeIsAsyncBool , serverUrl , FINAL );
			console.log(result);
		}
	}
	
	
}


// */


// End