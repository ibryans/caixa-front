import axios from "axios";
import { useState } from "react"
import { CurrencyInput } from "react-currency-mask"
import { useForm } from "react-hook-form";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { SaleInputs } from "../../models/Sales";
import { PaymentMethod } from "../../models/PaymentMethods";
import { reqConfig } from "../../services/queryClient";


export function AddSale() {

    const { register, handleSubmit, setValue } = useForm<SaleInputs>();
    // const [error, setError] = useState(null)
    const queryClient = useQueryClient()

    // Requisição para métodos de pagamento
    const { data: payment_methods } = useQuery<PaymentMethod[]>('payment_methods', async () => {
        const response = await axios.get('http://localhost:3000/payment-method', reqConfig)
        return response.data
    })

    // Requisição que adiciona uma venda
    const saleMutation = useMutation((data: any) => axios.post(
        'http://localhost:3000/sales', 
        data, 
        reqConfig
    ).then(res => { 
        console.log(res.data)
        queryClient.invalidateQueries('sales')
    }).catch(err => { 
        console.log(err.response) 
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
                <div className="input-group col">
                    <span className="input-group-text" id="basic-addon1">
                        R$
                    </span>

                    <CurrencyInput
                        onChangeValue={(_, price) => setValue('price', +price)}
                        hideSymbol={true}
                        InputElement={ <input className="form-control" placeholder="Valor"/> }
                    />
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