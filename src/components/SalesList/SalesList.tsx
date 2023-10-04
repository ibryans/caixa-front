import { useState } from "react"
import AddSale from "../AddSale/AddSale"

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
        },
        {
            id: 3,
            products: [
                {id: 67, name: "Chip Claro", quantity: 1, price: 15},
            ],
            totalPrice: 15,
            date: Date(),
            paymentMethod: {id: 4, description: "Pix"}
        },
        {
            id: 4,
            products: [
                {id: 12, name: "Impressão", quantity: 3, price: 0.5},
                {id: 34, name: "Envelope", quantity: 1, price: 1}
            ],
            totalPrice: 2.5,
            date: Date(),
            paymentMethod: {id: 1, description: "Dinheiro"}
        },
        {
            id: 5,
            products: [
                {id: 12, name: "Impressão", quantity: 3, price: 0.5},
                {id: 34, name: "Envelope", quantity: 1, price: 1}
            ],
            totalPrice: 2.5,
            date: Date(),
            paymentMethod: {id: 1, description: "Dinheiro"}
        },
    ])

    const [addSale, setAddSale] = useState(false)

    // setSales(list)

    return (
        <>
            <div className="bg-white card m-3">
                <div className="row p-3 pb-0">
                    <div className="col-12 mb-3">
                        <h5>Nova venda</h5>
                    </div>
                    <div className="col">
                        <input type="number" className="form-control" placeholder="Valor" aria-label="Valor"/>
                    </div>
                    <div className="col">
                        <select className="form-select" aria-label="Método de pagamento">
                            <option selected disabled>Pagamento</option>
                            <option value="1">Dinheiro</option>
                            <option value="2">Cartão</option>
                            <option value="3">Pix</option>
                        </select>
                    </div>
                    <div className="col">
                        <input type="text" className="form-control" placeholder="Descrição" aria-label="Descriçao"/>
                    </div>
                </div>
                <div className="d-grid p-3">
                    <button onClick={() => setAddSale(true)} className="btn btn-primary" type="button">
                        <i className="bi bi-plus-circle"></i> 
                    </button>
                </div>
            </div>
            <div className="p-2">
                {sales.map((sale) => (
                    <>
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
                </> 
                ))}
            </div>



            {/* <AddSale display={addSale}/> */}
        </>
    )

}