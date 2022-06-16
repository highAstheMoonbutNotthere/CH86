var canvas = new fabric.Canvas('myCanvas');
var x = document.getElementById("myAudio");

function new_image() {
	fabric.Image.fromURL("BirthdayImage.jpg", function (img) {
		pic = img;
		pic.scaleToWidth(600);
		pic.scaleToHeight(800);
		pic.set({
			top: 0, left: 0
		});
		canvas.add(pic);
	});
}

function playS() {
	x.play()
}
