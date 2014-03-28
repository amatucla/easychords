$(function() { 
	$('#select1').change(function()
	{	   
	   var c1 =  $(this).val();
	   var c2 =  $('#select2').val();
	   var c3 =  $('#select3').val();
	   
	   var c2n;
	   switch(c2)
		{
			/* case 'sharp': c2n = '<span class="music-symbol">&#9839;</span>'; */
			case 'sharp':	c2n = '<img class="sharp" src="css/images/sharp.png"/>';
				break;
			/* case 'bemol':	c2n = '<span class="music-symbol">&#9837;</span>';  */
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
		
	   $('div#chord').fadeOut( "fast", function () { 
	   		$('#chordname').html(c1 + c2n + c3n);
	   		$('img#chorddiagram').attr("src",'chords/' + c1 + '/' + c2 + '/' + c3 + '/1.gif'); 
	   	 	$('div#chord').fadeIn('fast');
	   }); 
	   var soundtype = localStorage.getItem('soundtype');
	   $('audio#sample').attr("src",'chords/' + c1 + '/' + c2 + '/' + c3 + '/' + soundtype + '.ogg'); 
	});
	
	$('#select2').change(function()
	{
	   var c1 =  $('#select1').val();
	   var c2 =  $(this).val();
	   var c3 =  $('#select3').val();
	   
	   var c2n;
	   switch(c2)
		{
			/* case 'sharp': c2n = '<span class="music-symbol">&#9839;</span>'; */
			case 'sharp':	c2n = '<img class="sharp" src="css/images/sharp.png"/>';
				break;
			/* case 'bemol':	c2n = '<span class="music-symbol">&#9837;</span>';  */
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
		
	   
	   $('div#chord').fadeOut( "fast", function () { 
	   		$('#chordname').html(c1 + c2n + c3n);
	   		$('img#chorddiagram').attr("src",'chords/' + c1 + '/' + c2 + '/' + c3 + '/1.gif'); 
	   	 	$('div#chord').fadeIn('fast');
	   }); 
	   var soundtype = localStorage.getItem('soundtype');
	   $('audio#sample').attr("src",'chords/' + c1 + '/' + c2 + '/' + c3 + '/' + soundtype + '.ogg'); 
	});
	
	$('#select3').change(function()
	{
	   var c1 =  $('#select1').val();
	   var c2 =  $('#select2').val();
	   var c3 =  $(this).val();
	   
	   var c2n;
	   switch(c2)
		{
			/* case 'sharp': c2n = '<span class="music-symbol">&#9839;</span>'; */
			case 'sharp':	c2n = '<img class="sharp" src="css/images/sharp.png"/>';
				break;
			/* case 'bemol':	c2n = '<span class="music-symbol">&#9837;</span>';  */
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
		

	   $('div#chord').fadeOut( "fast", function () { 
	   		$('#chordname').html(c1 + c2n + c3n);
	   		$('img#chorddiagram').attr("src",'chords/' + c1 + '/' + c2 + '/' + c3 + '/1.gif'); 
	   	 	$('div#chord').fadeIn('fast');
	   }); 
	   var soundtype = localStorage.getItem('soundtype');
	   $('audio#sample').attr("src",'chords/' + c1 + '/' + c2 + '/' + c3 + '/' + soundtype + '.ogg'); 
	});
	
	
	$('img#chorddiagram').click(function()
    {	 
	     var onswipe = localStorage.getItem('onswipe');
		  if (onswipe == 'sound') {
			var src = $('img#chorddiagram').attr("src");
			 $('img#chorddiagram').fadeOut( "fast", function () { 		
				 if (src.indexOf('1.gif')>0) {	
						var newsrc=src.replace('1.gif','2.gif');  
						$('img#chorddiagram').attr("src",newsrc);
				 }	else if (src.indexOf('2.gif')>0) {
						var newsrc=src.replace('2.gif','3.gif'); 				
						$('img#chorddiagram').attr("src",newsrc); 
				 }	else if (src.indexOf('3.gif')>0) {
						var newsrc=src.replace('3.gif','1.gif'); 
						$('img#chorddiagram').attr("src",newsrc); 
				 }
				 $('img#chorddiagram').fadeIn('fast');
			 });			
		  } else {
			  myAudio = document.getElementById('sample');
			  myAudio.pause();
			  myAudio.currentTime = 0;
			  myAudio.play();
		  }
	});
	
	
	$('input#radio-soundtype-strum').change(function () {
			if(this.checked) {
				localStorage.setItem('soundtype','strum');	
			}
	}).trigger('change');	

	
	$('input#radio-soundtype-arpegio').change(function () {
			 if(this.checked) {
				localStorage.setItem('soundtype','arpegio');	
			 }
	}).trigger('change');	
	
	
	
	
	$('input#radio-onswipe-sound').change(function () {
			if(this.checked) {
				localStorage.setItem('onswipe','sound');	
			}
	}).trigger('change');	

	
	$('input#radio-onswipe-diagram').change(function () {
			 if(this.checked) {
				localStorage.setItem('onswipe','diagram');	
			 }
	}).trigger('change');	
	
	
	function swipeHandler () {
		  var onswipe = localStorage.getItem('onswipe');
		  if (onswipe == 'sound') {
			myAudio = document.getElementById('sample');
			myAudio.pause();
			myAudio.currentTime = 0;
			myAudio.play();
		  } else {
			  var src = $('img#chorddiagram').attr("src");
			  $('img#chorddiagram').fadeOut( "fast", function () { 
				 if (src.indexOf('1.gif')>0) {	
						var newsrc=src.replace('1.gif','2.gif');  
						$('img#chorddiagram').attr("src",newsrc);
				 }	else if (src.indexOf('2.gif')>0) {
						var newsrc=src.replace('2.gif','3.gif'); 				
						$('img#chorddiagram').attr("src",newsrc); 
				 }	else if (src.indexOf('3.gif')>0) {
						var newsrc=src.replace('3.gif','1.gif'); 
						$('img#chorddiagram').attr("src",newsrc); 
				 }
				 $('img#chorddiagram').fadeIn('fast');
			  });	
		  }
	}
	

	$('img#chorddiagram').on('swiperight', swipeHandler);
	
	$('img#chorddiagram').on('swipeleft', swipeHandler);
	 
}); 