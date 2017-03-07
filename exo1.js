
var tabImg = ["http://www.carrelage-ciment.fr/images/produit/bleu-clair-u8-9802-mini2.jpg","http://idata.over-blog.com/1/88/97/82/Tranches-de-vie/jaune.jpg","http://www.dada-concept.com/formation/galerie/moi/images/fonvert_jpg.jpg","https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Carr%C3%A9_rouge.svg/250px-Carr%C3%A9_rouge.svg.png"]

DAF = document.getElementById('rajoutjs');

for (var i = 0; i < tabImg.length; i ++) {

document.getElementById("rajoutjs").innerHTML += "<img src ="+tabImg[i] +">";
}

function suppImg()
{
	tabImg.pop();//la fonction pop permet de supprimer le dernier élément d'un tableau
	alert(tabImg);
	document.getElementById("rajoutjs").innerHTML = "";// cà permet de neutraliser le même tableau avant
	for (var i = 0; i < tabImg.length; i ++) {

document.getElementById("rajoutjs").innerHTML += "<img src ="+tabImg[i] +">";
}// reaffichage du tableau après suppression
}
