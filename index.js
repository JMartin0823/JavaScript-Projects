document.addEventListener('DOMContentLoaded', () => {
	const form = document.querySelector('form')
	const container = document.getElementById('palette')

	function render(arr) {
		let colors = arr.map((color) => {
			return `
         <div class='color'>
            <div class='color-bkg' style="background-color: #${color}";></div>
            <p id="code">#${color}</p>
         </div>
         `
		})
		container.innerHTML = colors.join('')
	}

	form.addEventListener('submit', (e) => {
		e.preventDefault()
		let color = document.getElementById('color-picker').value.replace('#', '')
		let mode = document.getElementById('mode').value
		fetch(`https://www.thecolorapi.com/scheme?hex=${color}&mode=${mode}&count=6`)
			.then((response) => response.json())
			.then((data) => {
				let colorPalette = data.colors.map((color) => {
					return color.hex.clean
				})
				console.log(colorPalette)
				render(colorPalette)
			})
	})
})
