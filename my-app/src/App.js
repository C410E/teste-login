import Cadastro from "./cadastro";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Login from "./login";
import Feed from "./feed";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Cadastro />} exact/>
        <Route path="login" element={<Login />}/>
        <Route path="feed" element={<Feed />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
