// let name = "GoGa";  
// alert("My name is " + name) 
// let - создание переменной (переменная)
// alert - сообщ.
// ctr + / - комментировать

// let name = 'denis';
// let school = 'stem';

// let monitor = {
// 	color: 'black',
// 	size: 24,
// 	price: '$13000',
// 	resolution: 'full hd',
// 	matrix: 'ips',
// 	name: {
// 		brand: 'huawei',
// 		model: 'X1000',
// 	}
// };

// alert("Модель:  " + monitor.name.model + " | Цвет:  " + monitor.color + " | Цена:  " + monitor.price)

// monitor.color = 'white'

// let x = 200;

// if (x == 100) {
// 	alert('НУ НЕЗН')
// } else if (x == 200) {
// 	alert('ВСЁ ОК, ЗаХаДи')
// } else (x == 300) {
// 	alert ('БАН')
// }

// && оператор "и" - || оператор "или"
// let le = 2;
// let be = 4;
// let me = 8;

// if (le == 2 && be == 4 && me == 7) {
// 	alert("aboba")
// }



let elem = document.querySelector('.calc span'); 
let pl = document.querySelector('.plus');
let mn = document.querySelector('.minus');
let ml = document.querySelector('.mul');
let dv = document.querySelector('.dev');
let inp1 = document.querySelector('.first');
let inp2 = document.querySelector('.second')

// 1-исп || 

pl.onclick = function() {
	if (inp1.value == '' || inp2.value == '') {
		alert("Вы не ввели одно из число.")
	} else {
	elem.innerText = +inp1.value + +inp2.value;
	}
}
// 2-исп для 1 и 2 чисел

mn.onclick = function() {
	if (inp1.value == '' || inp2.value == '') {
		alert("Вы не ввели одно из число.")
	} else {
	elem.innerText = inp1.value - inp2.value;
	}
}

ml.onclick = function() {
	if (inp1.value == '' || inp2.value == '') {
		alert("Вы не ввели одно из число.")
	} else {
	elem.innerText = inp1.value * inp2.value;
	}
}

dv.onclick = function() {
	if (inp1.value == '' || inp2.value == '') {
		alert("Вы не ввели одно из число.")
	} else {
	elem.innerText = inp1.value / inp2.value;
	}
}