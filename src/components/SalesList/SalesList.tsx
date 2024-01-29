import { useQuery } from "react-query"
import { Sale } from "../../models/Sales";
import { PaymentMethod } from "../../models/PaymentMethods";
import { api } from "../../services/api";
import './SalesList.css'

export function SalesList() {

    // Chamando a requisição de lista de vendas
    const { data: sales, isFetching: salesLoading } = useQuery<Sale[]>('sales', async () => {
        let user;
        const logged = localStorage.getItem('loggedUser');
        if (logged) user = JSON.parse(logged)
        const response = await api.get(`/sales?user=${user.id}`)
        return response.data
    }, {
        refetchInterval: 1000 * 60 // 1 minuto
    })

    // Pegando os méteodos de pagamento
    const { data: payment_methods, isFetching: paymentMethosLoading } = useQuery<PaymentMethod[]>('payment_methods', async () => {
        const response = await api.get(`/payment-method`)
        return response.data
    }, {
        refetchOnWindowFocus: false
    })

    return (
        <div className="p-2">

            { (salesLoading) && Array.from({length: 5}, (_,i) => (
                <div key={i} className="m-2 row card placholder-glow fade-in">
                    <div className="card-body">
                        <h5 className="card-title placeholder-glow d-flex">
                            <span className="placeholder col-2"></span>
                        </h5>
                        <h6 className="card-subtitle placeholder-glow text-secondary">
                            <span className="placeholder col-2"></span>
                        </h6>
                        <p className="card-text mt-2 placeholder-glow">
                            <span className="placeholder col-6"> </span>
                        </p>
                    </div>
                </div>
            ))}

            {(!salesLoading) && sales?.map((sale) => (
                <div key={`sale-${sale.id}`} className="m-2 row card fade-in">
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