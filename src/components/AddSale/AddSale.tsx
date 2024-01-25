import axios from "axios";
import { useState } from "react"
import { CurrencyInput } from "react-currency-mask"
import { useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "react-query";

type SaleInputs = {
    user_id: number;
    payment_method_id: number;
    price: number;
    description: string;
}

const reqConfig = {
    headers: {
        Authorization: `bearer ${localStorage.getItem('accessToken')}`
    }
}

export function AddSale() {

    const { register, handleSubmit, setValue } = useForm<SaleInputs>();
    const [error, setError] = useState(null)

    const queryClient = useQueryClient()

    // Requisição que adiciona uma venda
    const saleMutation = useMutation((data: any) => 
        axios.post('http://localhost:3000/sales', data, reqConfig)
        .then(res => { 
            console.log(res.data)
            queryClient.invalidateQueries('sales')
        })
        .catch(err => { console.log(err.response) }))

    // Evento de submit (chama a req)
    const submit = (data: any) => {
        const logged = localStorage.getItem('loggedUser');
        let user;
        if (logged) user = JSON.parse(logged)

        const sale = { 
            ...data,
            payment_method_id: +data.payment_method_id,
            user_id: user.id
        }

        saleMutation.mutate(sale);
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

                {/* TODO: Chamar a requisição de métodos de pagamento e substituir o select/options */}
                <div className="col">
                    <select
                        {...register("payment_method_id")}
                        name="paymentMethod" 
                        className="form-select" 
                        aria-label="Método de pagamento"
                        defaultValue={""}>
                        <option value="0" disabled>Pagamento</option>
                        <option value={"1"}>Dinheiro</option>
                        <option value={"2"}>Pix</option>
                        <option value={"3"}>Cartão de Crédito</option>
                        <option value={"4"}>Cartão de Débito</option>
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