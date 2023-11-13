
import { useState } from "react";
import axios from "axios";

const Cadastro = () => {
    const [nome, setNome] = useState("");
    const [senha, setSenha] = useState("");
    const [email, setEmail] = useState("");

    const handleCadastro = async () => {
       try {
        const response = await axios.post("http://localhost:3001/cadastro", {
            nome,
            senha,
            email
        });

        console.log("Caddastro realizado com sucesso", response.data)
       } catch (error) {
            console.error('Erro ao cadastrar:', error);
       }
    }
    return (
        <div>
            <h1>cadastro</h1>
            <form>
                <label>
                    Nome: 
                    <input 
                        type="text"
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}
                    />
                </label>
                <br/>
                 <label>
                    Email: 
                    <input 
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </label>
                <br/>
                 <label>
                    Senha: 
                    <input 
                        type="password"
                        value={senha}
                        onChange={(e) => setSenha(e.target.value)}
                    />
                </label>
                <br/>
                <button type="button" onClick={handleCadastro}>
                    Cadastrar
                </button>
            </form>
        </div>
    )
}

export default Cadastro;