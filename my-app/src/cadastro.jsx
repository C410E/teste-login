import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import "./styles.css";

const Cadastro = () => {
    const [nome, setNome] = useState("");
    const [senha, setSenha] = useState("");
    const [email, setEmail] = useState("");
    const [cadastroSucesso, setCadastroSucesso] = useState(false); 

    const handleCadastro = async () => {
       try {
        const response = await axios.post("http://localhost:3001/cadastro", {
            nome,
            senha,
            email
        });

        console.log("Caddastro realizado com sucesso", response.data)

        if (response.status === 200) {
            setCadastroSucesso(true);
          }
       } catch (error) {
            console.error('Erro ao cadastrar:', error);
       }
    }
    return (
        <div className="cadastro-container">
            <h1 className="form-title">cadastro</h1>
            <form className="cadastro-form">
            {cadastroSucesso && <p className="success-message">Cadastro realizado com sucesso!</p>}

                <label className="input-container">
                
                    <input className="input-style"
                        type="text"
                        value={nome}
                        placeholder="Nome"
                        onChange={(e) => setNome(e.target.value)}
                    />
                </label>
                <br/>
                 <label className="input-container">
                 
                    <input 
                        className="input-style"
                        type="email"
                        placeholder="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </label>
                <br/>
                 <label className="input-container">
                    <input 
                        className="input-style"
                        type="password"
                        value={senha}
                        placeholder="Senha"
                        onChange={(e) => setSenha(e.target.value)}
                    />
                </label>
                <br/>
                <button type="button" onClick={handleCadastro}>
                    Cadastrar
                </button>
            </form>
            <p>
             Já tem conta? faça  <Link to="/login" className="cadastro-form-link">Login</Link>
            </p>
        </div>
    )
}

export default Cadastro;