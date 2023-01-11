// #########################################
// #### Новизна: Не изменялся | (000023) ###
// #########################################

// ### ### ### ### ### ###
// **/     Концепт     \**
// - Много маленьких методов для удобной работы. В том числе и самые простейшие.
// - Цель - создание астракций, что бы работать с этими удобными методами, а не вспоминать постоянно как что пишется на js
// - Скрипт можно копировать целиком в консоль.

// ### ### ### ### ### ###
// **/     Правила     \**
// - Деление групп методов на главы.
// - Все методы многострочные. Без ужатий в 1 строку. (Кроме коротких и красивых)
// - Между методоми пустая строка.
// - У каждого метода коментарий в 1 строку.
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
// - Концепт спонтанно придуман 100123. И сразу описано 20-30шт будущих методов. Почти 3500 символов текста, 130 строк.
// - Всегда пишу URL вместо URI, бесит.
// - Наиболее универсальные и простые(самые законченые и безпроблемные) группы методов - ближе к вверху файла.
// - В конце файла стоит комментарий-заглушка --> // End
// - Кодировка = UTF-8 без BOM
// - Все сразу тестировать.  Если не протестирован - писать коммент.
// - Между секциями - отступ 2 строки.   Между большими методами - одна.    Между однострочными - без.


// ### ### ### ### ### ###
// **/  \**


// ### ### ### ### ### ###
// **/ Проверки типов  \**
function isUndef( t ) { return (Boolean)( t === undefined ); }
function isNull( t )  { return (Boolean)( t === null ); }
function isBool( t )  { return (Boolean)( t.constructor == Boolean ); }
function isNumber( t ){ return (Boolean)( t.constructor == Number  ); }
function isNumberFloat( t ){ return (Boolean)(  ); }       // TODO
function isNumberInt  ( t ){ return (Boolean)(  ); }       // TODO
function isFunc( t )  { return (Boolean)( t.constructor == Function ); }
function isString( t ){ return (Boolean)( t.constructor == String ); }
function isObject( t ){ return (Boolean)( t.constructor == Object ); }
function isArray( t ) { return (Boolean)( t.constructor == Array ); }
function isArrayOfStrings( t ){ function check(elem,index,array){ return ( elem.constructor == String ); }  return t.every(check); }
function isArrayOfNumbers( t ){ function check(elem,index,array){ return ( elem.constructor == Number ); }  return t.every(check); }
function isArrayOfArrays( t ) { function check(elem,index,array){ return ( elem.constructor == Array  ); }  return t.every(check); }
function isJsonString( t ){ try { JSON.parse( t ); return true; } catch (e) { return false; } }

// Тестить
function isElement( t ){ return (Boolean)( t.nodeType ); }


// ### ### ### ### ### ###
// **/ Логи в консоль  \**
function log( t ){ console.log(t); }
function logEmpty(height=2){ console.log(''.padStart(height,'\n')) }

function logLine(symb='#=', len=61, emptyOffsets=1){ var t='';  t+=''.padStart(emptyOffsets,'\n');  t+=''.padStart(len,symb);  t+=''.padStart(emptyOffsets,'\n');  t+='\n';  console.log( t ); }
function logCustom(t, fontSize=16, color='black', bgColor='none'){ console.log( '%c'+t , 'color:'+color+'; font-size:'+fontSize+'px; background-color:'+bgColor+';'); }
//logLine(); logLine('-'); logLine('=',60,3); logLine('#',60,5);
//logCustom('123 test 123');
// TODO:   function logText00000   цветастые и тд.  разные методы, много    сразу разные заготовки.


// ### ### ### ### ### ### ###
// **/  Работа с ошибками  \**
function makeError( ){ try { undefVar } catch (err) { return err; } }
function errorPrinter(e){ console.log(`${e.stack}\n\nMsg: ${e.message}\nName: ${e.name}\n\nFile: ${e.fileName}\nLine: ${e.lineNumber}\nCol:  ${e.columnNumber}\n\nCause: ${e.cause}`); }
//errorPrinter( makeError() );



function tag_getAllOrFalse(target){   var res = document.querySelectorAll(target);   if( ! res.length  ) return false;  else   return res;   }
tag_getFirstOrFalse
tag_getOneOrFalse

document.getElementById("demo").innerHTML




// ### ### ### ### ### ### ###
// **/   Работа с окном   \**
function makeReload(waitMs=0){ console.log('# Reload #\n\nTimeMs: '+waitMs);  setTimeout(function(){ window.location.reload(); }, waitMs); }
function makeTabUrl( url ){ history.pushState(null, null, '/'); history.pushState(null, null, url); }
function makeRedirect(url, waitMs=0){ console.log('# Redirect #\n\nURL: '+url+'\nTimeMs: '+waitMs);  setTimeout(function(){ window.location.replace(url); }, waitMs); }
// makeRedirect('/'); makeRedirect('/', 5000);





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
function str_explode(separator,string){ return string.split(separator); }
function str_implode(haystack,glue){ return haystack.join(glue); }


// ### ### ### ### ### ### ###
// **/  Кодировщики и тп   \**
function base64_decodeEngRus( data ) {
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
// **/ Пока пусть лежит тут \**
function detectRunningInIframe(){ return (Boolean)( document.location.ancestorOrigins.length >= 1); } /* У топа 0, у фреймов 1. Там список родителей. */
function detectRunningInIframe_v2(){ try { isFramed = window != window.top || document != top.document || self.location != top.location; return false; } catch (e) { isFramed = true; }  }
function jqueryLoaded(){ return ( (typeof(jQuery) !== 'undefined') ); /* typeof($) ложно срабатывал  |  jQuery.isReady  */ }; // Костыльненько :)
function jqueryVersion(){ console.log('JQuery = v'+jQuery.fn.jquery); } // "JQuery = v3.5.0"
function checkFunctionExist( callableFunc ){ return (typeof callableFunc === "function"); } // !!! Оборачивать вызов в TryCatch
// Все готовые


// ### ### ### ### ### ### ### ###
// **/  Быстрая добавка тегов  \**
function head_addElem( e ){ document.head.appendChild(e); }
function body_addElem( e ){ document.body.appendChild(e); }
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
function loadScript_JQuery_My() { head_addScriptBySrc('https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js' ); } // Payeer
function loadScript_JQuery_New(){ head_addScriptBySrc('https://cdnjs.cloudflare.com/ajax/libs/jquery/1.11.0/jquery.min.js'); } // Мой


function loadScript___SnowFlakes(){ head_addScriptBySrc('https://s.siteapi.org/frontend/static/snowflakes.min.js'); setTimeout(function(){ body_addScriptByText('var sf = new Snowflakes();'); }, 3000);} // https://github.com/hcodes/snowflakes/releases
function loadScript_Snowstorm(){ head_addScriptBySrc('https://cdnjs.cloudflare.com/ajax/libs/Snowstorm/20131208/snowstorm-min.js'); setTimeout(function(){ head_addScriptByText('snowStorm.autoStart = true; snowStorm.flakesMax = 128; snowStorm.flakesMaxActive = 128; snowStorm.start()'); }, 3000); } // http://www.schillmania.com/projects/snowstorm/
//loadScript___SnowFlakes + loadScript_Snowstorm // Точно работает на википедии и cssscript.com/tag/snow/








// FINAL = Получить всю инфу о текущей ссылке. Особенно path.
function getAllUriInfo()
{
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


/* <+++> 123 <+++> */
// #### #### #### ####
/* ### *** ### *** ### *** ### *** ### */
/* #=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=# */

// End