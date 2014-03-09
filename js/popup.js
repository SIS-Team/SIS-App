$( document ).ready(function() {
		$('.openPopup').on("click", function() {

			var id = $(this).attr('id');

			var info = "";
			document.getElementById("popupID").innerHTML = info;
			var substitudeID = document.getElementById(id).getAttribute("data-substitude");

			if(substitudeID == " " || !document.getElementById(id).getAttribute("data-substitude"))	//Falls in dem selbst bestimmten Attribut substitude nur ein Leerzeichen steht werden die Daten aus dem normalen Stundenplanobjekt entnommen
			{	
				for(aLesson in timetObject){

					if(timetObject[aLesson].cellid.indexOf(id + "/") != -1)		//Überprüfen ob die ID die beim Stundenplan erzeugen für dieses Objekt gesetzt wurde mit der ID der gewünschten Zelle übereinstimmt
					{	
						
						if(actualClass != 0)
							var infoPart = timetObject[aLesson].teShort;	//Wenn es sich um einen Schüler handelt(Klasse ist gesetzt) wird der Lehrer angezeigt
						else
							var infoPart = timetObject[aLesson].clName;		//Wenn es sich um einen Leherer handelt(keine Klasse ist gesetzt) wird die Klasse angezeigt
						/*alert(object[aLesson].suShort);*/

						var infoNew = "<b>" + timetObject[aLesson].suShort + "</b> <br>" + infoPart + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + timetObject[aLesson].roName;	//Alle Informationen des PopUps werden zusammengesetzt(Fach + Lehrer/Klasse + Raum)
						if(document.getElementById("popupID").innerHTML != "")
							var info = document.getElementById("popupID").innerHTML + "<br>" + infoNew;	//Falls schon Informationen bestehen werden die neuen Informationen hinten angehängt
						else
							var info = infoNew;
					

						document.getElementById("popupID").innerHTML = info;		
					}
				}
			}
			else
			{
				for(aLesson in timetObject){

					if(timetObject[aLesson].cellid.indexOf(id + "/") != -1)		//Überprüfen ob die ID die beim Stundenplan erzeugen für dieses Objekt gesetzt wurde mit der ID der gewünschten Zelle übereinstimmt
					{	
						
						if(actualClass != 0){
							if(timetObject[aLesson].teShort != subsObject[substitudeID].oldTeShort)
								var infoPart = timetObject[aLesson].teShort;	//Wenn es sich um einen Schüler handelt(Klasse ist gesetzt) wird der Lehrer angezeigt
							else
								var infoPart = subsObject[substitudeID].teShort;
						}
						else{
							if(timetObject[aLesson].clName != subsObject[substitudeID].oldClName)
								var infoPart = timetObject[aLesson].clName;		//Wenn es sich um einen Leherer handelt(keine Klasse ist gesetzt) wird die Klasse angezeigt
							else
								var infoPart = subsObject[substitudeID].clName;
						}

						if(timetObject[aLesson].suShort != subsObject[substitudeID].oldSuShort)
							var infoNew = "<b>" + timetObject[aLesson].suShort + "</b> <br>" + infoPart + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + timetObject[aLesson].roName;	//Alle Informationen des PopUps werden zusammengesetzt(Fach + Lehrer/Klasse + Raum)
						else
							var infoNew = "<b>" + subsObject[substitudeID].suShort + "</b> <br>" + infoPart + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + subsObject[substitudeID].roName;

						if(document.getElementById("popupID").innerHTML != "")
							var info = document.getElementById("popupID").innerHTML + "<br>" + infoNew;	//Falls schon Informationen bestehen werden die neuen Informationen hinten angehängt
						else
							var info = infoNew;
					

						document.getElementById("popupID").innerHTML = info;		
					}
				}

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