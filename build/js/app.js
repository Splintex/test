$(document).ready(function(){function e(){$(".js-validate").each(function(){$(this).length>0&&$(this).validate({errorClass:"has-error",rules:{username:{minlength:2},any:{minlength:2},password:{minlength:5},confirm_password:{minlength:5,equalTo:"#password"},email:{email:!0},tel:{minlength:2},address:{minlength:2},message:{minlength:4},field:{required:!0}},messages:{firstname:"Вас так зовут?",lastname:"У вас такая фамилия?",fathername:"У вас такое отчество?",password:{required:"Введите пароль",minlength:"Минимум 5 символов"},confirm_password:{required:"Пароли не совпадают",minlength:"Минимум 5 символов",equalTo:"Пароли не совпадают"},email:"Неверный формат",address:"Это Ваш адрес?",any:"Заполните поле",company:"Заполните поле",tel:{required:"Заполните поле"},message:{required:"Заполните поле",minlength:"Заполните поле"}}})})}$(document).on("click",function(){$(".js-search").hasClass("is-active")&&($(".js-search").removeClass("is-active"),$(".js-search-trigger").removeClass("is-active"))}),e(),$(".dropdown-button").dropdown({inDuration:300,outDuration:225,constrain_width:!1,hover:!0,gutter:0,belowOrigin:!0}),$(".js-search-trigger").on("click",function(e){return $(".js-search").toggleClass("is-active"),$(this).toggleClass("is-active"),$(".js-search .input").trigger("click"),e.stopPropagation(),!1}),$(".js-search").on("click",function(e){e.stopPropagation()})});