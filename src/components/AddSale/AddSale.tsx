import { useState } from "react"

export default function AddSale() {

    const [form, setForm] = useState({
        value: 0,
        paymentMethod: '',
        description: ''
    })

    const changeForm = (event: any) => {
        const {name, value} = event.target
        setForm((prevForm) => ({
           ...prevForm,
           [name]: value 
        }))
    }

    const submit = (event: any) => {
        event.preventDefault()
        console.log(form)
    }

    return (
        <div className="bg-white card m-3">
            <form className="row p-3 pb-0">
                <div className="col-12 mb-3">
                    <h5>Nova venda</h5>
                </div>
                <div className="col">
                    <input
                        onChange={changeForm}
                        name="value"
                        type="number" 
                        className="form-control" 
                        placeholder="Valor" 
                        aria-label="Valor"/>
                </div>
                <div className="col">
                    <select
                        onChange={changeForm}
                        name="paymentMethod" 
                        className="form-select" 
                        aria-label="Método de pagamento"
                        defaultValue={""}>
                        <option value="" disabled>Pagamento</option>
                        <option value="Dinheiro">Dinheiro</option>
                        <option value="Cartão">Cartão</option>
                        <option value="Pix">Pix</option>
                    </select>
                </div>
                <div className="col">
                    <input 
                        onChange={changeForm}
                        name="description"
                        type="text" 
                        className="form-control" 
                        placeholder="Descrição" 
                        aria-label="Descriçao"/>
                </div>
            </form>
            <div className="d-grid p-3">
                <button onClick={submit} className="btn btn-primary" type="button">
                    <i className="bi bi-plus-circle p-2"></i>
                    Adicionar
                </button>
            </div>
        </div>
    )
}