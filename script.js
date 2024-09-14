const div = document.querySelector('.count-js');
const buttonCount = document.querySelector('.button-js-count');
const buttonClear = document.querySelector('.button-js-clear')
let count = 0;
div.textContent = count;

buttonCount.addEventListener('click', () => {
	countBtn()
	addText()
})
buttonClear.addEventListener('click', () => {
	clearBtn()
	addText()
})

function addText() {
	div.textContent = count;
}

function countBtn() {
	count += 1;
}

function clearBtn() {
	count = 0;
}

