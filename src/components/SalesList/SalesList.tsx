import { useQuery, useQueryClient } from "react-query"
import { Sale } from "../../models/Sales";
import { PaymentMethod } from "../../models/PaymentMethods";
import { api } from "../../services/api";
import './SalesList.css'
import { useEffect, useState } from "react";
import { DateFilter } from "../DateFilter";

export function SalesList() {

    const queryClient = useQueryClient()
    const [date, setDate] = useState(new Date().toLocaleDateString())
    const logged = localStorage.getItem('loggedUser') || '';
    const user = JSON.parse(logged)
    
    // Sempre que mudar a data, invalidar a query
    useEffect(() => {
        queryClient.invalidateQueries('sales')
    }, [date])

    const changeDate = (diff: number) => {
        const newDate = new Date(date)
        newDate.setDate(newDate.getDate() + diff)
        setDate(() => newDate.toLocaleDateString())
    }

    // Chamando a requisição de lista de vendas
    const { data: sales, isFetching: isLoading } = useQuery<Sale[]>('sales', async () => {
        const response = await api.get(`/sales?user=${user.id}&date=${date}`)
        return response.data
    }, {
        refetchInterval: 1000 * 60 // 1 minuto
    })

    // Pegando os méteodos de pagamento
    const { data: payment_methods } = useQuery<PaymentMethod[]>('payment_methods', async () => {
        const response = await api.get(`/payment-method`)
        return response.data
    }, {
        refetchOnWindowFocus: false
    })

    return (
        <>
            <DateFilter date={date} changeDate={changeDate}/>
        
            <div className="p-2">        
                { (isLoading) 
                    ? Array.from({length: 3}, (_,i) => (
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
                    ))

                    : sales?.length == 0 
                        ?   <span className='p-4 d-flex justify-content-center text-muted'> 
                                Nenhuma venda encontrada 
                            </span> 
                        :   sales?.map((sale) => (
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
                            ))
                }
            </div>
        </>
    )

}