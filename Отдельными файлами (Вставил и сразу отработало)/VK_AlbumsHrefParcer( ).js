/* ################################################# */

function str_explode(separator,string){ return string.split(separator.toString()); }

function easyParcer_Href( selector ) {
	var finalJson = { };
	var arrElems = document.querySelectorAll(selector);
	console.log(arrElems.length);
	
	arrElems.forEach( function( e , i ){
		finalJson[i] = e.href;
	});
	
	return finalJson;
}

/* ################################################# */

/** 091123 0318
 * Выдаст полный список VK-Ссылок на все изображения в открытом альбоме.
 *
 * Испольнование: 1) Открыть альбом по ссылке формата https://vk.com/album-123123_123123
 * 2) Полностью отлистать его до низа, чтоб прогрузил все карточки.
 * 3) Вставить в консоль и вызвать метод. Потом ПКМ-Копировать как объект и вставить в тхт.
 *
 * Формат выдачи: JSON с кучей строк "https://vk.com/photo-123123_123123"
 * Это нужно для последующей работы с этими пикчами через VK-API. (Обычно прикрепить к посту)
 */
function VK_AlbumsHrefParcer(  ){
    var resJson = easyParcer_Href( '.photos_row a' );
    var resArr = [];
    
    for (var key in resJson)
        resArr[key] = str_explode('?',resJson[key])[0];
    
    return resArr;
}

VK_AlbumsHrefParcer(  );

// ###