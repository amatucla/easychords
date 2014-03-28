$(document).bind("mobileinit", function() { 
    $.mobile.defaultPageTransition = "fade";
});


/************************************************************* INICIO ******************/
$(document).on('pageshow', '#inicio',  function() {
   
	

	if (window.localStorage) {
		var soundtype = localStorage.getItem('soundtype');
		if (soundtype == 'strum') {
					
		} else if (soundtype == 'arpegio') {
					
		} else {
					soundtype = 'strum';
					localStorage.setItem('soundtype',soundtype);	
		}	

		var onswipe = localStorage.getItem('onswipe');
		if (onswipe == 'sound') {
					
		} else if (onswipe == 'diagram') {
					
		} else {
					onswipe = 'sound';
					localStorage.setItem('onswipe',onswipe);	
		}		
			
		var c1 =  $('#select1').val();
		var c2 =  $('#select2').val();
		var c3 =  $('#select3').val();
		var c2n;
	   switch(c2)
		{
			case 'sharp':	c2n = '<img class="sharp" src="css/images/sharp.png"/>';
				break;
			case 'bemol':	c2n = '<img class="bemol" src="css/images/bemol.png"/>';
				break;
			case 'natural':	 c2n = '';
				break;
		}
		
		var c3n;
		switch(c3)
		{
			case 'major': c3n = '';
				break;
			case 'minor': c3n = 'm';
				break;
			case '7': c3n = '7';
				break;
		}
		
 		var started = sessionStorage.getItem("started");
		if (started == null) {
		 	$('img#chorddiagram').addClass('splash');
		 	$('img#chorddiagram').attr("src",'css/images/splash.png');
		 	setTimeout(function(){
               $('img#chorddiagram').fadeOut("fast",function(){
               		$('img#chorddiagram').removeClass('splash');
               		$('#chordname').html(c1 + c2n + c3n);  
			   		$('img#chorddiagram').attr("src",'chords/' + c1 + '/' + c2 + '/' + c3 + '/1.gif');
			   		$('img#chorddiagram').fadeIn("fast");	
               });
		 	}, 2000);
		 	sessionStorage.setItem("started", true);
		} else {
			$('#chordname').html(c1 + c2n + c3n);  
	   		$('img#chorddiagram').attr("src",'chords/' + c1 + '/' + c2 + '/' + c3 + '/1.gif'); 	
		}
        $('audio#sample').attr("src",'chords/' + c1 + '/' + c2 + '/' + c3 + '/' + soundtype + '.ogg');
	}
});


/*************************************************************  OPTIONS ******************/
$(document).on('pageshow', '#options',  function() {  

	if (window.localStorage) {
		var soundtype = localStorage.getItem('soundtype');
		if (soundtype == 'strum') {
			$('input#radio-soundtype-strum').attr("checked", "checked");
			$('input#radio-soundtype-arpegio').removeAttr('checked');
        } else if (soundtype == 'arpegio') {
	        $('input#radio-soundtype-arpegio').attr("checked", "checked");
			$('input#radio-soundtype-strum').removeAttr('checked');
		} else {
			localStorage.setItem('soundtype','strum');
			$('input#radio-soundtype-strum').attr("checked", "checked");
			$('input#radio-soundtype-arpegio').removeAttr('checked');
        }
		$('fieldset#cgsoundtype').controlgroup('refresh');
		
		var onswipe = localStorage.getItem('onswipe');
		if (onswipe == 'sound') {
			$('input#radio-onswipe-sound').attr("checked", "checked");
			$('input#radio-onswipe-diagram').removeAttr('checked');
        } else if (onswipe == 'diagram') {
	        $('input#radio-onswipe-diagram').attr("checked", "checked");
			$('input#radio-onswipe-sound').removeAttr('checked');
		} else {
			localStorage.setItem('onswipe','sound');
			$('input#radio-onswipe-sound').attr("checked", "checked");
			$('input#radio-onswipe-diagram').removeAttr('checked');
        }
		$('fieldset#cgonswipe').controlgroup('refresh');
	}

});
