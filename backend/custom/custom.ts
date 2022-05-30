const assetLoc:string = "assets/";

// lazy loading
// this does not affect background images - it's actually good cuz we want the transition to look good
const assets = document.querySelectorAll("img, video, audio");
for (let i = 0; i < assets.length; i++) {
  assets[i].setAttribute("loading", "lazy");
  
  assets[i].setAttribute("data-src",
  assetLoc + assets[i].getAttribute("data")
  );
}

// const appendix = document.getElementById("appendix").getElementsByTagName("section");
const appendix = document.querySelectorAll("#appendix section");
for (let i = 0; i < appendix.length; i++) {
  appendix[i].setAttribute("data-visibility", "uncounted");
}

const notes = document.getElementsByTagName("aside");
for (let i = 0; i < notes.length; i++) {
  notes[i].classList.add("notes");
  notes[i].setAttribute("data-markdown", "");
}

const tables = document.getElementsByTagName("tab");
for (let i = 0; i < tables.length; i++) {
  tables[i].setAttribute("data-markdown", "");
}


const stack = document.getElementsByClassName("rs");
for (let i = 0; i < stack.length; i++) {
  stack[i].classList.add("r-stack");
}

// in order to use mermaid code, i just say .mermaid at the place of the code
const mer = document.getElementsByClassName("mermaid");
for (let i = 0; i < mer.length;) { // no updation - this works cuz the last element is removed
  const slide = mer[i].parentElement.classList;
  slide.add("diagram-slide");
  
  const display = document.createElement("div");
  display.classList.add("diagram-display"); // , "fragment"
  display.classList.add("fragment");
  mer[i].parentNode.appendChild(display);
  
  const data = mer[i];
  data.classList.add("diagram-data");
  data.classList.remove("mermaid");
}

// renaming
const section = document.getElementsByTagName("section");
for (let i = 0; i < section.length; i++) 
{
  
  if(
		! section[i].classList.contains("cover") &&
		! section[i].classList.contains("full")
		)
  section[i].setAttribute("data-background-size", "contain");
  
  // menu name
  const name = section[i].getAttribute("menu");
  if (name != null)
  section[i].setAttribute("data-menu-title", name);
  
  const color = section[i].getAttribute("color")
  if(color != null)
  section[i].setAttribute("data-background-color", color)
  
  // img
  const img = section[i].getAttribute("img");
  if (img != null)
  {
    section[i].setAttribute("data-background-image", assetLoc + img);
    if( !(section[i].classList.contains("cover")) )
      section[i].setAttribute("data-menu-title", img.slice(0, -4));
  }
  // video
  const vid = section[i].getAttribute("vid");
  if (vid != null)
  {
    section[i].setAttribute("data-background-video", assetLoc + vid);
    section[i].setAttribute("data-menu-title", vid.slice(0, -4));
  }
  // iframe
  const iframe = section[i].getAttribute("iframe");
  if (iframe != null)
  {
    const fallbackLink = section[i].getAttribute("fallback")
    
    if(iframe.includes("http")) // remote embed
    {
      if(fallbackLink == null)
      alert("Iframe Fallback missing on section: " + (i+1) )
      else
      {
        section[i].setAttribute("data-menu-title", fallbackLink.slice(0, -4));
        
        if(navigator.onLine)
        section[i].setAttribute("data-background-iframe", iframe);
        else
        section[i].setAttribute("data-background-image", assetLoc + fallbackLink);
      }
    }
    else // local embed
    {
      section[i].setAttribute("data-background-iframe", assetLoc + iframe);
      section[i].setAttribute("data-menu-title", iframe.slice(0, -5));
    }
  }
}


const fragments = document.querySelectorAll(
  "img:not(.fallback), video, iframe, li, span, .f, table, td:not(table.nf td), th:not(:first-child):not(table.nf th)"
  // even ul:not(ul ul) isn't ideal
  );
  for (let i = 0; i < fragments.length; i++) {
    if(
			!fragments[i].classList.contains("nf")
			)
			fragments[i].classList.add("fragment")
  }
  