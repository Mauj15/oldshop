var imageLoc; //used sets what should be returned (image date OR file path to image for example)

document.addEventListener("deviceready",onDeviceReady,false);
function onDeviceReady() {
	imageLoc=navigator.camera.imageLoc;
}

function capturePhoto() {
	navigator.camera.getPicture(onPhotoDataSuccess, onFail, { quality: 100,
	imageLoc: imageLoc.DATA_URL });
}
	
function onPhotoDataSuccess(imageData) {
	var image = document.getElementById('image');
	image.style.display = 'block';
	image.src = "data:image/jpeg;base64," + imageData;
}

function onFail(message) {
      alert('Failed because: ' + message);
}



//Used for the text input form, holds the data fields 
function output () {
        document.getElementById('result').innerHTML = 
        document.getElementById("user_input").value;
    }