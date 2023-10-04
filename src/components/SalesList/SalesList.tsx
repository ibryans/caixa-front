import { useState } from "react"

export default function SalesList() {

    const [sales, setSales] = useState([
        {
            id: 1,
            products: [
                {id: 12, name: "Impressão", quantity: 3, price: 0.5},
                {id: 34, name: "Envelope", quantity: 1, price: 1}
            ],
            totalPrice: 2.5,
            date: Date(),
            paymentMethod: {id: 1, description: "Dinheiro"}
        },
        {
            id: 2,
            products: [
                {id: 12, name: "Impressão", quantity: 1, price: 0.5},
            ],
            totalPrice: 0.5,
            date: Date(),
            paymentMethod: {id: 2, description: "Cartão de Débito"}
        }
    ])

    // setSales(list)

    return (
        <>
            <div className="p-2">
                {sales.map((sale) => (
                    <div key={`sale-${sale.id}`} className="m-2 row card">
                        <div className="card-body">
                            <h5 className="card-title d-flex">
                                <b>R$ {sale.totalPrice.toFixed(2)}</b>
                                <a className="d-flex ms-auto text-decoration-none fs-6" data-bs-toggle="collapse" href={`#sale-${sale.id}-itens`} role="button" aria-expanded="false" aria-controls={`#sale-${sale.id}-itens`}>
                                    Ver itens
                                </a>
                            </h5>
                            <h6 className="card-subtitle text-secondary">
                                {sale.paymentMethod.description}
                            </h6>
                            <p className="card-text mt-2 collapse" id={`sale-${sale.id}-itens`}>
                                {sale.products.map((product) => (
                                    <span key={`sale-${sale.id}-product-${product.id}`}>
                                        <span> {product.quantity}x {product.name} </span>
                                        <br/>
                                    </span>
                                ))}
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            <div className="d-flex justify-content-end p-3">
                <button className="btn btn-primary" type="button">
                    + Adicionar Venda
                </button>
            </div>
        </>
    )

}