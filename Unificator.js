// #########################################
// #### Новизна: Не изменялся | (000023) ###
// #########################################
// #### var TAG = document.createElement(tagName); TAG.src = 'Ссылка'; TAG.type = 'text/javascript'; document.head.appendChild(TAG);
// #########################################

// ### ### ### ### ### ###
// **/     Концепт     \**
// - Много маленьких методов для удобной работы. В том числе и самые простейшие.
// - Цель - создание астракций, что бы работать с этими удобными методами, а не вспоминать постоянно как что пишется на js
// - Скрипт можно копировать целиком в консоль.

// ### ### ### ### ### ###
// **/     Правила     \**
// - Деление групп методов на главы.
// - Все методы многострочные. Без ужатий в 1 строку. (Кроме коротких и красивых)   UPD: Ужимать иначе портянки
// - Между методоми пустая строка.  UPD: Нет
// - У каждого метода коментарий в 1 строку.   UPD: хаха, дада
// - Аргумент с элементом называется 'e'
// - Аргумент с target    называется 't'
// - Только нативный JS, без JQuery.
// - Методы могут использовать друг друга. Однако по возможности избегать использования соседей, если они совсем простые и короткие.
// - Без защит от дурака.
// - Файл используется(объявляется) только целиком, а не отдельные методы. (Тк они могут быть завязаны друг на друга)
// - Подключается либо через тег(в проектах), либо вставкой целиком в консоль.
// - Замыкания нежелательны.
// - Если в аргументах только элемент или target , то вокруг ставятся пробелы ---> func123( e )
// - Все фигурные скобки с новой строки. (Не оставлять первую наверху, бесит)
// - Всегда пишу URL вместо URI, бесит.
// - Наиболее универсальные и простые(самые законченые и безпроблемные) группы методов - ближе к вверху файла.
// - В конце файла стоит комментарий-заглушка --> // End
// - Кодировка = UTF-8 без BOM
// - Все сразу тестировать.  Если не протестирован - писать коммент.
// - Между секциями - отступ 2 строки.   Между большими методами - одна.    Между однострочными - без.   UPD: Уже не факт

// - Концепт спонтанно придуман 100123. И сразу описано 20-30шт будущих методов. Почти 3500 символов текста, 130 строк.
// - Все началось с записи внезапной идеи одного метода в тхт на столе(в 21:00).  Потом пришли еще идеи и вот там уже 100 строк.(Итого +1 час)  Потом репа и код.
// - Первый присяд - 100123 ‏‎22:03 - 110123 07:00 подряд бзе перерывов ==> 285 фулл готовых строк.  95 готовых методов. Я вообще не планировал все это писать, все спонтанно.
// - Первый присяд UPD - Просидел еще до 10:00.  ==>  380 фулл готовых строк.  124 готовых методов, 23300 симв.  Итого 12 часов подряд, всю ночь.


// ### ### ### ### ### ### ### ###
// **/  Комментарии с форумов  \**
// - Какой же маразм js. Надстройка над надстройкой, надстройкой погоняет. никакой красоты, одни выкрутасы.
// - мы прототипизировали, прототипизировали, да не выпрототипизировали.   а потом функционал пропадает...



// ### ### ### ### ### ###
// **/ Проверки типов  \**
// НЕЛЬЗЯ - Проврять только напрямую в коде.   function isUndef( t ){   }
function isNull( t )  { return (Boolean)( t === null ); }
function isBool( t )  { return (Boolean)( t.constructor == Boolean ); }
function isNumber( t ){ return (Boolean)( t.constructor == Number  ); }
//function isNumberFloat( t ){ return (Boolean)(  ); }       // TODO
//function isNumberInt  ( t ){ return (Boolean)(  ); }       // TODO
function isFunc( t )  { return (Boolean)( t.constructor == Function ); }
function isString( t ){ return (Boolean)( t.constructor == String ); }
function isObject( t ){ return (Boolean)( t.constructor == Object ); }
function isArray( t ) { return (Boolean)( t.constructor == Array ); }
function isArrayOfStrings( t ){ function check(elem,index,array){ return ( elem.constructor == String ); }  return t.every(check); }
function isArrayOfNumbers( t ){ function check(elem,index,array){ return ( elem.constructor == Number ); }  return t.every(check); }
function isArrayOfArrays( t ) { function check(elem,index,array){ return ( elem.constructor == Array  ); }  return t.every(check); }
function isJsonString( t ){ try { JSON.parse( t ); return true; } catch (e) { return false; } }
function isElement( t ){ return (Boolean)( t.nodeType ); }


// ### ### ### ### ### ### ###
// **/ Работа со строками  \**
function str_trimRecursive( str )
{
    var patterns = { '  ':' ' , '\n\n':'\n' , '\n \n':'\n' }; // Замены, которые нужны, когда используешь .Text() на большом теге.
    for (const [key,val] of Object.entries( patterns )) // Для каждого паттерна.
        for( ; str.indexOf(key) > -1 ; )  str = str.replace(key,val); // Прогоняю замену пока есть что менять.

    return str;
    //str_trimRecursive('g  jo    dfn v md fol   vmd    ');  // --> 'g jo dfn v md fol vmd '
}
function str_contains(haystack,needle){ return ( haystack.indexOf(needle) > -1 ); }
function str_replaceOnce(search,replace,subject){ return subject.replace(search, replace); }  // !!!! Только первое вождение
function str_replaceALL(search,replace,subject){ while( subject.indexOf(search) >= 0 ) { subject = subject.replace(search, replace); } return subject; }
function str_explode(separator,string){ return string.split(separator.toString()); }
function str_explode_2steps(string, separatorLeft, separatorRight){ return string.split(separatorLeft.toString())[1].split(separatorRight.toString())[0]; }
//log(str_explode_2steps('123123_LtargetR_123213','L','R'));
function str_implode(haystack,glue){ return haystack.join(glue.toString()); }
function str_toUpper(text){ return text.toUpperCase(); }
function str_toLower(text){ return text.toLowerCase(); }
function str_strPos(text, search){ var i = text.indexOf( search );  return i >= 0 ? i : false; }


// ### ### ### ### ### ### ###
// **/  Работа с числами   \**
function num_toIntUp  (mixed_var){ return Math.ceil (mixed_var); } // 9.9999999999995 -> 10
function num_toIntDown(mixed_var){ return Math.floor(mixed_var); } // 9.9999999999995 -> 9
function num_numberFormat( num, decimals=2 ){  return parseFloat( parseFloat(num).toFixed(decimals) );  } // Тестить
function num_percent( n1 , n2 ){ return Math.floor((n1/n2)*100); } // Целым числом

// ### ### ### ### ### ### ###
// **/ Работа с массивами  \**
function arr_keyExists( key , arr ){ return (arr[key] !== undefined); }
function arr_inArray( arr, search ){ return arr.includes(search); }
function arr_deleteByIndex( arr, index ){ arr.splice(index , 1); /* Возврат не нужен, тут по ссылке */ }
function arr_deleteByIndexReal( arr, index ){ arr.splice(index+1 , 1); /* Возврат не нужен, тут по ссылке */ }
function arr_deleteFirst( arr, index ){ arr.splice(0 , 1); /* Возврат не нужен, тут по ссылке */ }
function arr_deleteLast( arr, index ){ arr.splice(arr.length-1 , 1); /* Возврат не нужен, тут по ссылке */ }


// ### ### ### ### ### ### ###
// **/ Работа с объектами  \**
function obj_keys( obj ){ return Object.keys(obj); } // Только объекты{1:2}.  Для массива вернет 0123
function obj_deleteByKey( obj, key ){ delete obj[ key ]; /* Возврат не нужен, тут по ссылке */ }

// ### ### ### ### ### ### ###
// **/ Конвертеры  \**

// Будут элементы с   null
function convert_Json1lvl_To_Array( json )
{
    var resArr = [];
    
    for (var key in json)
        resArr[key] = json[key];
    
    return resArr;
}


// ### ### ### ### ### ### ###
// **/ Мои аналоги PHP методов. Без защиты от дурака. \**
function PHP_explode(separator,string){ return string.split(separator); }
function PHP_str_contains(haystack,needle){ return ( haystack.indexOf(needle) > -1 ); }
function PHP_str_replace(search,replace,subject){ return subject.replace(search, replace); }
function PHP_trim(string){ return string.trim(); } // Спорно
function PHP_trimTextRecursive(string){ for( ; string.indexOf('  ') > -1 ; )  string = string.replace('  ',' ');  for( ; string.indexOf('\n\n') > -1 ; ) string = string.replace('\n\n','\n');  for( ; string.indexOf('\n \n') > -1 ; ) string = string.replace('\n \n','\n'); return string.trim();  }
function PHP_random_int(min, max){ return Math.floor(Math.random() * (max - min + 1) + min); }
// Не переразбирал


// ### ### ### ### ### ### ###
// **/ Генераторы и рандом \**
function genRandom_Int( min=0, max=99 ) { if( max ) { return Math.floor(Math.random() * (max - min + 1)) + min; } else { return Math.floor(Math.random() * (min + 1)); } }
function genRandom_String( len=6, alphabet='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789' ){ var res = ""; while (res.length < len) { res += alphabet[Math.floor(Math.random() * alphabet.length)];} return res;}
function genRandom_ColorHex(  ){ return '#'+generateRandom_String( 6, '0123456789ABCDEF' ); } // logCustom('123123123',16,'black',generateRandom_ColorHex());



// ### ### ### ### ### ###
// **/ Логи в консоль  \**
function log( t1 , t2='_DEF' ,t3='_DEF' ){ console.log(t1);  if(t2!=='_DEF')console.log(t2);  if(t3!=='_DEF')console.log(t3);  }
function logOneRed  ( t ){ console.log('%c'+t, 'color:red'  ); }
function logOneBlue ( t ){ console.log('%c'+t, 'color:blue' ); }
function logOneGreen( t ){ console.log('%c'+t, 'color:green'); }

function log_i( i ){ console.log('##### '+i+' #####'); }
function logEmpty(height=2){ console.log(''.padStart(height,'\n')) }
function logCustom(t, fontSize=16, color='white', bgColor='none'){ console.log( '%c'+t , 'color:'+color+'; font-size:'+fontSize+'px; background-color:'+bgColor+';'); }

function logLineUniv(symb='#=', len=61, emptyOffsetsTop=1, emptyOffsetsBott=1, color='white'){ var t='';  t+=''.padStart(emptyOffsetsTop,'\n');  t+=''.padStart(len,symb);  t+=''.padStart(emptyOffsetsBott,'\n');  t+='\n';  console.log( '%c'+t , 'color:'+color+';' ); }
function logLine_10_red(){ logLineUniv('#=',61,1,0, 'red'); }
function logLine_10(){ logLineUniv('#=',61,1,0); }
function logLine_11(){ logLineUniv('#=',61,1,1); }
function logLine_20(){ logLineUniv('#=',61,2,0); }
function logLine_22(){ logLineUniv('#=',61,2,2); }
function logLine_01(){ logLineUniv('#=',61,0,1); }
function logLine_02(){ logLineUniv('#=',61,0,2); }
//logLine(); logLine('-'); logLine('=',60,3,3); logLine('#',60,5,5);
//logCustom('123 test 123');
// TODO:   function logText00000   цветастые и тд.  разные методы, много    сразу разные заготовки.



// ### ### ### ### ### ### ###
// **/  Дампы из лары  \**
window.dump = function (...data) { data.forEach(function(element) { console.log(element); }); };
window.dd = function (...data) { console.log('\n\n\n#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#\n\n'); data.forEach(function(element) { console.log(element); }); throw { message: 'Stopped execution because dd()', toString: function () { return this.message; }, }; };
/* https://github.com/appstract/dd.js */


// ### ### ### ### ### ### ###
// **/  Работа с ошибками  \**
function errorPrinter(e){ console.log(`${e.stack}\n\nMsg: ${e.message}\nName: ${e.name}\n\nFile: ${e.fileName}\nLine: ${e.lineNumber}\nCol:  ${e.columnNumber}\n\nCause: ${e.cause}`); }


// ### ### ### ### ### ### ### ###
// **/   Работа с событиями    \**
function addEvent_ExitDialog( ){  window.onbeforeunload = function() { return false; /* Либо текст */ };  }
function addEvent_DisableFormSubmits( ) {
    let forms = document.querySelectorAll('form');
    forms.forEach( function(one ,i , arr)
    {
        one.addEventListener('submit', function(event)
            { event.preventDefault();   alert('Заблочена отправка формы'); }); /* Работает */
    });
}
function addEvent_DisableClicksTagA( ) {
    let tags = document.querySelectorAll('a');
    tags.forEach( function(one ,i , arr)
    {
        one.addEventListener('click', function(event)
            { event.preventDefault();   alert('Заблочен клик ссылки'); }); /* Работает */
    });
}



// ### ### ### ### ### ### ###
// **/   Получение тегов   \**
function tag_getAllOrFalse  (target){ var res = document.querySelectorAll(target);  if( ! res.length  ) return false;  else  return res;     }
function tag_getFirstOrFalse(target){ var res = document.querySelectorAll(target);  if( ! res.length  ) return false;  else  return res[0];  }
function tag_getNthOrFalse  (target,n){var res= document.querySelectorAll(target);  if(res.length <= n) return false;  else  return res[n];  }
function tag_getOneOrFalse  (target){ var res = document.querySelectorAll(target);  if(res.length!== 1) return false;  else  return res[0];  }
function tag_getCount       (target){ return document.querySelectorAll(target).length;  }

// ### ### ### ### ### ### ###
// **/   Работа с 1 тегом   \**
//elem_GetSubElements_AllOrFalse...    брать из скипта вк
//elem_GetSubElements_FirstOrFalse
//elem_GetSubElements_OneOrFalse
function elem_attrAddBlankIfNeed( e ){  if( ! e.getAttribute('target') ){ e.setAttribute('target','_blank'); return true; }  }
function elem_attrSetStyleColorRed( e ){  e.style = 'color: red';  }

function elemCreateFromHtml(htmlString){
    const placeholder = document.createElement("div");
    placeholder.innerHTML = htmlString;
    return placeholder.firstElementChild;
}
//elemCreateFromHtml('<pre>12%<pre>1% </pre> </pre>');



// TODO: Допсать обработчик data-полей  там на 95% готово.
// Назначение: Вытащить из элемента все потенциально возможные данные, при этом чтоб 100% без вылетов + заменять пустые ключ-словом.
function elementDataExtractor( e , textForNull='NULL' )
{
    var res = { }; // Правило: Лучше чтоб было чем не было - Вписывать все, что хоть раз было нужно.
    
    
    // Проблема: Не могу динамически подставить нужный атрибут в   e.XXX    Тогда можно было бы сделать в цикле по массиву параметров.
    // Ибо что-то можно получить через getAttribute,  а что-то надо вызывать только через точнку. (напр .innerHTML)
    
    // ###  IMG  ###
    try{ res['src']    = e.src;    }catch(err){ res['src']    = textForNull; }
    try{ res['width']  = e.width;  }catch(err){ res['width']  = textForNull; }
    try{ res['height'] = e.height; }catch(err){ res['height'] = textForNull; }
    try{ res['title']  = e.title;  }catch(err){ res['title']  = textForNull; }
    try{ res['alt']    = e.alt;    }catch(err){ res['alt']    = textForNull; }
    
    // ###  Общее 1  ###
    try{ res['innerText']   = e.innerText;   }catch(err){ res['innerText']   = textForNull; }
    try{ res['innerHTML']   = e.innerHTML;   }catch(err){ res['innerHTML']   = textForNull; }
    try{ res['textContent'] = e.textContent; }catch(err){ res['textContent'] = textForNull; }
    try{ res['text']        = e.text;        }catch(err){ res['text']        = textForNull; }
    
    // ###  Общее 2  ###
    try{ res['id']    = e.id;    }catch(err){ res['id']    = textForNull; }
    try{ res['class'] = e.class; }catch(err){ res['class'] = textForNull; }
    try{ res['style'] = e.getAttribute('style'); }catch(err){ res['style'] = textForNull; }
    try{ res['href']  = e.href;  }catch(err){ res['href']  = textForNull; }
    
    // ###  Редко нужное  ###
    try{ res['onclick'] = e.onclick; }catch(err){ res['onclick'] = textForNull; }
    
    // ###  Meta  ###
    try{ res['content'] = e.content; }catch(err){ res['content'] = textForNull; }
    try{ res['name']    = e.name;    }catch(err){ res['name']    = textForNull; }
    
    // ###  Input + Form  ###
    
    // ###    ###
    //try{ res[''] = e.; }catch(err){ res[''] = textForNull; }
    
    
    // Проверка на нули и андеф
    for (const [key, val] of Object.entries( res ))
    {
        if( val === '' )       res[key] = textForNull; // + '_empty';
        if( val === null )     res[key] = textForNull; // + '_null';
        if( val === undefined) res[key] = textForNull; // + '_undef';
    }// End for
    
    
    /*  TODO: На доработку,  часть полей undef или null     но в целом все работает как надо
    try{
        var datasetVal = e.dataset;

        if( (datasetVal === null) || (datasetVal === undefined) )
            res['DATASET'] = { };
        else
            res['DATASET'] = datasetVal;
    }catch(err){ res['DATASET'] = { }; }

    if( res['DATASET'].length !== 0 )
        for (const [key, val] of Object.entries( res['DATASET'] ))
        {
            if ((datasetVal === null) || (datasetVal === undefined))
                res['data-' + key] = textForNull;
            else
                res['data-' + key] = val;
        }

    //if( (val !== null) && (typeof(val) !== "undefined") )
    // */
    
    res['ALL'] = res;
    
    //dump(res);
    //dd(res);
    return res;
}
//elementDataExtractor(tag_getNthOrFalse('div.PostHeaderInfo a.author',1));
//elementDataExtractor(tag_getNthOrFalse('a',6));




// ### ### ### ### ### ### ### ###
// **/  Действия на странице   \**
function action_Click_BySelFirst ( selector ){ document.querySelectorAll(selector)[0].click(); }
function action_Submit_BySelFirst( selector ){ document.querySelectorAll(selector)[0].submit(); }



// ### ### ### ### ### ### ###
// **/   Работа с IFRAME   \**
function detectRunningInIframe(){ return (Boolean)( document.location.ancestorOrigins.length >= 1); } /* У топа 0, у фреймов 1. Там список родителей. */
function detectRunningInIframe_v2(){ try { isFramed = window != window.top || document != top.document || self.location != top.location; return false; } catch (e) { isFramed = true; }  }

// Предварительно готово
function frames_GetBigInfoArr() {
    var cnt = frames.length;

    var FIN = { };

    //dd(frames);
    for (var i = 0 ; i<frames.length ; i++)
    {
        var currF = frames[i];
        //console.log(currF);

        var buf = {
            'FRAME' : currF,
            'FRAME_Element' : currF.frameElement,

            'iframe_uri' : currF.frameElement.baseURI,
            'iframe_node' : currF.frameElement.nodeName,
            'iframe_outerHtml' : currF.frameElement.outerHTML,

            'origin' : currF.origin,
            'name' : currF.name,

            'href' : currF.location.href,
            'UA' : currF.navigator.userAgent,

            'opener' : currF.window.opener,
            'size_h' : currF.window.outerHeight,
            'size_w' : currF.window.outerWidth,
        };

        FIN[i] = buf;
        //FIN[i]['aaa'] = val;
    }

    // ссылка
    // заголовок
    // элемент
    //

    return FIN;

}

function frames_GetCount_Frames(){ return frames.length; /* Количество iframe */ }
function frames_GetCount_IframeTag(){ return document.getElementsByTagName('iframe').length; }







// ### ### ### ### ### ### ###
// **/       Парсеры       \**
function easyParcer_Forms_AUTO(  ) {
    // Доработка - список инпутов с их данными-тексты, плейсхолдеры и тд.
    var finalJson = { };
    var arrElems = document.querySelectorAll( 'form' );
    console.log('Найдено: '+arrElems.length);

    arrElems.forEach( function( e , i )
    {
        finalJson[i] = {
            '_raw' : e,
            '_action' : e.action,
            '_id' : e.id,
            '_method' : e.method,
            'innerHTML' : e.innerHTML,
            'innerText' : e.innerText,
            'outerHTML' : e.outerHTML,
        };
        //console.log(e);
    });

    console.log(finalJson);
}
function easyParcer_Href( selector ) {
	var finalJson = { };
	var arrElems = document.querySelectorAll(selector);
	console.log(arrElems.length);
	
	arrElems.forEach( function( e , i ){
		finalJson[i] = e.href;
	});
	
	return finalJson;
}

// ### ### ### ### ### ### ###
// **/    Скрипты для VK   \**
/**
 * Выдаст полный список VK-Ссылок на все изображения в открытом альбоме.
 *
 * Испольнование: 1) Открыть альбом по ссылке формата https://vk.com/album-123123_123123
 * 2) Полностью отлистать его до низа, чтоб прогрузил все карточки.
 * 3) Вставить в консоль и вызвать метод. Потом ПКМ-Копировать как объект и вставить в тхт.
 *
 * Формат выдачи: JSON с кучей строк "https://vk.com/photo-123123_123123"
 * Это нужно для последующей работы с этими пикчами через VK-API. (Обычно прикрепить к посту)
 * Version=091123 0318
 */
function VK_AlbumsHrefParcer(  ){
    var resJson = easyParcer_Href( '.photos_row a' );
    var resArr = [];
    
    for (var key in resJson)
        resArr[key] = str_explode('?',resJson[key])[0];
    
    return resArr;
}

/**
 * Пересчитает стандартную таблицу статистик записей и наглядно выведет нужные метрики.
 * Больше не надо копаться в цифрах и что-то искать.
 * https://vk.com/stats?act=posts&gid=1112223333
 * Version=091123 0318
 */
function VK_GroupStatPerform( ){
    // Написан в дек22.  Фулл переписан 091123.
    var DEBUG = false;
    
    var ROWS = tag_getAllOrFalse(".paginated_table_row");
    
    for (let r of ROWS)
    {
        //var r = ROWS[1];
        var rText = r.innerText; // ' \n1 фотография\n13 дек 2022 в 16:22\n\t\n142 / 117\nчеловек\n\t41\t0\t0'
        var rHtml = r.innerHTML;
        if(DEBUG){ logOneRed('====1'); log(rText,rHtml); }
        
        var viewsRawText_1 = PHP_explode('\n\t\n',rText)[1];
        var viewsRawText_2 = PHP_explode('\nчеловек\n\t',viewsRawText_1)[0];
        var viewsRawText_3 = PHP_explode(" / ",viewsRawText_2);
        if(DEBUG){ logOneRed('====2'); log(viewsRawText_1,viewsRawText_2,viewsRawText_3); }
        
        var viewTotal = viewsRawText_3[0];  viewTotal = PHP_str_replace(' ','', viewTotal); // Для цифр больше 1000.
        var viewViral = viewsRawText_3[1];  viewViral = PHP_str_replace(' ','', viewViral);
        var viewSubs  = viewTotal - viewViral;
        if(DEBUG){ logOneRed('====3'); log(viewTotal,viewViral,viewSubs); }
        
        var viewViral_Perc = 100 - num_percent( viewViral , viewTotal);
        var viewSubs_Perc  = 100 - num_percent( viewSubs  , viewTotal);
        if(DEBUG){ logOneRed('====4'); log(viewViral_Perc,viewSubs_Perc); }
        
        var likes = PHP_explode('\t',PHP_explode('\nчеловек\n\t',rText)[1])[0];
        var percentLikes_vTotal = Math.floor((likes/viewTotal)*100);
        
        var dop = '';
        if(percentLikes_vTotal >= 10) dop = ' <span style="color:lime;"  >#</span>';
        if(percentLikes_vTotal >= 15) dop = ' <span style="color:yellow;">##</span>';
        if(percentLikes_vTotal >= 20) dop = ' <span style="color:orange;">###</span>';
        if(percentLikes_vTotal >= 25) dop = ' <span style="color:red;"   >####</span>';
        
        var dopViral = '';
        if(viewViral_Perc >= 25) dopViral = '<span style="color:lime;"  >##</span>';
        if(viewViral_Perc >= 50) dopViral = '<span style="color:yellow;">####</span>';
        if(viewViral_Perc >= 75) dopViral = '<span style="color:red;"   >######</span>';
        
        var textFinLike = '[ '+percentLikes_vTotal+'% | '+likes+' ]'+dop;
        var likesPattern = '_2" class="paginated_table_cell posts_reach_td_num pt_align_right" style="white-space: nowrap;">';
        rHtml = PHP_str_replace( likesPattern+likes , likesPattern+textFinLike , rHtml);
        
        var textFinSub = '[SUB='+viewSubs_Perc+'% | VIR='+viewViral_Perc+'% | '+dopViral+' ]';
        rHtml = PHP_str_replace('человек',textFinSub,rHtml);
        
        if(DEBUG){ logOneRed('====5'); log(rHtml,textFinLike); }
        
        r.innerHTML = rHtml;
        if(DEBUG){ return; }
    }
    
    // Вк не дочистил код от своей старой фичи.
    // class="stat_group_postsreach__evegreen_mark"
    // https://vk.com/@adminsclub-evergreen
}

/**
 * Открыта ли сейчас страница со стеной группы.
 * @returns {boolean}
 */
function VK_GroupWall_Check(){  return (document.querySelectorAll( 'div.redesigned-group-info' ).length > 0);  }

function VK_AnyWall_GetCardsCount(){
    return tag_getCount("div._post.post");
}

function VK_GroupWall_GetCardsIds(){
    var cardsAllRaw = tag_getAllOrFalse("div._post.post");
    
    var FIN = [ ];
    
    for (let CARD of cardsAllRaw)
        FIN.push(CARD.id);
    
    return FIN;
}

function VK_GroupWall_GetOneCardInfo(postId){
    var SEL = {
        'CARD': `div#${postId}`,
        'DATE': `div#${postId} div._post_content div.PostHeader div.PostHeaderInfo div a time`,
        'LIKE': `div#${postId} div._post_content div.post_info div.like_wrap div.like_cont div.like_btns div div.PostBottomAction`,
        'COMM': `div#${postId} div._post_content div.post_info div.like_wrap div.like_cont div.like_btns div.comment`,
        'REPO': `div#${postId} div._post_content div.post_info div.like_wrap div.like_cont div.like_btns div.share`,
        'VIEW': `div#${postId} div._post_content div.post_info div.like_wrap div.like_cont div.like_views`,
    };
    
    var CARD = document.querySelector( SEL['CARD'] );
    
    var FIN =
        {
            'ID': postId,
            'RAW' : CARD,
            'TEXT': CARD.outerText,
            'HTML': CARD.outerHTML,
            'TIME': document.querySelector( SEL['DATE'] ).textContent,
            'LIKE': document.querySelector( SEL['LIKE'] ).getAttribute('data-reaction-counts'),
            'COMM': document.querySelector( SEL['COMM'] ).getAttribute('data-count'),
            'REPO': document.querySelector( SEL['REPO'] ).getAttribute('data-count'),
            'VIEW': document.querySelector( SEL['VIEW'] ).getAttribute('title'),
        };
    
    FIN.LIKE = JSON.parse(FIN.LIKE)[0];
    FIN.COMM = parseInt(FIN.COMM);
    FIN.REPO = parseInt(FIN.REPO);
    FIN.VIEW = parseInt(FIN.VIEW.split(' ')[0]);
    
    return FIN;
}

function VK_GroupWall_PerformCardOne(CardInfo){
    var PID = CardInfo.ID;
    var myDivId = 'myStat';
    var myDivPlace = `div#${PID} div._post_content div.post_info div.like_wrap div.like_cont div.like_views`;
    var myDivSelectId = `div#${PID} div._post_content div.post_info div.like_wrap div.like_cont div.like_views div#${myDivId}`;
    
    if( document.querySelectorAll( myDivSelectId ).length )
        document.querySelector( myDivSelectId).remove();
    
    // - ####
    
    var LikesPerc = Math.floor((CardInfo.LIKE/CardInfo.VIEW)*100);
    
    var dop = '';
    if(LikesPerc >= 10) dop = '<span style="color:lime;"  >#</span>';
    if(LikesPerc >= 15) dop = '<span style="color:yellow;">##</span>';
    if(LikesPerc >= 20) dop = '<span style="color:orange;">###</span>';
    if(LikesPerc >= 25) dop = '<span style="color:red;"   >####</span>';
    
    if(LikesPerc <= 4) LikesPerc = `<span style="color:red;">${LikesPerc}</span>`;
    
    var preInnerContent = `${dop} ${LikesPerc}% | ${CardInfo.VIEW} |`;
    
    // - ####
    
    var elemFin = elemCreateFromHtml(
        `<div id="${myDivId}">
                       <pre style="font-weight: bold;  font-size: 16px;">${preInnerContent} </pre>
                   </div>` );
    
    document.querySelector( myDivPlace ).prepend( elemFin ); // Добавит в начало
    
    return preInnerContent;
}

function VK_GroupWall_PerformCardsALL() {
    var cardIds = VK_GroupWall_GetCardsIds();
    
    var FIN = [];
    for (let ID of cardIds)
    {
        var INFO = VK_GroupWall_GetOneCardInfo(ID);
        var CONT = VK_GroupWall_PerformCardOne(INFO);
        //FIN.push( [INFO,CONT] );
        FIN[ID] = [INFO,CONT];
    }
    return FIN;
}

/**
 * Автоматически проверять обновления и делать перерасчеты если надо.
 * Предназначено для вызова на каждой странице, через расширение хрома.
 */
function VK_GroupWall_AUTOMODE()
{
    var PREF = 'VK_WALL';
    var recheckTimeFloatSec = 3;
    
    // Если это не стена группы, то не запускать.
    if( ! VK_GroupWall_Check )
    {
        log(`${PREF}: Это не стена - выхожу`);
        return;
    }
    else
    {
        log(`${PREF}: Задержка ${recheckTimeFloatSec}сек`);
    }
    
    
    var iter = 0;
    var postsCntLast = 0;
    setInterval(function(){
        iter += 1;
        
        var postsCntNow = VK_GroupWall_GetCardsIds().length;
        
        if( postsCntNow > postsCntLast )
        {
            logLine_10_red();
            log(`${PREF}: Итерация № ${iter} | Всего минут ${parseInt( (iter*recheckTimeFloatSec)/60 )} ]`);
            log(`${PREF}: Новые посты = [ Было ${postsCntLast} | Сейчас ${postsCntNow} ]`);
            
            // TODO: NOTE - Пересчитывает все сразу, а не только новые.
            var RES = VK_GroupWall_PerformCardsALL();
            log(RES);
            
            postsCntLast = postsCntNow;
        }
        else
        {
            // Новых нет
        }
        
        if( iter%100 === 0 )
            log(`${PREF}: Итерация № ${iter} | Всего минут ${parseInt( (iter*recheckTimeFloatSec)/60 )} ]`);
        
    }, recheckTimeFloatSec*1000);
    
    log(`${PREF}: Конец функции.`);
}







// ### ### ### ### ### ### ###
// **/  Страничные методы  \**
function page_titleGet( ){ return document.querySelector('title'); }
function page_titleSet(t){ return document.querySelector('title').text = t; }
function page_getFullPageText( ){ return document.querySelector('html').innerText; }
function page_getFullPageHtml( ){ return document.querySelector('html').outerHTML; }
function page_getAllFormsElems(){ return document.querySelectorAll('form'); }
function page_getAllLinksElems(){ return document.querySelectorAll('a'); }
function page_getAllLinksHrefs(){ var arrLinks = []; document.querySelectorAll('a').forEach( function(one,i) {  arrLinks.push(one.href);  } ); return arrLinks; }
function page_getAllImageElems(){ return document.querySelectorAll('img'); }
function page_getAllImgSrc()    { var arrLinks = []; document.querySelectorAll('img').forEach( function(one,i) {  arrLinks.push(one.src);  } ); return arrLinks; }
function page_getFaviconUrls()  {
    var arrLinks = [];
    document.querySelectorAll('head link').forEach( function(one,i) {
        if( one.href && (one.href.indexOf('.ico') > -1 ) ){ arrLinks.push(one.href); console.log('href-ico',one); } else
        if( one.href && (one.href.indexOf('.png') > -1 ) ){ arrLinks.push(one.href); console.log('href-png',one);} else
        if( one.rel  && (one.rel.indexOf ('icon') > -1 ) ){ arrLinks.push(one.href); console.log('rel-icon',one);} // Робит
        //else if( (Boolean)one.sizes ){ arrLinks.push(one.href); console.log('sizes',one);}
    } );  return arrLinks;
}
function page_clearHtml(){ document.querySelector('html').innerHTML = ''; }
function page_printImagesFromArrUrls(arr){  arr.forEach( function(one,i) { var TAG = document.createElement('img'); TAG.src = one; TAG.alt = one; TAG.style = 'border:solid;'; document.body.appendChild(TAG);  });  }

/*
var arrImg = page_getAllImgSrc(); var arrFav = page_getFaviconUrls();
page_clearHtml() page_printImagesFromArrUrls( arrFav ); page_printImagesFromArrUrls( arrImg );
// */

// ### ### ### ### ### ### ###
// **/      Прокрутки      \**
function scroll_GetPageHeight(){ return Math.max( document.body.scrollHeight, document.documentElement.scrollHeight, document.body.offsetHeight, document.documentElement.offsetHeight, document.body.clientHeight, document.documentElement.clientHeight ); }
function scroll_UP_Px  ( countPx   ){ window.scrollBy({ top: -countPx, left: 0, behavior: 'smooth' }); }
function scroll_DW_Px  ( countPx   ){ window.scrollBy({ top:  countPx, left: 0, behavior: 'smooth' }); }
function scroll_UP_Perc( countPerc ){ window.scrollBy({ top: document.documentElement.scrollHeight*(-countPerc/100), left: 0, behavior: 'smooth' }); }
function scroll_DW_Perc( countPerc ){ window.scrollBy({ top: document.documentElement.scrollHeight*( countPerc/100), left: 0, behavior: 'smooth' }); }
//scroll_ToElem_ByElem
//scroll_ToElem_BySelector


// ### ### ### ### ### ### ### ###
// **/  DOM Загрузка страницы  \**
function DOM_LoadStateCheck_Full(){ return (document.readyState === 'complete'); }
function DOM_StopPageLoad_AfterSec( secDotted ){ setTimeout(()=>{ if( DOM_LoadStateCheck_Full() ){console.log('DOM_StopPageLoad_AfterSec-уже'); return;}  window.stop(); console.log('DOM_StopPageLoad_AfterSec-остановлен'); }, (secDotted*1000)); }


// ### ### ### ### ### ### ###
// **/ Проверка типа тега  \**
function e_isDiv( e )  { return (Boolean)(e.nodeName === 'DIV'); }
function e_isA( e )    { return (Boolean)(e.nodeName === 'A'); }
function e_isForm( e ) { return (Boolean)(e.nodeName === 'FORM'); }
function e_isInput( e ){ return (Boolean)(e.nodeName === 'INPUT'); }
function e_isButton( e){ return (Boolean)(e.nodeName === 'BUTTON'); }
function e_isSpan( e ) { return (Boolean)(e.nodeName === 'SPAN' ); }
function e_isImg( e )  { return (Boolean)(e.nodeName === 'IMG'); }
function e_isP( e )    { return (Boolean)(e.nodeName === 'P'); }
function e_isIframe( e){ return (Boolean)(e.nodeName === ''); }
function e_isUl( e )   { return (Boolean)(e.nodeName === 'UL'); }
function e_isTable( e ){ return (Boolean)(e.nodeName === 'TABLE'); }
function e_isLi( e )   { return (Boolean)(e.nodeName === 'LI'); }
function e_isPre( e )  { return (Boolean)(e.nodeName === 'PRE'); }






// ### ### ### ### ### ### ###
// **/   Работа с окном   \**
function makeReload(waitMs=0){ console.log('# Reload #\n\nTimeMs: '+waitMs);  setTimeout(function(){ window.location.reload(); }, waitMs); }
function makeTabUrl( url ){ history.pushState(null, null, '/'); history.pushState(null, null, url); }
function makeRedirect(url, waitMs=0){ console.log('# Redirect #\n\nURL: '+url+'\nTimeMs: '+waitMs);  setTimeout(function(){ window.location.replace(url); }, waitMs); }
// makeRedirect('/'); makeRedirect('/', 5000);






// ### ### ### ### ### ### ### ### ### ### ###
// **/  Работа с новым окном и вкладками   \**
function TAB_Close( ){ window.close(); }
function TAB_CloseAfterSec( secFloat ){ console.log('TAB_CloseAfterSec - '+secFloat); setTimeout(function(){window.close();} ,secFloat*1000 ); }
function TAB_MakeTest( ){ return TAB_Make('https://stackoverflow.com/') }
function TAB_Make( url ){ return window.open( url , '_blank' ,''); }
// !!! Тут работает CORS.  Даст EVAL только для вкладок с тем же доменом.
/* https://itchief.ru/javascript/popup-browser-windows */
/* https://doka.guide/js/window-open/ */
// 'width=800,height=600 , top=150,left=150'





// ### ### ### ### ### ### ###
// **/  Кодировщики и тп   \**
function base64_decodeEngRus ( data ) {
    function utf8_for_base64 (utftext)
    {
        var string = ""; var i = 0; var c = c1 = c2 = 0; while ( i < utftext.length ) { c = utftext.charCodeAt(i);
        if (c < 128) { string += String.fromCharCode(c); i++; } else if((c > 191) && (c < 224)) { c2 = utftext.charCodeAt(i+1);
            string += String.fromCharCode(((c & 31) << 6) | (c2 & 63)); i += 2; } else { c2 = utftext.charCodeAt(i+1); c3 = utftext.charCodeAt(i+2);
            string += String.fromCharCode(((c & 15) << 12) | ((c2 & 63) << 6) | (c3 & 63)); i += 3; } } return string;
    }

    var b64 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";  var o1, o2, o3, h1, h2, h3, h4, bits, i=0, enc='';
    do {  // https://javascript.ru/php/base64_decode
        h1 = b64.indexOf(data.charAt(i++)); h2 = b64.indexOf(data.charAt(i++)); h3 = b64.indexOf(data.charAt(i++)); h4 = b64.indexOf(data.charAt(i++));
        bits = h1<<18 | h2<<12 | h3<<6 | h4;     o1 = bits>>16 & 0xff; o2 = bits>>8 & 0xff; o3 = bits & 0xff;
        if (h3 == 64)	  enc += String.fromCharCode(o1); else if (h4 == 64) enc += String.fromCharCode(o1, o2); else enc += String.fromCharCode(o1, o2, o3);
    } while (i < data.length);
    return utf8_for_base64(enc);  // Решит косяки с рус
}
function base64_encodeEngOnly( text ){ return btoa(text); } // Норм для англ
function base64_decodeEngOnly( text ){ return atob(text); }
// MD5


// ### ### ### ### ### ### ###
// **/         AJAX        \**

// Для дебага, чтоб я мог отослать кусок кода кому надо и данные сами вернутся мне.
function AJAX_Sync_ForDebug( TARG_URL , DATA_OBJ )
{
    var AX = new XMLHttpRequest();
    
    AX.onreadystatechange = function()
    {
        if(AX.readyState == XMLHttpRequest.DONE){  }
    };
    
    var DATA_JSON =  JSON.stringify( DATA_OBJ , null, 2 )
    var TARG_URL_2 = TARG_URL + '?JSON=' + DATA_JSON;
    
    AX.open("GET", TARG_URL_2, false);
    AX.send(  );
    
    return { 'NOTE': 'Это заметки для дебага аякса',
        'STATUS':AX.status , 'RESP_TEXT_RAW':AX.responseText ,
        'OBJ':AX , 'URL_2':TARG_URL_2 ,
        'DATA': DATA_OBJ ,
        'DATA_JSON':DATA_JSON };
}


// ### ### ### ### ### ### ###
// **/   Работа с JSON   \**
function JSON_ENCODE( all ){  return JSON.stringify( all , null, 4 ); /* Либо текст */  }
function JSON_DECODE( all ){  return JSON.parse( all ); /* Может вылететь */  }




// ### ### ### ### ### ### ###
// **/ Задержки и ожидание \**

function SLEEP( secFloat , needLog=true ){
    if( secFloat === 0 )
    {
        if(needLog) console.log( 'SLEEP: Begin - sec=0 - Return' );
        return;
    }
    
    var ms = secFloat*1000;

    var text = 'SLEEP: ('+secFloat+'сек => '+ms+'мс)';
    if(needLog) console.log( text+' Begin' );

    var i = 0;
    const date = Date.now();
    do {
        i++;
        // Бесполезные вычисления чтоб снизить количество итераций.
        //atob(btoa('BlaBlaBlaBlaBlaBlaBlaBla'.repeat(1000)));  // Снижает до  12512,/сек   проц 50
    } while ( (Date.now()-date) < ms);
    if(needLog) console.log( text+' i='+i );
}
// Работает. Пока самый нормальный аналог. Будет сильно грузить проц.   Подскакивает до 50% стабильно.
// Заметки: Забивает проц на 50% bли 100%.   Пусть так, главное функционал.
// Проблема: Огромное количество итераций - 8млн/сек.    Надо снизить путем забивания тела нагрузкой.
// Циклов без нагрузки за = 1 сек:(7917468,8032741,7804791,8015565,7910767) | 10 сек:(80913843,80242900,)
// Заметки: Ведение доп переменной для тек даты вообще не изменило итерации.

// Плохой. Задерживает только себя и свою функцию.  + надо все изолировать в него.  Будет очень неудобным
function sleep_promise(ms){  return new Promise(resolve => setTimeout(resolve, ms));  }
//sleep_promise(2000).then(() => { console.log("World!"); });


// ### ### ### ### ### ### ### ###
// **/  Отложенное исполнение  \**
function timerExecAfter( secFloat , callable ){ logLine_10();   SLEEP(secFloat);  log(callable);  callable(); logLine_01();  }

function timerCyclic( secFloat , callable ){  setInterval(function(){ callable(); }, secFloat*1000);  }
//timerCyclic(2, function(){ alert(1); } );


// ### ### ### ### ### ### ### ### ### ###
// **/ Имитация поведенческих факторов \**
function userImitator__ExecChain( ARR, fullChainTime )
{
    var secWaitSum = 0;
    for (var i = 0 ; i<ARR.length ; i++)
    {
        let timeWithPower = num_numberFormat( (ARR[i][0]/100*fullChainTime) ,2);
        // num_numberFormat((10/100*30),2); = 3.00
        
        var timeAfter = num_toIntDown( (secWaitSum + timeWithPower) * 1000 );  // инт чтоб без 3389.9999999999995
        setTimeout( ARR[i][1] , timeAfter ); // Скобки () не нужны
        
        log('Установлен таймер: Через '+timeAfter +' | Интервал '+timeWithPower +'\n'+ARR[i][1]);
        secWaitSum += timeWithPower;
    }
}
function userImitator_ActionsChain_Get()
{
    var ARR = [ // Мощность(100 в сумме) , функция
            [ 10 , function(){ logOneRed('111'); } ],
            [ 10 , function(){ logOneBlue('222'); } ],
            [ 10 , function(){ logOneGreen('333'); } ],
            [ 20 , function(){ scroll_DW_Perc(10); log('scroll_DW_Perc'); } ],
            [ 30 , function(){ scroll_UP_Perc(10); log('scroll_UP_Perc'); } ],
            [ 20 , function(){ scroll_DW_Perc(10); log('scroll_DW_Perc'); } ],
            //[ 1 , function(){ alert(123); } ],
            //[ 1 , function(){ TAB_Close( ); } ],
    ];
    return ARR;
}
//   userImitator__ExecChain( userImitator_ActionsChain_Get() , 10 );


// ### ### ### ### ### ### ### ###
// **/  Google   \**
function SERP_GOOGLE_TagsA_GetArr(){ return tag_getAllOrFalse('a[jscontroller][jsaction][jsname][ping][data-ved]'); }
function SERP_GOOGLE_TagsA_Prepare()
{
    for (const [key, e] of Object.entries(SERP_GOOGLE_TagsA_GetArr()) )
    {
        elem_attrAddBlankIfNeed(e);
        elem_attrSetStyleColorRed(e)
        console.log(`${key}: ${e}`);
    }
}
//SERP_GOOGLE_MakeFakeClick(url,num)  получаю   чек что есть   клик    труИлиФолс



// ### ### ### ### ### ### ### ### ###
// **/  DEV: В процессе написания  \**




// ### ### ### ### ### ### ### ###
// **/  Пока пусть лежит тут   \**
function jqueryLoaded(){ return ( (typeof(jQuery) !== 'undefined') ); /* typeof($) ложно срабатывал  |  jQuery.isReady  */ }; // Костыльненько :)
function jqueryVersion(){ console.log('JQuery = v'+jQuery.fn.jquery); } // "JQuery = v3.5.0"
function checkFunctionExist( callableFunc ){ return (typeof callableFunc === "function"); } // !!! Оборачивать вызов в TryCatch

// Все готовые



function getAnyUrlDomain(url)
{
    // Визуализация --> [https://] [translate.yandex.ru] [/] [?target_lang=ru] ...
    url = url.replace("https://", ''); // первее
    url = url.replace("http://", '');

    if( url.indexOf('/') > -1 )
        return url.split('/')[0];
    return url;
}
function getAnyUrlSubDomain(url)
{
    // Визуализация --> [bla] . [translate] . [yandex] . [ru]
    var domainFull = getAnyUrlDomain(url); // 'www.test.real.com'

    var zonesArr = domainFull.split('.');
    var zonesArrLen = zonesArr.length;

    var zonesArrPredPosl = zonesArr[ zonesArrLen-2 ]; // Предпосл элемент

    zonesArr.splice(zonesArrLen-1, 1); // com
    zonesArr.splice(zonesArrLen-2, 1); // real

    if( ['com'].includes(zonesArrPredPosl) ) // Доп опработка для двойных доменов 0 real.com.xxx
        zonesArr.splice(zonesArrLen-3, 1); // домен

    var res = zonesArr.join('.');
    return res;
}





// ### ### ### ### ### ### ### ###
// **/  Получение инфы о юзере \**

// Главный метод, который вытаскивает все и сразу.
function getUserInfo_FULL(){
    return {
        'NAVIGATOR' : getUserInfo_Navigator(),
        'DATETIME' : getUserInfo_DateTime(),
        'SCREEN'  : getUserInfo_Screen(),
        'URI'    : getUserInfo_URI(),
        'GPU'   : getUserInfo_GPU(),
        'RAM'  : getUserInfo_RAM(),
        'CPU' : getUserInfo_CPU(),
    };
}

// Получить всю инфу о экране. # FINAL #
function getUserInfo_Screen(){
    return {
        
        // Вся инфа: https://habr.com/ru/post/509258/   https://learn.javascript.ru/size-and-scroll-window
        
        // Палим полное, исходное разрешение экрана.
        //'screenResWidht' : window.screen.width,
        //'screenResHeight' : window.screen.height,
        'screenResolution' : window.screen.width+'x'+window.screen.height,
        
        // Размер всего окна браузера целиком. (Если фулл скрин, то вычитается панель системы внизу.)
        //'browserFullSizeWidth'  : window.outerWidth,
        //'browserFullSizeHeight' : window.outerHeight,
        'browserFullSize' : window.outerWidth+'x'+window.outerHeight,
        
        // Максимальный(полный) размер окна просмотра (вся видимая часть) (Без учета полоски)
        //'viewportMaxWidth'  : document.documentElement.clientWidth,
        //'viewportMaxHeight' : document.documentElement.clientHeight,
        'viewportMax' : document.documentElement.clientWidth+'x'+document.documentElement.clientHeight,
        
        // Реально доступный размер окна просмотра (вся видимая часть) (с вычетом полоски)
        //'viewportAvalWidth'  : window.innerWidth,   // Ширина полного окна, с учетом полоски
        //'viewportAvalHeight' : window.innerHeight, // Высота полного окна, с учетом полоски
        'viewportAvalaible'  : window.innerWidth+'x'+window.innerHeight,
        
        // ####
        
        'scrollWidth'  : document.documentElement.scrollWidth,  // хз
        'scrollHeight' : document.documentElement.scrollHeight, // хз
        
        //'fullScrollHeight' : Math.max(   // Полная высота документа с прокручиваемой частью
        //						document.body.scrollHeight, document.documentElement.scrollHeight,
        //						document.body.offsetHeight, document.documentElement.offsetHeight,
        //						document.body.clientHeight, document.documentElement.clientHeight),
    };
}

// Получить всю инфу о Времени/дате/поясе. # FINAL #
function getUserInfo_DateTime(){
    var now = new Date();
    
    var gmtRe = /GMT([\-\+]?\d{4})/; // Look for GMT, + or - (optionally), and 4 characters of digits (\d)
    var dtFull = now.toString();
    var tzNums = gmtRe.exec(dtFull)[1]; // timezone, i.e. -0700
    
    var tzText = Intl.DateTimeFormat().resolvedOptions().timeZone;
    
    return {
        'timeZoneText' : tzText, // Europe/Moscow
        'timeZoneNums' : tzNums, // +0300
        
        'dateTimeFull' : dtFull, // Sat Jan 08 2022 01:10:02 GMT+0300 (Москва, стандартное время)
        //'dateOnly' : now.toLocaleDateString(), // 08.01.2022
        //'timeOnly' : now.toLocaleTimeString(), // 01:14:59
        //'dateAndTime' : now.toLocaleString(), // 08.01.2022, 01:15:50
    };
}

// Получить всю инфу о браузере. Особенно UA. # FINAL #
function getUserInfo_Navigator(){
    return {
        'UA' : navigator.userAgent, // Mozilla/5.0 (Windows NT 6.3) ...
        'lang' : navigator.language, // ru-RU
        'langs' : JSON.stringify(navigator.languages), // ["ru-RU","ru","en-US","en"]
        'platform' : navigator.platform, // Win32
        
        'browserAppName' : navigator.appName, // Netscape
        'browserProduct'   : navigator.product,   // Gecko
        'browserProductSub'  : navigator.productSub, // 20030107
        'browserVendor'     : navigator.vendor,     // Google Inc.
        'browserVendorSub' : navigator.vendorSub, // '' пусто
        
        //'6' : navigator.mediaDevices, // [object MediaDevices]
        //'4' : navigator.clipboard, // [object Clipboard]
        //'5' : navigator.plugins, // [object PluginArray]
    };
}

// Получить всю инфу о текущей ссылке. Особенно path. # FINAL #
function getUserInfo_URI(){
    // <protocol>//<hostname>:<port>/<pathname><search><hash>  https://stackoverflow.com/a/20746566
    return {
        'URI' : window.location.href, // https://ru.wikipedia.org/wiki/123/?var=123123#test
        'URI_alt' : document.baseURI, // https://ru.wikipedia.org/wiki/123/?var=123123#test

        'PROTOCOL' : window.location.protocol, // https:

        'HOSTNAME' : window.location.hostname, // ru.wikipedia.org  возможно для впс и тд
        'HOST' : window.location.host,     // ru.wikipedia.org

        'PATH' : window.location.pathname, //  /wiki/123.php    Без слеша в конце

        'SEARCH' : window.location.search, // ?ggg=789   ?var=123123
        'ORIGIN' : window.location.origin, // https://site.com

        'HASH' : window.location.hash, //   #test
        'PORT' : window.location.port, // Пусто, видимо надо сокет, тогда покажет = 123123.com:8956
    };
}

// Информация о видеокарте, через канвас.
function getUserInfo_GPU(){
    var FIN = {
        'ERROR': false,
        'GL_VENDOR': 'UNDEF',
        'GL_RENDERER': 'UNDEF',
        'GL_RENDERER_2_XZ': 'UNDEF',
        'GL_IS_MOBILE': false,
    };
    
    var GL = document.createElement('canvas').getContext('webgl'); // Без записи на страницу.
    
    if ( ! GL )
    {
        FIN['ERROR'] = 'No WEBGL';
        return FIN;
    }
    
    try{
        
        const debugInfo = GL.getExtension('WEBGL_debug_renderer_info');
        
        FIN['GL_VENDOR'] = GL.getParameter(debugInfo.UNMASKED_VENDOR_WEBGL);
        FIN['GL_RENDERER'] = GL.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL);
        FIN['GL_RENDERER_2_XZ'] = GL.getParameter(GL.RENDERER); // "WebKit WebGL"
        
        FIN['GL_IS_MOBILE'] = ( FIN['GL_RENDERER'].toLowerCase().indexOf('mobile') >- 1 );
        
    }catch(e){ FIN['ERROR'] = 'TryCatch: ' + e.message; }
    
    return FIN;
}

function getUserInfo_RAM(){
    var FIN = {
        'ERROR': false,
        'RAM_GB': -1,
    };

    try{
        FIN['RAM_GB'] = navigator.deviceMemory;
    }catch(e){ FIN['ERROR'] = 'TryCatch: ' + e.message; }
    
    return FIN;
}

// Микро-бенчмарк скорости CPU. Не точный и надо учитывать ядра.
function getUserInfo_CpuEstimatedSpeed( runsMln=150 , cyclesPerRun=2 ){
    if( runsMln === false ) // Если выключено
        return { 'INPUT':{runsMln , cyclesPerRun}, 'TIME_S':-1, 'SPEED_RAW':-1, 'GHZ_RAW':-1, 'GHZ_FIN':-1 };
    
    // https://stackoverflow.com/a/42143572  061123
    // Надо подобрать такое число, что бы и проц успел нагрузиться, и не слишком долго.
    var runs = runsMln*1000000;
    
    const start = performance.now(); // in ms, usually with 100us resolution
        for (let i = runs; i>0; i--){ }
    const end = performance.now();
    
    const ms = end - start;
    const speedRaw = (runs / ms / 1000000);
    const speedWithCores = speedRaw * cyclesPerRun;
    
    var info = {
        'INPUT': { runsMln , cyclesPerRun },
        'TIME_S': Math.round(ms)/1000,
        'SPEED_RAW': Math.round(speedRaw    *100)/100,
        'GHZ_RAW': Math.round(speedRaw      *100)/100,
        'GHZ_FIN': Math.round(speedWithCores*100)/100,
    };
    
    return info;
}

function getUserInfo_CPU( bechmarkLoadOfFalse=false ){
    var FIN = {
        'ERROR': false,
        'CPU_CORES': -1,
        'CPU_SPEED_GHZ_ESTIM': -1,
        'CPU_SPEED_GHZ_ESTIM_INFO': -1,
    };
    
    try{
        FIN['CPU_CORES'] = navigator.hardwareConcurrency; // 2
        
        //if( bechmarkHighLoad ){ var benchLoad = 100; } else { var benchLoad = 600; }
        
        var cores = (FIN['CPU_CORES'] !== -1) ? FIN['CPU_CORES'] : 2; // Если удалось получить ядра, то подставляю.
        var info = getUserInfo_CpuEstimatedSpeed(bechmarkLoadOfFalse,cores);
        
        FIN['CPU_SPEED_GHZ_ESTIM'] = info['GHZ_FIN'];
        FIN['CPU_SPEED_GHZ_ESTIM_INFO'] = info;
        
    }catch(e){ FIN['ERROR'] = 'TryCatch: ' + e.message; }
    
    return FIN;
}






// ### ### ### ### ### ### ### ###
// **/  Быстрая добавка тегов  \**
function body_addElem( e ){ document.body.appendChild(e); }
function head_addElem( e ){ document.head.appendChild(e); }
function head_addComment( text ){ document.head.appendChild( document.createComment( text ) ); }
function univTagInserter(tagName, type, insertTo, srcOrCode) // Чисто технический метод !!!   // Пока только хед и боди.
{
    var TAG = document.createElement(tagName);
    switch(tagName)
    {
        case 'style': TAG.type = 'text/css';  break;
        case 'link':  TAG.rel  = 'stylesheet'; break;
        case 'script':TAG.type = 'text/javascript'; break;
    }
    if( type === 'href' ) TAG.href = srcOrCode;
    if( type === 'src'  ) TAG.src = srcOrCode;
    if( type === 'code' ) TAG.innerHTML = srcOrCode;

    TAG.title = "#### #### #### #### #### #### ####"; // Для выдимости

    if( insertTo === 'head' ) head_addElem(TAG); else body_addElem(TAG);
}

function head_addScriptBySrc ( src  ){ univTagInserter('script', 'src' , 'head', src ); }
function head_addScriptByText( code ){ univTagInserter('script', 'code', 'head', code); }
function body_addScriptBySrc ( src  ){ univTagInserter('script', 'src' , 'body', src ); }
function body_addScriptByText( code ){ univTagInserter('script', 'code', 'body', code); }

function head_addStyleBySrc ( href ){ univTagInserter('link' , 'href', 'head', href); }
function head_addStyleByText( code ){ univTagInserter('style', 'code', 'head', code); }
function body_addStyleByText( code ){ univTagInserter('style', 'code', 'body', code); }


// ### ### ### ### ### ### ### ###
// **/ Лоадеры всяких скриптов \**
function loadScript_(){ head_addScriptBySrc(''); } //
function loadScript__(){ head_addScriptByText(''); } //
function loadScript___(){ head_addScriptBySrc(''); head_addScriptByText(''); } //
function loadScript____(){ head_addScriptBySrc(''); setTimeout(function(){ body_addScriptByText(''); }, 3000);} //

function loadScript_JQuery_New() { head_addScriptBySrc('https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js' ); } // Payeer
function loadScript_JQuery_My () { head_addScriptBySrc('https://cdnjs.cloudflare.com/ajax/libs/jquery/1.11.0/jquery.min.js'); } // Мой



function loadScript___SnowFlakes(){ head_addScriptBySrc('https://s.siteapi.org/frontend/static/snowflakes.min.js'); setTimeout(function(){ body_addScriptByText('var sf = new Snowflakes();'); }, 3000);} // https://github.com/hcodes/snowflakes/releases
function loadScript_Snowstorm(){ head_addScriptBySrc('https://cdnjs.cloudflare.com/ajax/libs/Snowstorm/20131208/snowstorm-min.js'); setTimeout(function(){ head_addScriptByText('snowStorm.autoStart = true; snowStorm.flakesMax = 128; snowStorm.flakesMaxActive = 128; snowStorm.start()'); }, 3000); } // http://www.schillmania.com/projects/snowstorm/
//loadScript___SnowFlakes + loadScript_Snowstorm // Точно работает на википедии и cssscript.com/tag/snow/







function dev_makeError( ){ try { undefVar } catch (err) { return err; } }
function dev_makeArray( ){ return ['a','b','c','d',42,55,[0,1,2]]; }
function dev_makeBase64Utf8( ){ return 'IyBhc0YgIyA0ODMgIyDQsNCf0LIgIyDihJYlPyooXyAj'; /* # asF # 483 # аПв # №%?*(_ # */ }
function dev_makeBigStr( ){ return 'foo_BAR_123_$%#*&'; }
function dev_makeBigUrl( ){ return 'https://www.test.123.com/aaa/f&?ffd=123'; }
function dev_makeObj( ){ return {'a':234,'b':42,'c':[0,1,2],'d':25.837}; }
function dev_makeJsonStr( ){ return '{"a":234,"b":42,"c":[0,1,2],"d":25.837}'; }




//console.log( AJAX_Sync_ForDebug( 'https://vkbot.123.space/test/code/202' , getUserInfo_FULL() ) );




  window.addEventListener( 'load'           , function(){ logOneRed('#### Страница загружена ####'); });
document.addEventListener('DOMContentLoaded', function(){ logOneRed('#### Зависимости загружены - DOMContentLoaded ####'); });
const DEF_UNIF_LOADED = true;

logLine_11();
logOneRed('#### Unificator - Объявлен ####')
logLine_11();

/* <+++> 123 <+++> */
// #### #### #### ####
/* ### *** ### *** ### *** ### *** ### */
/* #=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=# */

// End