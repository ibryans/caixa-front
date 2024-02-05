import { useState } from "react"
import { SubmitHandler, useForm } from "react-hook-form"
import { useMutation } from "react-query"
import axios from "axios"

type LoginInputs = {
    email: string;
    password: string;
}

export default function Login() {

    const [error, setError] = useState(null);
    const { register, handleSubmit } = useForm<LoginInputs>();

    // Requisição de login
    const loginMutation = useMutation(async (credentials: LoginInputs) => {
        return await axios.post('http://localhost:3000/auth/login', credentials)
            .then(res => {
                const { accessToken, user } = res.data;
                localStorage.setItem('accessToken', accessToken)
                localStorage.setItem('loggedUser', JSON.stringify(user))
                window.location.replace('/');
            })
            .catch(err => {
                setError(err.response.data.message)
            })
    })
    
    // Evento de submit (chama a req)
    const submit: SubmitHandler<LoginInputs> = (data: LoginInputs) => loginMutation.mutate(data)

    return (
        <div className="bg-primary">
            <div className="container">
                <div className="vh-100 d-flex justify-content-center align-items-center">
                    <div className="card text-center p-5">

                        <h1 className="mb-5 text-center">
                            <b>Controle de Caixa</b>
                        </h1>
                        
                        <form onSubmit={handleSubmit(submit)}>

                            <div className="pt-2">
                                <input
                                    {...register("email", { required: true })}
                                    name="email"
                                    type="email"
                                    className="form-control"
                                    placeholder="E-mail"/>
                            </div>
                            
                            <div className="pt-2">
                                <input
                                    {...register("password", { required: true })}
                                    name="password"
                                    type="password"
                                    className="form-control"
                                    placeholder="Senha"/>
                            </div>

                            <div className="pt-2 pb-4">
                                {error && ( 
                                    <small className="text-danger">
                                        { error }
                                    </small>
                                )}
                            </div>

                            <div className="d-grid gap-2">
                                <button 
                                    type="submit"
                                    className="btn btn-outline-success btn-block">
                                    {loginMutation.isLoading
                                        ? <div className="spinner-border spinner-border-sm" role="status"/>
                                        : 'Entrar'
                                    }
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
        </div>
    )
}