Materialize.toast=function(e,t,n,a){function i(e){var t=document.createElement("div");if(t.classList.add("toast"),n)for(var i=n.split(" "),o=0,s=i.length;s>o;o++)t.classList.add(i[o]);t.innerHTML=e;var l=new Hammer(t,{prevent_default:!1});return l.on("pan",function(e){var n=e.deltaX,a=80;t.classList.contains("panning")||t.classList.add("panning");var i=1-Math.abs(n/a);0>i&&(i=0),Vel(t,{left:n,opacity:i},{duration:50,queue:!1,easing:"easeOutQuad"})}),l.on("panend",function(e){var n=e.deltaX,i=80;Math.abs(n)>i?Vel(t,{marginTop:"-40px"},{duration:375,easing:"easeOutExpo",queue:!1,complete:function(){"function"==typeof a&&a(),t.parentNode.removeChild(t)}}):(t.classList.remove("panning"),Vel(t,{left:0,opacity:1},{duration:300,easing:"easeOutExpo",queue:!1}))}),t}n=n||"";var o=document.getElementById("toast-container");null===o&&(o=document.createElement("div"),o.id="toast-container",document.body.appendChild(o));var s=i(e);e&&o.appendChild(s),s.style.top="35px",s.style.opacity=0,Vel(s,{top:"0px",opacity:1},{duration:300,easing:"easeOutCubic",queue:!1});var l=t,u=setInterval(function(){null===s.parentNode&&window.clearInterval(u),s.classList.contains("panning")||(l-=20),0>=l&&(Vel(s,{opacity:0,marginTop:"-40px"},{duration:375,easing:"easeOutExpo",queue:!1,complete:function(){"function"==typeof a&&a(),this[0].parentNode.removeChild(this[0])}}),window.clearInterval(u))},20)};