//tasklist javascript
// queryselector - searching element
// createelement - create element


let add = document.querySelector('.add');
let input = document.querySelector('input');
let list = document.querySelector('.list ul');
let clear = document.querySelector('.clear');
let count = document.querySelector('.count');

add.onclick = function() {
	if (input.value == '') {
		alert("Вы не ввели текс!")
	} else {
	let li = document.createElement('li');
	let span = document.createElement('span');
	list.append(li);
	span.append('❌');
	li.append(input.value, span);
	console.dir(list)
	input.value = '';
	counter();

	span.onclick = function() {
	li.remove();
	counter();
}
	} 
}

clear.onclick = function() {
	if (count.textContent == '' || count.textContent == '0') {
		alert('Нет задач');
	} else {
		list.textContent = '';
		counter();
	}
}

function counter() {
	count.textContent = list.childNodes.length;
}



	// list.textContent = '';

// add.onclick = function() {
// 	let li = document.createElement('li');
// 	list.append(li);
// 	li.append(input.value);
// } tc 