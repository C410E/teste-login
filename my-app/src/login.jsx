import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Login = () => {
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("")
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
    
        try {
          const response = await axios.post('http://localhost:3001/login', {
            email,
            senha,
          });

          // const token = response.data.token;
          // localStorage.setItem('token', token);
          

          console.log(response.data.token)
    
          if (response.status === 200) {
           
            navigate('/feed');
          } else {
           
            console.error('Login falhou');
          }
        } catch (error) {
          console.error("login falhouCatch", error)
    }
}        
    return(
       
        <div>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <label>
          Email:
          <input
            type="email"
            placeholder="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <br />
        <label>
          Senha:
          <input
            type="password"
            placeholder="senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
          />
        </label>
        <br />
        <button onClick={handleLogin} type="submit">Login</button>
      </form>
      <p>não tem conta? faça o cadastro em 
        <Link to="/">
          cadastro
        </Link>
      </p>
    </div>
    )
}

export default Login