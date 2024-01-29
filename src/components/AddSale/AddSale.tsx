import { useState } from "react"
import { CurrencyInput } from "react-currency-mask"
import { useForm } from "react-hook-form";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { SaleInputs } from "../../models/Sales";
import { PaymentMethod } from "../../models/PaymentMethods";
import { api } from "../../services/api";


export function AddSale() {

    // TODO: Adicionar um 'toast' para mostrar erro ou sucesso

    const { register, handleSubmit, setValue } = useForm<SaleInputs>();
    const [error, setError] = useState(null)
    const queryClient = useQueryClient()

    // Requisição para métodos de pagamento
    const { data: payment_methods } = useQuery<PaymentMethod[]>('payment_methods', async () => {
        const response = await api.get('payment-method')
        return response.data
    })

    // Requisição que adiciona uma venda
    const saleMutation = useMutation((data: any) => api.post('/sales', data)
        .then(() => { 
            queryClient.invalidateQueries('sales')
            setError(null)
        })
        .catch(err => { 
            setError(err.response.data.message)
        }))

    // Evento de submit (chama a req)
    const submit = (data: any) => {
        let user;
        const logged = localStorage.getItem('loggedUser');
        if (logged) user = JSON.parse(logged)

        const sale = { 
            ...data,
            payment_method_id: +data.payment_method_id,
            user_id: user.id
        }
        saleMutation.mutate(sale);
        console.log('⚡ [POST] ~ Add Sale')
    }

    return (
        <div className="bg-white card m-3">
            <form className="row p-3 pb-0">
                <div className="col-12 mb-3">
                    <h5>Nova venda</h5>
                </div>
                <div className="col">
                    <div className="input-group">
                        <span className="input-group-text" id="basic-addon1">
                            R$
                        </span>

                        <CurrencyInput
                            onChangeValue={(_, price) => setValue('price', +price)}
                            hideSymbol={true}
                            InputElement={ <input className="form-control" placeholder="Valor"/> }
                        />
                    </div>
                </div>

                <div className="col">
                    <select
                        {...register("payment_method_id")}
                        className="form-select" 
                        aria-label="Método de pagamento"
                        placeholder="Método de pagamento">
                        {payment_methods?.map((method: PaymentMethod) => (
                            <option key={method.id} value={+method.id}>
                                { method.description }
                            </option>
                        ))}
                    </select>
                </div>

                <div className="col">
                    <input 
                        {...register("description")}
                        name="description"
                        type="text" 
                        className="form-control" 
                        placeholder="Descrição" 
                        aria-label="Descriçao"/>
                </div>
            </form>
            <div className="d-grid gap-2 p-3">
                <button onClick={handleSubmit(submit)} className="btn btn-primary" type="button">
                    <i className="bi bi-plus-circle p-2"></i>
                    Adicionar
                </button>
            </div>
        </div>
    )
}