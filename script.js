document.getElementById('value').oninput = function () {
	document.getElementById('password-length').textContent = this.value
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
const arr1 = ['a', 'b', 'c', 'd']
const arr2 = ['A', 'B', 'C', 'D']
const arr3 = ['!', '@', '#', '$']

document.getElementById('submit').addEventListener('click', generatePass)

function generatePass(e) {
	e.preventDefault()
	let a = []
	if (document.getElementById('numbers').checked) {
		a = a.concat(arr)
	} if (document.getElementById('string').checked) {
		a = a.concat(arr1)
	} if (document.getElementById('upper').checked) {
		a = a.concat(arr2)
	} if (document.getElementById('symvols').checked) {
		a = a.concat(arr3)
	}
	a.sort(compareFunction)

	function compareFunction() {
		return Math.random() - .5
	}
	let out = ''
	const passLenght = document.getElementById('value').value
	for (let i = 0; i < passLenght; i++) {
		out += a[randomInteger(0, a.length - 1)]
	}
	document.getElementById('out').textContent = '<p>' + out + '</p>'

	function randomInteger(min, max) {
		let rand = min - .5 + Math.random() * (max - min + 1)
		rand = Math.round(rand)
		return rand
	}
}
