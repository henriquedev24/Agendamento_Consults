import "./registry.css"
import logo from "../../assets/logo.png"
import fundo from "../../assets/fundo.png"
import {Link} from "react-router-dom"

function Registry() {
    return <div className="row">
        <div className="sm:col-span-5 flex justify-center items-center text-center">
            <form className="form-login">
                <img src={logo} className="logo mb-4"/>
                <h5 className="mb-5">Crie sua conta.</h5>
                <h5 className="mb-4 text-secondary">preencha os campos abaixo.</h5>

                <div className="mt-4">
                    <input type="text" placeholder="Nome" className="form-control"/>
                </div>
                <div className="mt-2">
                    <input type="email" placeholder="Email" className="form-control"/>
                </div>
                <div className="mt-2">
                    <input type="password" placeholder="Senha" className="form-control"/>
                </div>
                <div className="mt-3 mb-5">
                    <button className="btn btn-primary w-100">Criar conta</button>
                </div>
                <div>
                    <span className="mr-1">Já tenho conta.</span>
                    <Link to={"/login"}>Acessar conta!</Link>
                </div>
            </form>
            
        </div>

        <div className="sm:col-span-7">
            <img src={fundo} className="background"/>
        </div>
        </div>
}

export default Registry;