// ====================

// !!! Все псевдоклассы CSS = https://webkyrs.info/post/chto-takoe-psevdoklassy-i-psevdoelementy-v-css
// fa  https://fontawesome.com/v5.15/icons?d=gallery

ДатаВремя
https://newtravelers.ru/android/javascript-vremya-v-millisekundah-javascript-poluchit-tekushchee-vremya-i-datu-metody-dlya.html
http://old.code.mu/javascript/date/now.html

Массивы
https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array

// #### #### #### #### #### ####
// #### Общий жс - мои пхп функции






console.log('\n\n====================\n');
	// код
console.log('\n====================\n\n');

// #### #### #### #### #### ####
// #### Общий жс




// Циклы
for (var i = 0 ; i<raw.length ; i++) console.log(raw[i]);
[0,1,2,3].forEach( function(one ,i , arr) {    } );  // return для след итерации.      break нету никак.
$("form").each(function() {  this.name;  });

for (const [key, val] of Object.entries( массивДляПеребора ))
{
  console.log(`${key}: ${val}`);
}

for (key in haystack)


================================================================

setInterval(function(){ window.location.replace(url); }, waitMs); // Вроде как регулярное

Позволяет вызывать функцию много раз, через определённый интервал времени:
Стоит заметить, что вызываемая функция будет работать асинхронно
var interval_id = setInterval(function(){
	alert('Прошла одна секунда');
}, 1000);
clearInterval(interval_id);

=========================
setTimeout
Выполняет заданный код асинхронно только один раз, через заданный интервал времени
setTimeout("тут походу ошибка-нет функции   alert('1-секундная задержка прошла');", 1000);
setTimeout( func() , 200 );
setTimeout(function(){window.close();} ,secFloat*1000 );
================================================================

[1,2,3].push(4);   Добавка


// https://developer.mozilla.org/ru/docs/Web/JavaScript/Guide/Working_with_Objects
new Object() и {} эквивалентны.

var obj = new Object();
obj.param1 = Object;
obj['param125'] = '123';  // Робит

var FINAL = {
	'1' : '123',
	'2' : '456'
}; // Object
		

// Многострочные строки через слеш, в нотпаде html должен стать серым
alert('123\
456\
789');
$('').html('                        							   \
<form id="modal-form" class="" action="action_page.php">           \
  <style>                                                          \
  #modal-form-btn{                                                 \
</form>  ');


// Вставка значений из переменных.
var finalStr = `${country} | ${country_phone} | ${country_phone2} | ${phone} | ${passw}`;

// Содержание подстроки
if( myStringBig.indexOf(targetStrPart) > -1 )

// Обрезка строки
var subdomain = domainFull.substring(0, domainFull.length - 1); // Убираю последний симв.

// Логи со стилями   %c обязательно
console.log('%cТекст123123123', 'color:black; background-color:lime; font-size:16px');
console.log('%cТекст123123123', 'color:black; background-color:red; font-size:16px');


$(document).on('keydown', function(event)
{
	//console.log( "keypress = " + event.keyCode+' = '+event.key+' = '+event.code );
	if (event.altKey && event.keyCode==76) // alt+l (Маленькая L)
	{
	}
});

$(selector).click(function(event)
{
	event.preventDefault();
});

// #### #### #### #### #### ####
// #### Разные виды выборок


t.Fatal = "fatal";
t.Error = "error";
t.Warning = "warning";
t.Log = "log";
t.Info = "info";
t.Debug = "debug";
t.Critical = "critical"



// Для нескольких отдельных выборок использовать запятую   'div, span ,a'

$('.class1') // Все с этим классом
$('#elem-id') // Все с этим id
$('div.class1.class2') // div с 2 классами одновременно

$('div a:nth-child(2)') // Выбрать только 2 ссылку.

// ### !!!!!!
$('input[type="submit"][value="Оформить заказ"]') // Селект по атрибутам
$('input[type="submit"], button')   широкая выборка
$('input[name="name"][placeholder="Ваше имя"]')   .val();  // Точно робит
$('input[name="name"]')  // Точно робит
$('a[href="mailto:info@123.ru"]')  // Точно робит

$("span:contains('123')")

$('') // 

// #### #### #### #### #### ####
// #### Операции с результатом

// Проверка что есть результат
if( (res.length === 0) || $.isEmptyObject(res) ) // Работает

var all = raw.serializeArray(); // Каждый элемент получился отдельным жсоном.
JSON.stringify( all , null, 4 )
JSON.parse(xhr.responseText);



$('').html();
$('').html('<!-- Nulled -->');
$('').html('<p>Новый</p>'); // Текст на 1 строке.  Переносы слешем.

// Получит именно html текст, не подойдет для инпутов
$('').text();
$('').text('Новый');

// Смог обойти тоталкоин.   Получит то, что ввели в поле.
$('').val();
$('').val('Новый');

// ### !!!!!!
$('div a').removeAttr('class').removeAttr('href');
$('div a').removeAttr('data-toggle');
$('div a').removeClass('123');

$('div a').attr('href','#a');

$('').css('background-color', 'DeepPink');  //Magenta Red Yellow Lime
$('').css('border', '4px solid Lime'); 
$('').css({
    "background-color": 'red',
    "color" : "white"
});


$('') // 

// #### #### #### #### #### ####
// #### Удаление и добавка


$( "<p>Test</p>" ).insertAfter ( ".inner" );
$( "<p>Test</p>" ).insertBefore( ".inner" );

$('div a').remove();

$('div').replaceWith('<div><h3></h3></div>'); // Полностью заменяет указанный слева тег на новый.





// #### #### #### #### #### ####
// #### События

$('div a').click(function(event){ event.preventDefault(); alert(123); });

event.preventDefault(); // Отменить дефолт действие.

// ====================

// #### #### #### #### #### ####
// #### Прочее



$('form button').off(); // Отмена всех событий.  Может не прокатить если хардкод




// ====================


// #### #### #### #### #### ####
// #### Заготовки хтмл
https://www.w3schools.com/html/html_forms.asp

<form action="/action_page.php">
  <input type="text" value="John">
  <br><br>
  <input type="submit" value="Submit">
</form>


<form id="modal-form" class="" action="/action_page.php">
  <style>  
  #modal-form-btn{
	font-size: 12px;
	height: 35px;
	background-color: rgb(255, 255, 255);
    border: 1px solid rgb(35, 31, 32);
    border-radius: 17.5px;
	letter-spacing: -0.2px;
    font-family: TTOctosquares-Black;
    text-align: center;
    cursor: pointer;
	padding: 0px 10px;	
  }
  </style>
  
  <label for="modal-login">Login:</label><br>
  <input type="text" id="modal-login" name="login"><br>
  
  <br>
  <label for="modal-passw">Password:</label><br>
  <input type="text" id="modal-passw" name="passw"><br>

  <br>
  <input type="button" value="Submit"   id="modal-form-btn"  class="join">
</form>


// ====================
Все на сорт






// ====================