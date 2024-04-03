/* ################################################# */

function easyParcer_Href( selector ) {
	var finalJson = { };
	var arrElems = document.querySelectorAll(selector);
	console.log('easyParcer_Href = '+selector+' = '+arrElems.length);
	
	arrElems.forEach( function( e , i ){
		finalJson[i] = e.href;
	});
	
	return finalJson;
}

/* ################################################# */

/** 270124 1700
 * Выдаст полный список VK-Ссылок на все изображения в открытом альбоме.
 * Работает и для старых и для новых UI альбомов.
 *
 * Испольнование: 1) Открыть альбом по ссылке формата https://vk.com/album-123123_123123
 * 2) Полностью отлистать его до низа, чтоб прогрузил все карточки.
 * 3) Вставить в консоль и вызвать метод. Потом ПКМ-Копировать как объект и вставить в тхт.
 *
 * Формат выдачи: JSON с кучей строк "https://vk.com/photo-123123_123123"
 * Это нужно для последующей работы с этими пикчами через VK-API. (Обычно прикрепить к посту)
 * Version=270124 1630
 */
function VK_AlbumsHrefParcer(  ){
	var resJson = [];
	
	var selectorOld = '.photos_row a';
	if( document.querySelectorAll(selectorOld).length )
		resJson = easyParcer_Href( selectorOld );
	
	var selectorNew = 'div.vkuiCard div div a'; // работает 14.01.2024
	if( document.querySelectorAll(selectorNew).length )
		resJson = easyParcer_Href( selectorNew );
	
	for (var key in resJson) // Work
		resJson[key] = resJson[key].split('?')[0];
	
	return Object.values(resJson); // Чтоб только строки без ключей.
}

VK_AlbumsHrefParcer(  );

// ###