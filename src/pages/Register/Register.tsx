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
            <div className="vh-100 d-flex align-items-center justify-content-center">
                <div className="card text-center p-5">
                    <h1 className="mb-5">
                        <b>Sistema de Caixa</b>
                    </h1>
                    
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
                        
                        <div className="pt-2 mb-4">
                            <input
                                onChange={changeForm}
                                name="password"
                                type="password"
                                className="form-control"
                                placeholder="Senha"/>
                        </div>

                        <div className="d-grid gap-2 mb-5">
                            <button 
                                type="submit"
                                className="btn btn-outline-primary btn-block">
                                Fazer Cadastro
                            </button>
                        </div>
                        
                    </form>

                    <div className="card-footer pt-3 p-0">
                        <span className="form-text pt-2 mb-4">
                            Já possui um cadastro?
                        </span>
                        <a href="/login" className="text-decoration-none">
                            <div className="mt-3 d-grid gap-2">
                                <button     
                                    className="btn btn-outline-success btn-block">
                                    Entrar
                                </button>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}