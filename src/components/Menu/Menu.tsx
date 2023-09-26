import { useLocation } from "react-router-dom"

export default function Menu() {

    const location = useLocation()
    const path = location.pathname

    const items = [
        {name: 'sales', description: 'Vendas'},
        {name: 'sales', description: 'Fiados'},
        {name: 'sales', description: 'Vendas'},
    ]

    return (
        <ul className="nav nav-pills p-3">
            <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#sales">
                    Vendas
                </a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">
                    Fiados
                </a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">
                    Link
                </a>
            </li>
        </ul>
    )
}