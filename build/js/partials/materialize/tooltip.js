!function(t){t.fn.tooltip=function(e){var o=null,i=!1,a=null,s=5,n={delay:350};return e=t.extend(n,e),t(".material-tooltip").remove(),this.each(function(){var n=t(this),p=t("<span></span>").text(n.attr("data-tooltip")),r=t("<div></div>");r.addClass("material-tooltip").append(p),r.appendTo(t("body"));var l=t("<div></div>").addClass("backdrop");l.appendTo(r),l.css({top:0,left:0}),t(this).off("mouseenter mouseleave"),t(this).on({mouseenter:function(t){var p=n.data("delay");p=void 0===p||""===p?e.delay:p,o=0,a=setInterval(function(){if(o+=10,o>=p&&i===!1){i=!0,r.css({display:"block",left:"0px",top:"0px"}),r.children("span").text(n.attr("data-tooltip"));var t=n.outerWidth(),e=n.outerHeight(),a=n.attr("data-position"),d=r.outerHeight(),f=r.outerWidth(),u="0px",c="0px",m=8;"top"===a?(r.css({top:n.offset().top-d-s,left:n.offset().left+t/2-f/2}),u="-10px",l.css({borderRadius:"14px 14px 0 0",transformOrigin:"50% 90%",marginTop:d,marginLeft:f/2-l.width()/2})):"left"===a?(r.css({top:n.offset().top+e/2-d/2,left:n.offset().left-f-s}),c="-10px",l.css({width:"14px",height:"14px",borderRadius:"14px 0 0 14px",transformOrigin:"95% 50%",marginTop:d/2,marginLeft:f})):"right"===a?(r.css({top:n.offset().top+e/2-d/2,left:n.offset().left+t+s}),c="+10px",l.css({width:"14px",height:"14px",borderRadius:"0 14px 14px 0",transformOrigin:"5% 50%",marginTop:d/2,marginLeft:"0px"})):(r.css({top:n.offset().top+n.outerHeight()+s,left:n.offset().left+t/2-f/2}),u="+10px",l.css({marginLeft:f/2-l.width()/2})),m=f/8,8>m&&(m=8),("right"===a||"left"===a)&&(m=f/10,6>m&&(m=6)),r.velocity({opacity:1,marginTop:u,marginLeft:c},{duration:350,queue:!1}),l.css({display:"block"}).velocity({opacity:1},{duration:55,delay:0,queue:!1}).velocity({scale:m},{duration:300,delay:0,queue:!1,easing:"easeInOutQuad"})}},10)},mouseleave:function(){clearInterval(a),o=0,r.velocity({opacity:0,marginTop:0,marginLeft:0},{duration:225,queue:!1,delay:275}),l.velocity({opacity:0,scale:1},{duration:225,delay:275,queue:!1,complete:function(){l.css("display","none"),r.css("display","none"),i=!1}})}})})},t(document).ready(function(){t(".tooltipped").tooltip()})}(jQuery);