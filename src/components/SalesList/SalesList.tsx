import axios from "axios"
import { useQuery } from "react-query"

interface Sale {
    id: number,
    user_id: number,
    payment_method_id: number,
    description: string,
    price: number,
    created_at: Date,
}

interface PaymentMethod {
    id: number,
    description: string
}

const reqConfig = { 
    headers: {
        Authorization: `Bearer ${localStorage.getItem('accessToken')}`
    }
}

export function SalesList() {

    // URL da api
    const url = 'http://localhost:3000'

    // Chamando a requisição de lista de vendas
    const { data: sales, isFetching: salesLoading } = useQuery<Sale[]>('sales', async () => {
        const response = await axios.get(`${url}/sales`, reqConfig)
        console.log('⚡ [GET] ~ Sales List')
        return response.data
    }, {
        refetchInterval: 1000 * 60 // 1 minuto
    })

    // Pegando os méteodos de pagamento
    const { data: payment_methods, isFetching: paymentMethosLoading } = useQuery<PaymentMethod[]>('payment_methods', async () => {
        const response = await axios.get(`${url}/payment-method`, reqConfig)
        console.log('⚡ [GET] ~ Payment Methods List')
        return response.data
    }, {
        refetchOnWindowFocus: false
    })

    return (
        <div className="p-2">

            { (salesLoading || paymentMethosLoading) && 
                <div className="d-flex justify-content-center">
                    <div className="spinner-border m-3" role="status"/>
                </div>
            }

            {sales?.map((sale) => (
                <div key={`sale-${sale.id}`} className="m-2 row card">
                    <div className="card-body">
                        <h5 className="card-title d-flex">
                            <b>R$ {sale.price.toFixed(2)}</b>
                        </h5>
                        <h6 className="card-subtitle text-secondary">
                            { payment_methods?.find((p) => p.id == sale.payment_method_id)?.description}
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