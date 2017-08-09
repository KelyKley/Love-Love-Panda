var pictures = ["assets/img/a1.jpg","assets/img/a2.jpg", "assets/img/a3.jpg", "assets/img/a4.jpg"];

var fotos = document.getElementById('cuadros');

for(var i = 0; i<pictures.length ; i++){
	var img = document.createElement("img");
	var atri = img.setAttribute("src", pictures[i]);
	img.setAttribute("class", "cuadros");
	fotos.appendChild(img);
}