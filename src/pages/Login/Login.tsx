import { useState } from "react"
import { useNavigate } from "react-router-dom"


export default function Login() {

    const navigate = useNavigate()

    const [form, setForm] = useState({
        email: "",
        password: "",
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
        navigate("/home")
    }

    return (
        <div className="container">
            <div className="vh-100 d-flex justify-content-center align-items-center">
                <div className="card text-center p-5">

                    <h1 className="mb-5 text-center">
                        <b>Sistema de Caixa</b>
                    </h1>
                    
                    <form onSubmit={submit}>

                        <div className="pt-2">
                            <input
                                onChange={changeForm}
                                name="email"
                                type="email"
                                className="form-control"
                                placeholder="E-mail"/>
                        </div>
                        
                        <div className="pt-2 pb-4">
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
                                className="btn btn-outline-success btn-block">
                                Entrar
                            </button>
                        </div>
                        
                    </form>

                    <a href="/register" className="form-text pt-2 mb-4">
                        Esqueceu sua senha?
                    </a>

                    <div className="card-footer pt-2 p-0">
                        <a href="/register" className="text-decoration-none">
                            <div className="mt-3 d-grid gap-2">
                                <button     
                                    className="btn btn-outline-primary btn-block">
                                    Fazer Cadastro
                                </button>
                            </div>
                        </a>
                    </div>
                </div>

            </div>
        </div>
    )
}