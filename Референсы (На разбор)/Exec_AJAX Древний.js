function Exec_AJAX( path , form_data , div_id )
{
	$.ajax({  type: 'POST',
		url: path,
		data: $( form_data ).serialize(),
		success: function(data) { $( div_id ).html(data); },
		error:   function(xhr, str){ alert('Возникла ошибка: ' + xhr.responseCode); }
	});
}