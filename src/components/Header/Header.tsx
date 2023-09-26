import './Header.css'

function Header(props: any) {
	return (
		<nav className="navbar sticky-top bg-success text-center">
			<div className="container-fluid d-flex justify-content-center">
				<b className="navbar-brand text-white text-center">
					Caixa
				</b>
			</div>
		</nav>
	)
}

export default Header