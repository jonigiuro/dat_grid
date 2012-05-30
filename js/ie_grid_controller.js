function removejscssfile(filename, filetype){ //Rimuove il css o js indicato in "filename" dalla pagina
 	var targetelement=(filetype=="js")? "script" : (filetype=="css")? "link" : "none"
 	var targetattr=(filetype=="js")? "src" : (filetype=="css")? "href" : "none"
 	var allsuspects=document.getElementsByTagName(targetelement)
 	for (var i=allsuspects.length; i>=0; i--){ 
  		if (allsuspects[i] && allsuspects[i].getAttribute(targetattr)!=null && allsuspects[i].getAttribute(targetattr).indexOf(filename)!=-1)
   		allsuspects[i].parentNode.removeChild(allsuspects[i])
 	}
}

function checkwidth(from_width, to_width, filename){
	var w = $('body').width();
	if(w > from_width && w < to_width){ //se la larghezza del body è tra il valore minimo e quello massimo passati va a caricare il css passato insieme
		link=document.createElement('link');
		link.href=filename;
		link.rel='stylesheet';
		document.getElementsByTagName('head')[0].appendChild(link); //aggiunge il css indicato con "filename"
	}else{
		removejscssfile(filename, "css"); //rimuovere il css che non è più necessario
	}
}

$(window).resize(function(e){
	checkwidth(760, 1200,'css/grid_fix_big.css');
	checkwidth(0, 759,'css/grid_fix_mobile.css');
	//più in su di 1200 diventa liquidona (fino a 1500 dato come max-width in grid.css)
});

$(document).ready(function(e){
	//alert($('body').width());
	checkwidth(760, 1200,'css/grid_fix_big.css');
	checkwidth(0, 759,'css/grid_fix_mobile.css');
	//più in su di 1200 diventa liquidona (fino a 1500 dato come max-width in grid.css)
});