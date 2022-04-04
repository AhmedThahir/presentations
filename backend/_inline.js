Reveal.initialize({
	hash: true,
	controls: false, // hide the arrows
	
	//- viewDistance: 2, // it seems bad, but while actually presenting, this is the most stable, because i will take time bw slides anyways
	preloadIframes: true, // loads iframes only within view distance

	hideCursorTime: 1000, // Time before the cursor is hidden (in ms)

	overview: false, // i don't really use it; why waste resources
	center: false,
	
	//- width: 1280,
	//- height: 1080,
	//- margin: 0,

	katex: {
		local: '#{backend}' + 'node/node_modules/katex',
	},

	menu: {
		openButton: false
	},

	pointer: {
		key: "p", // key to enable pointer, default "q", not case-sensitive
		color: "hsla(0, 80%, 50%, 0.85)", // color of a cursor, default "red" any valid CSS color
		pointerSize: 30, // pointer size in px, default 12
	},

	pdfSeparateFragments: false,
	pdfMaxPagesPerSlide: 1,
	navigationMode: "linear", // left-right arrows traverse horizontal and vertical slides
	keyboard: {
		// these are javascript keycodes
		90: 'togglePause'
	}
});

load();

// plugins
function load()
{
	
	const loadScript = src => {
	return new Promise((resolve, reject) => {
			const script = document.createElement('script');
			script.type = 'text/javascript';
			script.onload = resolve;
			script.onerror = reject;
			script.src = src;
			document.head.append(script);
		})
	}

	const loadStyle = href => {
	return new Promise((resolve, reject) => {
			const style = document.createElement('link');
			style.rel="stylesheet";
			style.type = 'text/css';
			style.onload = resolve;
			style.onerror = reject;
			style.href = href;
			document.head.append(style);
		})
	}

	loadScript( "#{customPlugin}" + 'menu/menu.js' ).then(() => {
			Reveal.registerPlugin( RevealMenu )
	})

	//- loadStyle("#{customPlugin}" + 'pointer/pointer.css')
	//- loadScript( "#{customPlugin}" + 'pointer/pointer.js' ).then(() => {
	//-     Reveal.registerPlugin( RevealPointer )
	//- })
	
	if(document.querySelector(".diagram-data") != null)
	{
		const k = "#{customPlugin}" + 'mermaid/mermaid.'
		loadScript( k + 'js' )
		loadStyle( k + 'css')
		loadScript( k + 'full.js' )
	}


	// default plugins
	loadScript( "#{reveal}" + 'plugin/math/math.js' ).then(() => {
			Reveal.registerPlugin( RevealMath.KaTeX )
	})

	if(document.querySelector("code") != null)
	{
		const k = "#{reveal}" + 'plugin/highlight/'
		loadStyle(k + 'monokai.css')
		loadScript( k + '/highlight.js' ).then(() => {
			Reveal.registerPlugin( RevealHighlight )
		})
	}
	if(document.querySelector("aside") != null)
	{
		loadScript( "#{reveal}" + 'plugin/markdown/markdown.js' ).then(() => {
			Reveal.registerPlugin( RevealMarkdown )
		})

		loadScript( "#{reveal}" + 'plugin/notes/notes.js' ).then(() => {
			Reveal.registerPlugin( RevealNotes )
		})
	}
}

if(window.innerWidth < 1000)
	Reveal.configure({
		controls: true
	});