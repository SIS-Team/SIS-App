$( document ).ready(function() {
		$('.openPopup').on("click", function() {

			var id = $(this).attr('id');

			var info = "";
			document.getElementById("popupID").innerHTML = info;
			var aLesson = document.getElementById(id).getAttribute("data-substitude");
            

			var infoNew = "<b>" + subsObject[aLesson].clName + "</b> <br>" + subsObject[aLesson].suShort + "<br>" + subsObject[aLesson].teDisplay;

			if(subsObject[aLesson].roName)
							var infoNew = infoNew + "<br>" + subsObject[aLesson].roName;
			if(subsObject[aLesson].comment)
							var infoNew = infoNew + "<br>" + subsObject[aLesson].comment;

			if(document.getElementById("popupID").innerHTML != "")
				var info = document.getElementById("popupID").innerHTML + "<br>" + infoNew;
			else
				var info = infoNew;

			document.getElementById("popupID").innerHTML = info;		


		    $('.Popup').fadeIn("slow");
		    $('#overlay').fadeIn("slow");
		    $('body').css('overflow', 'hidden');
		    var top = document.body.scrollTop;
		    $('.Popup').css('top', document.body.scrollTop);

	    return false;
		});
		$('.closePopup').on("click", function() {
		    $(".Popup").fadeOut("slow");
		    $("#overlay").fadeOut("slow");
	    	$('body').css('overflow', 'auto');
		    return false;
		});
	});