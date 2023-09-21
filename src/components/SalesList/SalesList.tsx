import { useState } from "react"

export default function SalesList() {

    const [sales, setSales] = useState([{}])

    // chamada da API
    let list = [
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
    ]

    setSales(list)

    return (
        <div className="p-2">
            {sales.map(sale => (

                <div className="p-2">
                    <b className="mr-2">
                        {sale.totalPrice}
                    </b>

                    <span className="mr-2">
                        {sale.products.map(product => (

                            <span>{product.quantity} - {product.name}, </span>

                        ))}
                    </span>
                </div>

            ))}
        </div>
    )

}