import { useEffect, useState } from "react"
import Sale from "../../models/Sale"

export default function SalesList() {

    // URL da api
    const url = '/sales'
    const [sales, setSales] = useState<Sale[]>([])

    // Chamando a requisição de lista de vendas
    useEffect(() => {
        /*fetch(url, { method: 'GET' })
            .then((response => response.json()))
            .then((data) => {*/

                // Setando dados mockados
                const data = [
                    {
                        id: 1,
                        description: 'Impressão',
                        totalPrice: 2.5,
                        date: new Date(),
                        paymentMethod: "Dinheiro"
                    },
                    {
                        id: 2,
                        description: '',
                        totalPrice: 0.5,
                        date: new Date(),
                        paymentMethod: "Cartão de Débito"
                    },
                    {
                        id: 3,
                        description: '',
                        totalPrice: 15,
                        date: new Date(),
                        paymentMethod: "Pix"
                    }
                ]

                setSales(data)

                console.log('⚡ [GET] ~ Sales List')
                console.log(data)
            }, [])
            /*.catch((error) => {
                console.error(error.message)
            })
    })*/

    return (
        <div className="p-2">
            {sales.map((sale) => (
                <div key={`sale-${sale.id}`} className="m-2 row card">
                    <div className="card-body">
                        <h5 className="card-title d-flex">
                            <b>R$ {sale.totalPrice?.toFixed(2)}</b>
                        </h5>
                        <h6 className="card-subtitle text-secondary">
                            {sale.paymentMethod}
                        </h6>
                        <p className="card-text mt-2" id={`sale-${sale.id}-itens`}>
                            <span> {sale.description} </span>
                        </p>
                    </div>
                </div>
            ))}
        </div>
    )

}