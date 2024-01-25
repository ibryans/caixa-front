import axios from "axios";
import { useState } from "react"
import { SubmitHandler, useForm } from "react-hook-form"
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom"

type RegisterInputs = {
    name: string;
    document: string;
    email: string;
    password: string;
}

export default function Register() {

    const navigate = useNavigate();
    const [error, setError] = useState([]);
    const { register, handleSubmit } = useForm<RegisterInputs>();

    // Requisição de cadastro
    const registerMutation = useMutation(async (data: RegisterInputs) => { 
        return await axios.post(
            'http://localhost:3000/users', data
        ).then(() => {
            navigate('/login')
            setError([])
        }).catch(err => {
            setError(err.response.data.message)
        })
    })

    // Evento de submit do formulário (chama a req)
    const submit: SubmitHandler<RegisterInputs> = (data: RegisterInputs) => {
        console.log('[REGISTER] ~ Conteúdo do formulário')
        console.log(data)
        registerMutation.mutate(data)
    }

    return (
        <div className="container">
            <div className="vh-100 d-flex align-items-center justify-content-center">
                <div className="card text-center p-5">
                    <h1 className="mb-5">
                        <b>Sistema de Caixa</b>
                    </h1>
                    
                    <form onSubmit={handleSubmit(submit)}>

                        <div className="pt-2">
                            <input
                                {...register("name")} 
                                name="name"
                                type="text"
                                className="form-control"
                                placeholder="Nome do comércio"/>
                        </div>

                        <div className="pt-2">
                            <input
                                {...register("document", { required: true })}
                                name="document"
                                type="text"
                                className="form-control"
                                placeholder="CPF / CNPJ"/>
                        </div>

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
                            {error.length > 0 && error.map(e => (
                                <small key={e} className="text-danger">
                                    { e } <br/>
                                </small>
                            ))}
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