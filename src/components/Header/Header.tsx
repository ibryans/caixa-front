import './Header.css'
import accountLogo from '../../assets/papelaria.jpeg'
import { useState } from 'react'


function Header() {

	const [user, setUser] = useState({
		name: 'Papelaria R.A Tech',
		img: accountLogo
	})

	return (
		<nav className="navbar bg-primary">
			<div className="col-md-6 offset-md-3 col-sm-12 p-4 pt-3 pb-2 d-flex justify-content-between align-items-center text-white">
				<h4 className="d-flex justify-content-start">
					Controle de Caixa
				</h4>
				<div className='nav-item dropdown'>
					<a href="#" className="nav-link dropdown-toggle user-action p-1" role='button' data-bs-toggle="dropdown" aria-expanded="false">
						<img src={user.img} className="avatar" />
						<span className=''>{user.name}</span>
					</a>
					<ul className="dropdown-menu">
						<li><a className="dropdown-item" href="#">Perfil</a></li>
						<li><a className="dropdown-item" href="#">Configurações</a></li>
						<li><hr className="dropdown-divider"/></li>
						<li><a className="dropdown-item" href="#">Sair</a></li>
					</ul>
				</div>
			</div>
		</nav>
	)
}

export default Header