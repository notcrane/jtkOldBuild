var username = "admin";
var host = "!crane";
var cd = "/jsh";
var msg = "Sorry! This website is currently under construction";
var dots = "<ul><li>.</li><li>.</li><li>.</li></ul>";

var promptString = "<pre id = 'prompt' >" + username + "@" + host + "[" + cd + "]: " + msg + dots + "</pre>";

$(document).ready(function() {
	$(".text").prepend(promptString);
	$(function() 
	{
		$(".windowBorder").draggable ({
			handle: ".draggable", cursor: "move", cancel: ".draggable div"
		});
		$(".windowBorder").resizable({
		});
	});
});
$(".btn").mouseup(function()
{
	$(this).closest(".windowBorder").addClass("stateClosed")
});

