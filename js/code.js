var videoDiv1 = "<div class='video-placeholder'><video class='clip' width=200' height='200' preload='auto' autoplay='autoplay' loop='true'>";
var videoWebM1 = "<source type='video/webm' src='videos/best-bite-";
var videoWebM2 = ".webmhd.webm'></source>";
var videoMP41 = "<source type='video/mp4' src='videos/best-bite-";
var videoMP42 = ".mp4'></source>";
var videoDiv2 = "Your browser does not support the video tag.</video></div>"

var numVideos = 36;
var videoDisplayed = [];
		  
	  
function initVideoDisplayed() {
	for (var i = 0; i < numVideos; i++) {
		videoDisplayed[i] = 0;
	}
}

function addVideo(i) {
	if (i <= numVideos) {
		var videoDiv = $(videoDiv1 + videoWebM1 + i + videoWebM2 + videoMP41 + i + videoMP42 + videoDiv2).appendTo('#videos');
		var video = $("video").last();
		
		video.on("canplay canplaythrough", function () {
			if (videoDisplayed[i - 1] == 0) {
				videoDisplayed[i - 1] = 1;
				videoDiv.fadeIn(400);
				
				setTimeout(function () {
					addVideo(i + 1);
				}, 700);
			}
		});
	}
}

$(document).ready(function () {
	initVideoDisplayed();
	
	$("#yes").mouseenter(function () {
		$("#yes").stop();
		$("#yes").animate({ "fontSize": "10em"});
	});
	
	$("#yes").mouseout(function () {
		$("#yes").stop();
		$("#yes").animate({ "fontSize": "5em"});
	});
	
	$("#yes").click(function () {
		$("#answer-yes").show(function () {
			$("#question").fadeOut("slow");
			
			setTimeout(function () {
				$("#answer-yes-2").fadeIn(500);
				
				setTimeout(function () {
					$("#answer-yes").fadeOut("slow");
					addVideo(1);
				}, 1500);
			}, 1200);
		});
	});
	
	$("#no").mouseenter(function () {
		$("#no").stop();
		$("#no").animate({ "fontSize": "10em"});
	});
	
	$("#no").mouseout(function () {
		$("#no").stop();	
		$("#no").animate({ "fontSize": "5em"});
	});	
	
	$("#no").click(function () {
		$("#answer-no").show(function () {
			$("#question").fadeOut("slow");
			
			setTimeout(function () {
				$("#answer-no-2").fadeIn(500);
				
				setTimeout(function () {
					$("#answer-no").fadeOut("slow");
					addVideo(1);
				}, 1500);
			}, 1200);
		});
	});
})
