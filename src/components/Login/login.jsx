import React from "react"
import { useState } from "react"
import "./login.css"
import { FaUser, FaLock } from "react-icons/fa"
const Login = () => {
    const [userName, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = () => {
        event.preventDefault()

    }


    return (
        <div className="container">
            <form onSubmit={handleSubmit}>
                <h1>Acesso o sistema</h1>
                <div className="input-field">
                    <input placeholder="Email"
                        type="email"
                         required
                         value={userName}
                        onChange={(e) => setUsername(e.target.value)} />
                    <FaUser className="icon" />
                </div>
                <div  className="input-field">
                    <input placeholder="Senha"
                        type="password"
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)} />
                    <FaLock className="icon" />
                </div>
                <div className="recall-forget">
                    <label>
                        <input type="checkbox" />
                        Lembre de mim
                    </label>
                    <a href="#">Esqueceu a senha?</a>
                </div>
                <button type="submit">Entrar</button>
                <div className="signup-link">
                    <p>
                        Não tem conta? <a href="#">Registrar</a>
                    </p>
                </div>
            </form>
        </div>
    )
}
export default Login