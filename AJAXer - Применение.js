//


// /* ���������� �����

var result = AJAX('POST', ReqTypeIsAsyncBool , serverUrl , FINAL );
console.log(result);

// #### #### #### ####
// #### ������ �����������

if( result['STATUS_SUCCESS'] === true )
{
	console.log('%c�������� �������� => ' + result['ANSWER'], 'color:black; background-color:lime; font-size:16px');
}
else
{
	console.log('*** ������ ***');
	console.log('��� �������: '+ReqType);
	
	if( ReqType === 'ASYNC' )
	{
		console.log('%c�������� �����: �� ASYNC - �� ���������� ������, �� ������ �����.','color:black; background-color:#d1ff00;');
		console.log('!!! ���������, �� ����� ���� ����� ��������, ���� �� 500');
	}
	else
	{
		console.log('%c### ��� ����������� ����� ###', 'color:black; background-color:red; font-size:16px');
		console.log('ERROR_MSG: '+result['ERROR_MSG'] );
		console.log('ERROR_MSG_REAL: '+result['ERROR_MSG_REAL'] );
		console.log('ERROR_RESP_CODE: ' + result['ERROR_RESP_CODE'] );

		if( importantLog )
		{
			// ��� ����� �������� ������. 300��
			console.log('��� ������ ���, �� �������. ��������� �������� 1 ���.');
			var result = AJAX('POST', ReqTypeIsAsyncBool , serverUrl , FINAL );
			console.log(result);
		}
	}
	
	
}


// */


// End