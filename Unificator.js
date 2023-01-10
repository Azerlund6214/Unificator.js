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
// - Все методы многострочные. Без ужатий в 1 строку.
// - Между методоми пустая строка.
// - У каждого метода коментарий в 1 строку.
// - Аргумент с элементом называется 'e'
// - Аргумент с target    называется 't'
// - Только нативный JS, без JQuery.
// - Методы могут использовать друг друга.
// - Без защит от дурака.
// - Файл используется(объявляется) только целиком, а не отдельные методы. (Тк они могут быть завязаны друг на друга)
// - Подключается либо через тег(в проектах), либо вставкой целиком в консоль.
// - Замыкания нежелательны.
// - Если в аргументах только елемент, то вокруг стасятся пробелы ---> func123( e )
// - Все фигурные скобки с новой строки. (Не оставлять первую наверху, бесит)
// - Концепт спонтанно придуман 100123. И сразу описано 20-30шт будущих методов. Почти 3500 символов текста, 130 строк.
// - Всегда пишу URL вместо URI
// - Наиболее универсальные и простые(самые законченые и безпроблемные) группы методов - ближе к вверху файла.
// - В конце файла стоит комментарий-заглушка --> // End
// - Кодировка = UTF-8 без BOM

// ### ### ### ### ### ###
// **/  \**


// ### ### ### ### ### ###
// **/ Проверки типов  \**
function isUndef( t ) { return (Boolean)( t === undefined ); }
function isNull( t )  { return (Boolean)( t === null ); }
function isBool( t )  { return (Boolean)( t.constructor == Boolean ); }
function isNumber( t ){ return (Boolean)( t.constructor == Number  ); }
function isNumberFloat( t ){ return (Boolean)(  ); }
function isNumberInt( t ){ return (Boolean)(  ); }
function isFunc( t )  { return (Boolean)( t.constructor == Function ); }
function isString( t ){ return (Boolean)( t.constructor == String ); }
function isObject( t ){ return (Boolean)( t.constructor == Object ); }
function isArray( t ) { return (Boolean)( t.constructor == Array ); }
function isArrayOfStrings( t ){ function check(elem,index,array){ return ( elem.constructor == String ); }  return t.every(check); }
function isArrayOfNumbers( t ){ function check(elem,index,array){ return ( elem.constructor == Number ); }  return t.every(check); }
function isArrayOfArrays( t ) { function check(elem,index,array){ return ( elem.constructor == Array  ); }  return t.every(check); }
function isJsonString( t ){ try { JSON.parse( t ); return true; } catch (e) { return false; } }


// Тестить
function isElement( t )
{
    return (Boolean)( t.nodeType );
}









// ### ### ### ### ### ### ###
// **/  Работа с ошибками  \**
function makeError( ){ try { undefVar } catch (err) { return err; } }
function errorPrinter(e){ console.log(`${e.stack}\n\nMsg: ${e.message}\nName: ${e.name}\n\nFile: ${e.fileName}\nLine: ${e.lineNumber}\nCol:  ${e.columnNumber}\n\nCause: ${e.cause}`); }
//errorPrinter( makeError() );





// End