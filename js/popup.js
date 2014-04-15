$( document ).ready(function() {
		$('.openPopup').on("click", function() {

			var id = $(this).attr('id');

			var cell = $(this);

			var info = "";
			document.getElementById("popupID").innerHTML = info;
			var substitudeID = document.getElementById(id).getAttribute("data-substitude");

			
				for(aLesson in timetObject){

					if(timetObject[aLesson].cellid.indexOf(id + "/") != -1)		//Überprüfen ob die ID die beim Stundenplan erzeugen für dieses Objekt gesetzt wurde mit der ID der gewünschten Zelle übereinstimmt
					{	
						
						if(actualClass != 0)
							var infoPart = timetObject[aLesson].teShort;	//Wenn es sich um einen Schüler handelt(Klasse ist gesetzt) wird der Lehrer angezeigt
						else
							var infoPart = timetObject[aLesson].clName;		//Wenn es sich um einen Leherer handelt(keine Klasse ist gesetzt) wird die Klasse angezeigt
						/*alert(object[aLesson].suShort);*/

						var infoNew = "<b>" + timetObject[aLesson].suShort + "</b> <br>" + infoPart + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + timetObject[aLesson].roName;	//Alle Informationen des PopUps werden zusammengesetzt(Fach + Lehrer/Klasse + Raum)
						
						if(timetObject[aLesson].comment)
							var infoNew = infoNew + "<br>" + timetObject[aLesson].comment;
						
						if(document.getElementById("popupID").innerHTML != "")
							var info = document.getElementById("popupID").innerHTML + "<br>" + infoNew;	//Falls schon Informationen bestehen werden die neuen Informationen hinten angehängt
						else
							var info = infoNew;
					

						document.getElementById("popupID").innerHTML = info;		
					}
				}

			
			if(substitudeID != " " && document.getElementById(id).getAttribute("data-substitude")){

				if(subsObject[substitudeID].teShort || subsObject[substitudeID].clName){
					if(actualClass != 0)
						var info = info.replace(subsObject[substitudeID].oldTeShort, subsObject[substitudeID].teShort);
						//Wenn es sich um einen Schüler handelt(Klasse ist gesetzt) wird der Lehrer angezeigt
				}

				if(subsObject[substitudeID].suShort)
					var info = info.replace(subsObject[substitudeID].oldSuShort, subsObject[substitudeID].suShort);
							
				if(subsObject[substitudeID].roName)
					var info = info.replace(subsObject[substitudeID].oldRoName, subsObject[substitudeID].roName);

				if(subsObject[substitudeID].comment)
					var info = info + "<br>" + subsObject[substitudeID].comment;
			

				document.getElementById("popupID").innerHTML = info;
			}

		
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