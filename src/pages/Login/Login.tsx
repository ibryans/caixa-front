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
            <div className="row h-100 align-items-center">
                <div className="col-6 offset-3">
                    <h1>Login</h1>
                    
                    <form onSubmit={submit}>

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