import { useState } from "react"
import Header from "../Header/Header"
import Menu from "../Menu/Menu"

export default function SalesList() {

    const [sales, setSales] = useState([
        {
            products: [
                {name: "Impressão", quantity: 3, price: 0.5},
                {name: "Digitalização", quantity: 1, price: 1}
            ],
            totalPrice: 2.5,
            date: Date(),
            paymentMethod: {id: 1, description: "Dinheiro"}
        },
        {
            products: [
                {name: "Impressão", quantity: 1, price: 0.5},
            ],
            totalPrice: 0.5,
            date: Date(),
            paymentMethod: {id: 2, description: "Débito"}
        }
    ])

    // setSales(list)

    return (
        <>
            <Header/>
            <Menu/>
            <div className="p-2">
                {sales.map(sale => (
                    <div className="p-2 m-2 row card">
                        <b>R$ {sale.totalPrice.toFixed(2)} ({sale.paymentMethod.description}) </b>

                        {sale.products.map(product => (
                            <span>
                                {product.quantity} - {product.name}
                            </span>
                        ))}
                    </div>
                ))}
            </div>
        </>
    )

}