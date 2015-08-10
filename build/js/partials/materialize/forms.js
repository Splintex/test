!function(e){e(document).ready(function(){function t(t){var i=t.css("font-family"),s=t.css("font-size");s&&a.css("font-size",s),i&&a.css("font-family",i),"off"===t.attr("wrap")&&a.css("overflow-wrap","normal").css("white-space","pre"),a.text(t.val()+"\n");var n=a.html().replace(/\n/g,"<br>");a.html(n),t.is(":visible")?a.css("width",t.width()):a.css("width",e(window).width()/2),t.css("height",a.height())}Materialize.updateTextFields=function(){var t="input[type=text], input[type=password], input[type=email], input[type=url], input[type=tel], input[type=number], input[type=search], textarea";e(t).each(function(t,i){e(i).val().length>0||void 0!==e(this).attr("placeholder")||e(i)[0].validity.badInput===!0?e(this).siblings("label, i").addClass("active"):e(this).siblings("label, i").removeClass("active")})};var i="input[type=text], input[type=password], input[type=email], input[type=url], input[type=tel], input[type=number], input[type=search], textarea";e("input[autofocus]").siblings("label, i").addClass("active"),e(document).on("change",i,function(){(0!==e(this).val().length||void 0!==e(this).attr("placeholder"))&&e(this).siblings("label, i").addClass("active"),validate_field(e(this))}),e(document).ready(function(){Materialize.updateTextFields()}),e(document).on("reset",function(t){var a=e(t.target);a.is("form")&&(a.find(i).removeClass("valid").removeClass("invalid"),a.find(i).each(function(){""===e(this).attr("value")&&e(this).siblings("label, i").removeClass("active")}),a.find("select.initialized").each(function(){var e=a.find("option[selected]").text();a.siblings("input.select-dropdown").val(e)}))}),e(document).on("focus",i,function(){e(this).siblings("label, i").addClass("active")}),e(document).on("blur",i,function(){var t=e(this);0===t.val().length&&t[0].validity.badInput!==!0&&void 0===t.attr("placeholder")&&t.siblings("label, i").removeClass("active"),validate_field(t)}),validate_field=function(e){var t=void 0!==e.attr("length"),i=parseInt(e.attr("length")),a=e.val().length;0===e.val().length&&e[0].validity.badInput===!1?e.hasClass("validate")&&(e.removeClass("valid"),e.removeClass("invalid")):e.hasClass("validate")&&(e.is(":valid")&&t&&i>a||e.is(":valid")&&!t?(e.removeClass("invalid"),e.addClass("valid")):(e.removeClass("valid"),e.addClass("invalid")))};var a=e(".hiddendiv").first();a.length||(a=e('<div class="hiddendiv common"></div>'),e("body").append(a));var s=".materialize-textarea";e(s).each(function(){var i=e(this);i.val().length&&t(i)}),e("body").on("keyup keydown",s,function(){t(e(this))}),e(".file-field").each(function(){var t=e(this).find("input.file-path");e(this).find('input[type="file"]').change(function(){t.val(e(this)[0].files[0].name),t.trigger("change")})});var n,l="input[type=range]",o=!1;e(l).each(function(){var t=e('<span class="thumb"><span class="value"></span></span>');e(this).after(t)});var d=".range-field";e(document).on("change",l,function(t){var i=e(this).siblings(".thumb");i.find(".value").html(e(this).val())}),e(document).on("mousedown touchstart",l,function(t){var i=e(this).siblings(".thumb");i.length<=0&&(i=e('<span class="thumb"><span class="value"></span></span>'),e(this).append(i)),i.find(".value").html(e(this).val()),o=!0,e(this).addClass("active"),i.hasClass("active")||i.velocity({height:"30px",width:"30px",top:"-20px",marginLeft:"-15px"},{duration:300,easing:"easeOutExpo"}),n=void 0===t.pageX||null===t.pageX?t.originalEvent.touches[0].pageX-e(this).offset().left:t.pageX-e(this).offset().left;var a=e(this).outerWidth();0>n?n=0:n>a&&(n=a),i.addClass("active").css("left",n),i.find(".value").html(e(this).val())}),e(document).on("mouseup touchend",d,function(){o=!1,e(this).removeClass("active")}),e(document).on("mousemove touchmove",d,function(t){var i,a=e(this).children(".thumb");if(o){a.hasClass("active")||a.velocity({height:"30px",width:"30px",top:"-20px",marginLeft:"-15px"},{duration:300,easing:"easeOutExpo"}),i=void 0===t.pageX||null===t.pageX?t.originalEvent.touches[0].pageX-e(this).offset().left:t.pageX-e(this).offset().left;var s=e(this).outerWidth();0>i?i=0:i>s&&(i=s),a.addClass("active").css("left",i)}}),e(document).on("mouseout touchleave",d,function(){if(!o){var t=e(this).children(".thumb");t.hasClass("active")&&t.velocity({height:"0",width:"0",top:"10px",marginLeft:"-6px"},{duration:100}),t.removeClass("active")}})}),e.fn.material_select=function(t){e(this).each(function(){if($select=e(this),!$select.hasClass("browser-default")){var i=$select.data("select-id");if(i&&($select.parent().find("i").remove(),$select.parent().find("input").remove(),$select.unwrap(),e("ul#select-options-"+i).remove()),"destroy"===t)return void $select.data("select-id",null).removeClass("initialized");var a=Materialize.guid();$select.data("select-id",a);var s=e('<div class="select-wrapper"></div>');s.addClass($select.attr("class"));var n,l=e('<ul id="select-options-'+a+'" class="dropdown-content select-dropdown"></ul>'),o=$select.children("option");n=void 0!==$select.find("option:selected")?$select.find("option:selected"):l.first(),o.each(function(){l.append(e('<li class="'+(e(this).is(":disabled")?"disabled":"")+'"><span>'+e(this).html()+"</span></li>"))}),l.find("li").each(function(i){var a=$select;e(this).click(function(){e(this).hasClass("disabled")||(a.find("option").eq(i).prop("selected",!0),a.trigger("change"),a.siblings("input.select-dropdown").val(e(this).text()),"undefined"!=typeof t&&t())})}),$select.wrap(s);var d=e('<span class="caret">&#9660;</span>');$select.is(":disabled")&&d.addClass("disabled");var c=e('<input type="text" class="select-dropdown" readonly="true" '+($select.is(":disabled")?"disabled":"")+' data-activates="select-options-'+a+'" value="'+n.html()+'"/>');$select.before(c),c.before(d),e("body").append(l),$select.is(":disabled")||c.dropdown({hover:!1}),$select.attr("tabindex")&&e(c[0]).attr("tabindex",$select.attr("tabindex")),$select.addClass("initialized"),c.on("focus",function(){e(this).trigger("open"),n=e(this).val(),selectedOption=l.find("li").filter(function(){return e(this).text().toLowerCase()===n.toLowerCase()})[0],activateOption(l,selectedOption)}),c.on("blur",function(){e(this).trigger("close")}),activateOption=function(t,i){t.find("li.active").removeClass("active"),e(i).addClass("active"),t.scrollTo(i)},filterQuery=[],onKeyDown=function(t){if(9==t.which)return void c.trigger("close");if(40==t.which&&!l.is(":visible"))return void c.trigger("open");if(13!=t.which||l.is(":visible")){t.preventDefault(),letter=String.fromCharCode(t.which).toLowerCase();var i=[9,13,27,38,40];letter&&-1===i.indexOf(t.which)&&(filterQuery.push(letter),string=filterQuery.join(""),newOption=l.find("li").filter(function(){return 0===e(this).text().toLowerCase().indexOf(string)})[0],newOption&&activateOption(l,newOption)),13==t.which&&(activeOption=l.find("li.active:not(.disabled)")[0],activeOption&&(e(activeOption).trigger("click"),c.trigger("close"))),40==t.which&&(newOption=l.find("li.active").next("li:not(.disabled)")[0],newOption&&activateOption(l,newOption)),27==t.which&&c.trigger("close"),38==t.which&&(newOption=l.find("li.active").prev("li:not(.disabled)")[0],newOption&&activateOption(l,newOption)),setTimeout(function(){filterQuery=[]},1e3)}},c.on("keydown",onKeyDown)}})}}(jQuery);