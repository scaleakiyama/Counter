const div = document.querySelector('.count-js');
const buttonCount = document.querySelector('.button-js-count');
const buttonClear = document.querySelector('.button-js-clear')
div.style.cssText = `
	text-align:center;
	width:20px;
	height:20px;
	background: red;
	padding: 10px 15px;
	margin: 5px 0 5px 0;
	color: white;
	font-size: 20px;
`

let count = 0;

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

