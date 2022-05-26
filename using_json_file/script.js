const root = document.documentElement

root.style.setProperty('--bg-color', localStorage.getItem('bgColor'))
root.style.setProperty('--secondary', localStorage.getItem('secondary'))
root.style.setProperty('--text', localStorage.getItem('text'))

const changeTheme = (theme) => {
	fetch('./themes.json')
		.then((response) => response.json())
		.then((data) => {
			data.filter((data) => {
				const {
					id,
					colors: { bgColor, secondary, text },
				} = data
				if (id === theme) {
					root.style.setProperty('--bg-color', bgColor)
					root.style.setProperty('--secondary', secondary)
					root.style.setProperty('--text', text)

					localStorage.setItem('bgColor', bgColor)
					localStorage.setItem('secondary', secondary)
					localStorage.setItem('text', text)
				}
			})
		})
		.catch((error) => console.log(`%cERROR! ${error}`, "color: red; font-size: 18px"))
}
