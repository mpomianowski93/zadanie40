let przycisk = document.querySelector('button');
let imie = document.getElementById('imie');
let nazwisko = document.getElementById('nazwisko');
let numer = document.getElementById('numer_telefonu');

let paragraf1 = document.getElementById('name');
let paragraf2 = document.getElementById('surname');
let pargaraf3 = document.getElementById('phone');

przycisk.onclick = function () {
	paragraf1.textContent = imie.value;
	paragraf2.textContent = nazwisko.value;
	pargaraf3.textContent = numer_telefonu.value;
};
