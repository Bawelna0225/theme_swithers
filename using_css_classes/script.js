document.body.classList = localStorage.getItem('theme')

const changeTheme = (theme) => {
	document.body.classList = ''
	document.body.classList.add(theme)
	switch (theme) {
		case 'light':
			localStorage.setItem('theme', 'light')
			break
		case 'dark':
			localStorage.setItem('theme', 'dark')
			break
		case 'blue':
			localStorage.setItem('theme', 'blue')
			break
	}
}
