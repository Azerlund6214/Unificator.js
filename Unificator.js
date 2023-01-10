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
function str_extraTrim( str )
{
    for( ; str.indexOf('  ') > -1 ; )  str = str.replace('  ',' ');
    for( ; str.indexOf('\n\n') > -1 ; ) str = str.replace('\n\n','\n');
    for( ; str.indexOf('\n \n') > -1 ; ) str = str.replace('\n \n','\n');
    return str;
}




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




// ### ### ### ### ### ### ###
// **/ Пока пусть лежит тут \**
function detectRunningInIframe(){ return (Boolean)( document.location.ancestorOrigins.length >= 1); } /* У топа 0, у фреймов 1. Там список родителей. */
function detectRunningInIframe_v2(){ try { isFramed = window != window.top || document != top.document || self.location != top.location; return false; } catch (e) { isFramed = true; }  }
function jqueryLoaded(){ return ( (typeof(jQuery) !== 'undefined') ); /* typeof($) ложно срабатывал  |  jQuery.isReady  */ }; // Костыльненько :)
function jqueryVersion(){ console.log('JQuery = v'+jQuery.fn.jquery); } // "JQuery = v3.5.0"
function checkFunctionExist( callableFunc ){ return (typeof callableFunc === "function"); } // !!! Оборачивать вызов в TryCatch
// Все готовые


// ### ### ### ### ### ### ###
// **/  \**
function head_addScriptBySrc ( src  ){  var TAG = document.createElement('script');  TAG.type = 'text/javascript';  TAG.src = src;         document.head.appendChild(TAG); }
function head_addScriptByText( code ){  var TAG = document.createElement('script');  TAG.type = 'text/javascript';  TAG.innerHTML = code;  document.head.appendChild(TAG); }
function head_addStyleBySrc  ( src  ){  var TAG = document.createElement('style');   TAG.type = 'text/css';         TAG.src = src;         document.head.appendChild(TAG); }
function head_addStyleByText ( code ){  var TAG = document.createElement('style');   TAG.type = 'text/css';         TAG.innerHTML = code;  document.head.appendChild(TAG); }


// ### ### ### ### ### ### ###
// **/ Лоадеры скриптов \**
function loadScript_(){ head_addScriptBySrc(''); }
function loadScript__(){ head_addScriptByText(''); }
function loadScript_JQuery(){ head_addScriptBySrc(''); }

function loadScript_Snowstorm(){ head_addScriptBySrc('https://cdnjs.cloudflare.com/ajax/libs/Snowstorm/20131208/snowstorm-min.js'); head_addScriptByText('snowStorm.autoStart = true; snowStorm.flakesMaxActive = 128;'); } // http://www.schillmania.com/projects/snowstorm/


/* <+++> 123 <+++> */
// #### #### #### ####
/* ### *** ### *** ### *** ### *** ### */
/* #=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=# */

// End