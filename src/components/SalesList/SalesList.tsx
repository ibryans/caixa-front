import { useState } from "react"

export default function SalesList() {

    const [sales, setSales] = useState([
        {
            id: 1,
            description: 'Impressão',
            totalPrice: 2.5,
            date: Date(),
            paymentMethod: "Dinheiro"
        },
        {
            id: 2,
            description: '',
            totalPrice: 0.5,
            date: Date(),
            paymentMethod: "Cartão de Débito"
        },
        {
            id: 3,
            description: '',
            totalPrice: 15,
            date: Date(),
            paymentMethod: "Pix"
        }
    ])

    // setSales(list)

    return (
        <div className="p-2">
            {sales.map((sale) => (
                <div key={`sale-${sale.id}`} className="m-2 row card">
                    <div className="card-body">
                        <h5 className="card-title d-flex">
                            <b>R$ {sale.totalPrice.toFixed(2)}</b>
                            <a className="d-flex ms-auto text-decoration-none fs-6" data-bs-toggle="collapse" href={`#sale-${sale.id}-itens`} role="button" aria-expanded="false" aria-controls={`#sale-${sale.id}-itens`}>
                                <i className="bi bi-caret-down-fill"></i> 
                            </a>
                        </h5>
                        <h6 className="card-subtitle text-secondary">
                            {sale.paymentMethod}
                        </h6>
                        <p className="card-text mt-2 collapse" id={`sale-${sale.id}-itens`}>
                            <span> {sale.description} </span>
                        </p>
                    </div>
                </div>
            ))}
        </div>
    )

}