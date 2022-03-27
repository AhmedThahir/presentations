const assetLoc="assets/",assets=document.querySelectorAll("img, video, audio");for(let t=0;t<assets.length;t++)assets[t].setAttribute("loading","lazy"),assets[t].setAttribute("data-src",assetLoc+assets[t].getAttribute("s"));const appendix=document.querySelectorAll("#appendix section");for(let t=0;t<appendix.length;t++)appendix[t].setAttribute("data-visibility","uncounted");const notes=document.getElementsByTagName("aside");for(let t=0;t<notes.length;t++)notes[t].classList.add("notes"),notes[t].setAttribute("data-markdown","");const tables=document.getElementsByTagName("tab");for(let t=0;t<tables.length;t++)tables[t].setAttribute("data-markdown","");const stack=document.getElementsByClassName("rs");for(let t=0;t<stack.length;t++)stack[t].classList.add("r-stack");const mer=document.getElementsByClassName("mermaid");for(let t=0;t<mer.length;){mer[t].parentElement.classList.add("diagram-slide");const e=document.createElement("div");e.classList.add("diagram-display"),e.classList.add("fragment"),mer[t].parentNode.appendChild(e);const s=mer[t];s.classList.add("diagram-data"),s.classList.remove("mermaid")}const section=document.getElementsByTagName("section");for(let t=0;t<section.length;t++){section[t].classList.contains("cover")||section[t].setAttribute("data-background-size","contain");const e=section[t].getAttribute("menu");null!=e&&section[t].setAttribute("data-menu-title",e);const s=section[t].getAttribute("color");null!=s&&section[t].setAttribute("data-background-color",s);const a=section[t].getAttribute("img");null!=a&&(section[t].setAttribute("data-background-image",assetLoc+a),section[t].classList.contains("cover")||section[t].setAttribute("data-menu-title",a.slice(0,-4)));const n=section[t].getAttribute("vid");null!=n&&(section[t].setAttribute("data-background-video",assetLoc+n),section[t].setAttribute("data-menu-title",n.slice(0,-4)));const i=section[t].getAttribute("iframe");if(null!=i){const e=section[t].getAttribute("fallback");i.includes("http")?null==e?alert("Iframe Fallback missing on section: "+(t+1)):(section[t].setAttribute("data-menu-title",e.slice(0,-4)),navigator.onLine?section[t].setAttribute("data-background-iframe",i):section[t].setAttribute("data-background-image",assetLoc+e)):(section[t].setAttribute("data-background-iframe",assetLoc+i),section[t].setAttribute("data-menu-title",i.slice(0,-5)))}}const fragments=document.querySelectorAll("img:not(.fallback), video, iframe, li, span, .f, table, td, th:not(:first-child)");for(let t=0;t<fragments.length;t++)fragments[t].classList.add("fragment");