import { useState } from "react"


export default function Login() {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const submit = (event: any) => {
        event.preventDefault()
        alert(event)
    }

    return (
        <div className="container">
            <div className="row h-100 align-items-center">
                <div className="col-6 offset-3">
                    <h1>Login</h1>
                    
                    <form onSubmit={submit}>

                        <div className="pt-2">
                            <input
                                onChange={(event) => setEmail(event.target.value)}
                                value={email}
                                type="email"
                                className="form-control"
                                placeholder="E-mail"/>
                        </div>
                        
                        <div className="pt-2 pb-2">
                            <input
                                onChange={(event) => setPassword(event.target.value)}
                                value={password}
                                type="password"
                                className="form-control"
                                placeholder="Senha"/>
                        </div>

                        <div className="d-grid gap-2">
                            <button 
                                type="submit"
                                className="btn btn-outline-primary btn-block"
                                disabled={!(email && password)}>
                                Enviar
                            </button>
                        </div>
                        
                    </form>
                </div>
            </div>
        </div>
    )
}