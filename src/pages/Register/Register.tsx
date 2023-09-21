import { useState } from "react"
import { useNavigate } from "react-router-dom"

export default function Register() {

    const navigate = useNavigate()

    const [form, setForm] = useState({
        name: "",
        document: "",
        email: "",
        password: "",
        phone: ""
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
        navigate("/login")
    }

    return (
        <div className="container">
            <div className="row h-100 align-items-center">
                <div className="col-6 offset-3">
                    <h1>Cadastro</h1>
                    
                    <form onSubmit={submit}>

                        <div className="pt-2">
                            <input
                                onChange={changeForm}
                                name="name"
                                type="text"
                                className="form-control"
                                placeholder="Nome do comércio"/>
                        </div>

                        <div className="pt-2">
                            <input
                                onChange={changeForm}
                                name="document"
                                type="text"
                                className="form-control"
                                placeholder="CPF / CNPJ"/>
                        </div>

                        <div className="pt-2">
                            <input
                                onChange={changeForm}
                                name="phone"
                                type="tel"
                                className="form-control"
                                placeholder="Telefone"/>
                        </div>

                        <div className="pt-2">
                            <input
                                onChange={changeForm}
                                name="email"
                                type="email"
                                className="form-control"
                                placeholder="E-mail"/>
                        </div>
                        
                        <div className="pt-2 pb-1">
                            <input
                                onChange={changeForm}
                                name="password"
                                type="password"
                                className="form-control"
                                placeholder="Senha"/>
                        </div>

                        <div className="d-grid gap-2">
                            <button 
                                type="submit"
                                className="btn btn-outline-primary btn-block">
                                Enviar
                            </button>
                        </div>
                        
                    </form>
                </div>
            </div>
        </div>
    )
}