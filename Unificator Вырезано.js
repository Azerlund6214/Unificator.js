// ### ### ### ### ### ### ###
// **/    \**


function cardsMassParser(siteCode, idBeg, idEnd, idSkipArr)
{
    var settings = cardsMassParserGetSettings(siteCode);
    var SEL_Cards = settings['CARD'];
    var SEL_Tags  = settings['TAGS'];
    
    // ####
    
    var cardsElemArr = tag_getAllOrFalse(SEL_Cards);
    logOneRed('Нашлось карточек = '+cardsElemArr.length);
    //dd(cardsElemArr)
    
    
    var finalJson = { };
    
    //var idSkipArr = [  ]; // Номера для пропуска
    //var idBeg = 0; // Номер с которого начать     УСАРЕЛО
    //var idEnd = 26; // Номер на котором закончить
    
    cardsElemArr.forEach( function( eCard , i )
    {
        logLine_10(); log_i(i); // Консоль
        
        if( i >= idEnd ){ logOneBlue('i = '+i+' -> Больше макс заданного (>='+  idEnd+') -> Скипаю'); return; }
        if( i <  idBeg ){ logOneBlue('i = '+i+' -> Меньше стартового (<'+       idBeg+') -> Скипаю'); return; }
        if( idSkipArr.includes( i ) ){ logOneRed('i = '+i+' -> '+'В списке для пропуска -> Скипаю'); return; }
        
        finalJson['ID='+i] = []; // Обязательно надо создать ключ с ID.  Иначе пошлет.
        for(const [key, arr] of Object.entries( SEL_Tags ))
        {
            finalJson['ID='+i][arr[0]] = elementDataExtractor( eCard.querySelector(arr[1]) )[arr[2]];
        }
        
        logOneGreen('Успех')
        //log([finalJson['ID='+i]]);
        
        //dd(finalJson['ID='+i]);
        
        
        
    } ); // End forEach
    
    log(finalJson); log('Конец');
}

function cardsMassParserGetSettings( what )
{
    var OBJ = {
        'megacritic.ru' : {
            'CARD' : '.jr-layout-outer.jrCardLayout.jrCardHorizontal',
            'TAGS' : {
                //'что' : ['ключ', 'селектор', 'поле'],
                '01' : ['imgPosterUrlSrc', 'div.jrCardImage a div img', 'src'],
                '02' : ['imgNoScr_RawHtml', 'div.jrCardImage a div noscript', 'innerHTML'],
                '03' : ['imgNoScr_RawText', 'div.jrCardImage a div noscript', 'textContent'],
                '04' : ['title', 'div.jrCardTitle div a', 'text'],
                '05' : ['pageUrl', 'div.jrCardTitle div a', 'href'],
                '06' : ['rateCrit', 'div.jrOverallEditor span.jrRatingValue span span b', 'textContent'],
                '07' : ['rateUser', 'div.jrOverallUser   span.jrRatingValue span b', 'textContent'],
                '08' : ['desc', 'div.jrCardContent div div.jrCardAbstract', 'innerText'], // Робит  с  '...>>>'
                '09' : ['pageUrl2', 'div.jrCardContent div div.jrCardAbstract a', 'href'],
                '10' : ['year', 'div.jrCardContent div div.jrCardFields div div div.jrYear div.jrFieldValue a', 'textContent'],
                '11' : ['janrOne', 'div.jrGenre div.jrFieldValue span a', 'text'],
                '12' : ['janr1', 'div.jrGenre div.jrFieldValue ul.jrFieldValueList li:nth-child(1) span a', 'text'],
                '13' : ['janr2', 'div.jrGenre div.jrFieldValue ul.jrFieldValueList li:nth-child(2) span a', 'text'],
                '14' : ['janr3', 'div.jrGenre div.jrFieldValue ul.jrFieldValueList li:nth-child(3) span a', 'text'],
                '15' : ['countryOne', '.jrCountry div a', 'text'],
                '16' : ['country1', '.jrCountry div ul.jrFieldValueList li:nth-child(1) a', 'text'],
                '17' : ['country2', '.jrCountry div ul.jrFieldValueList li:nth-child(2) a', 'text'],
                '18' : ['country3', '.jrCountry div ul.jrFieldValueList li:nth-child(3) a', 'text'],
                '19' : ['dateRus_v1', 'div.jrRusdate div.jrFieldValue meta', 'content'],
                '20' : ['dateRus_v2', 'div.jrRusdate div.jrFieldValue', 'innerText'],
                '21' : ['director', 'div.jrDirector div.jrFieldValue span a', 'textContent'],
                '22' : ['rateAge', 'div.jrAge div a', 'textContent']
            }, // End Tags
        }, // End Site
        
        'VK-Group-WALL' : {
            'CARD' : '._post.post',  // Включая закреп
            'TAGS' : {
                //'что' : ['ключ', 'селектор', 'поле'],
                'URL_POST' : ['URL_POST', '.post_link', 'href'],
                'LIKE' : ['CNT_LIKE', 'span._like_button_count div', 'textContent'],
                'COMM' : ['CNT_COMM', '.like_btns div[title="Комментарий"] ._like_button_count', 'textContent'],
                'REPO' : ['CNT_REPO', '.like_btns div[title="Поделиться"]  ._like_button_count', 'textContent'],
                'VIEW' : ['CNT_VIEW', '.like_views', 'title'], // // title="2093 просмотра"
                'IS_REPOST' : ['IS_REPOST', 'div.copy_quote', 'innerText'], // Если не NULL, значит это репост
                'IS_GIF_SOLO' : ['IS_GIF_SOLO', 'div.page_gif_large', 'innerText'], // Если не NULL, значит это гифка
                'IS_VIDEO_SOLO' : ['IS_VIDEO_SOLO', 'div.post_video_desc', 'innerText'], // Если не NULL, значит это гифка
                'TEXT_1' : ['POST_TEXT_ALL_ONESTR', 'div.wall_post_text', 'textContent'], // В 1 строку, нет переносов. Чистый текст без тегов
                'TEXT_2' : ['POST_TEXT_ALL_HTML', 'div.wall_post_text', 'innerHTML'], // Текст с лишними тегами и <br>
                'TEXT_3' : ['POST_TEXT_VISIBLE_GOOD', 'div.wall_post_text', 'innerText'], // Текст с переносами и с "Показать еще"
                'TEXT_4' : ['POST_TEXT_HIDED_ONESTR', 'div.wall_post_text span[style="display: none"]', 'innerText'], //
                'TEXT_5' : ['POST_TEXT_HIDED_HTML', 'div.wall_post_text span[style="display: none"]', 'innerHTML'], //
                'TEXT_URL_1_HREF' : ['POST_TEXT_URL_1_HREF', 'div.wall_post_text a:nth-child(1)', 'href'], //
                'TEXT_URL_1_TEXT' : ['POST_TEXT_URL_1_TEXT', 'div.wall_post_text a:nth-child(1)', 'innerText'], //
                'TEXT_URL_2_HREF' : ['POST_TEXT_URL_2_HREF', 'div.wall_post_text a:nth-child(2)', 'href'], //
                'TEXT_URL_2_TEXT' : ['POST_TEXT_URL_2_TEXT', 'div.wall_post_text a:nth-child(2)', 'innerText'], //
                'TEXT_URL_3_HREF' : ['POST_TEXT_URL_3_HREF', 'div.wall_post_text a:nth-child(3)', 'href'], //
                'TEXT_URL_3_TEXT' : ['POST_TEXT_URL_3_TEXT', 'div.wall_post_text a:nth-child(3)', 'innerText'], //
                
                // В целом работает, но иногда костылит. Нормально, не критично.
                'IMG_SOLO_SRC' : ['IMG_SOLO_SRC', 'img.MediaGrid__imageOld:nth-child(1)', 'src'], //
                'IMG_SOLO_H' : ['IMG_SOLO_H', 'img.MediaGrid__imageOld:nth-child(1)', 'height'], //  !!! TODO: Иногда может стать undefined
                'IMG_SOLO_W' : ['IMG_SOLO_W', 'img.MediaGrid__imageOld:nth-child(1)', 'width'], // !!! TODO: Иногда может стать undefined
                
                // Все 3шт сгребли пикчи из поста где их было 6шт.
                'IMG_1_SRC' : ['IMG_1_SRC', 'div.MediaGrid__thumb:nth-child(1) div img', 'src'], //
                'IMG_1_HTML' : ['IMG_1_HTML', 'div.MediaGrid__thumb:nth-child(1)', 'innerHTML'], //
                //'IMG_1_ID'  : ['IMG_1_ID', 'div.MediaGrid__thumb:nth-child(1) div', 'data--photo-id'], //
                //'IMG_1_OPTS' : ['IMG_1_OPTS', 'div.MediaGrid__thumb:nth-child(1) div', 'data--options'], //
                
                'IMG_2_SRC' : ['IMG_2_SRC', 'div.MediaGrid__thumb:nth-child(2) div img', 'src'], //
                'IMG_2_HTML' : ['IMG_2_HTML', 'div.MediaGrid__thumb:nth-child(2)', 'innerHTML'], //
                //'IMG_2_ID'  : ['IMG_2_ID', 'div.MediaGrid__thumb:nth-child(2) div', 'data-photo-id'], //
                //'IMG_2_OPTS' : ['IMG_2_OPTS', 'div.MediaGrid__thumb:nth-child(2) div', 'data-options'], //
                
                'IMG_3_SRC' : ['IMG_3_SRC', 'div.MediaGrid__thumb:nth-child(3) div img', 'src'], //
                'IMG_3_HTML' : ['IMG_3_HTML', 'div.MediaGrid__thumb:nth-child(3)', 'innerHTML'], //
                //'IMG_3_ID'  : ['IMG_3_ID', 'div.MediaGrid__thumb:nth-child(3) div', 'data-photo-id'], //
                //'IMG_3_OPTS' : ['IMG_3_OPTS', 'div.MediaGrid__thumb:nth-child(3) div', 'data-options'], //
                
                //'' : ['', '', 'ALL'],
                //'02' : ['', '', ''],
                //'03' : ['', '', ''],
            }, // End Tags
        }, // End Site
        
    };
    // Тут 1 массив с ключами.   выдача по ключу
    
    return OBJ[what];
    
}
//cardsMassParser('megacritic.ru', 0, 5, []); //
//cardsMassParser('VK-Group-WALL', 0, 10, []); //




// Для https://www.fakepersongenerator.com/imei-generator => работает отлично.
function easyParcer_imei_FPG( maxLen=30  )
{
    var finalJson = { };
    var arrElems = document.querySelectorAll('ul.list-unstyled.imei li');
    console.log(arrElems.length);
    
    arrElems.forEach( function( e , i )
    {
        var text = e.textContent;
        
        var buf = {
            'IMEI' : PHP_trim( str_explode('Mobile Brand:',text)[0] ),
            'BRAND': PHP_trim( str_explode('Mobile Model:', str_explode('Mobile Brand:', text)[1])[0] ),
            'MODEL': PHP_trim( str_explode('Mobile Model:', text)[1] ),
        };
        
        buf['MODEL_LEN'] = buf['MODEL'].length;
        
        if( buf['MODEL_LEN'] >= maxLen )
        {
            log(buf['MODEL'],buf['MODEL_LEN']);
        }
        else
        {
            finalJson[i] = buf;
        }
        
    });
    
    return finalJson;
}
//log( convert_Json1lvl_To_Array( easyParcer_imei_FPG(40) ) );




// ### ### ### ### ### ### ###