/* ################################################# */

function PHP_explode(separator,string){ return string.split(separator); }
function PHP_str_replace(search,replace,subject){ return subject.replace(search, replace); }

function log( t1 , t2='_DEF' ,t3='_DEF' ){ console.log(t1);  if(t2!=='_DEF')console.log(t2);  if(t3!=='_DEF')console.log(t3);  }
function logOneRed  ( t ){ console.log('%c'+t, 'color:red'  ); }

function tag_getAllOrFalse  (target){ var res = document.querySelectorAll(target);  if( ! res.length  ) return false;  else  return res;     }

function num_percent( n1 , n2 ){ return Math.floor((n1/n2)*100); } // Целым числом

/* ################################################# */

/** 091123 0318
 * Переситает стандартную таблицу статистик записей и наглядно выведет нужные метрики.
 * Больше не надо копаться в цифрах и что-то искать.
 * https://vk.com/stats?act=posts&gid=1112223333
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

VK_GroupStatPerform( );

// ###