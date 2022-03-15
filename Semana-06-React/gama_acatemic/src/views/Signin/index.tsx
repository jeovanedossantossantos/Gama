
import React, { useCallback, useState, FormEvent } from "react";
import { useHistory, Link } from 'react-router-dom';
import { toast } from "react-toastify";
import Loader from "../../components/Loade";
import api from "../../services/api";

import { Container } from "./style";

interface IDate {
    
   
    email: string;
    
    senha: string;
    
}


const SignIn: React.FC = () => {

    const [data, setDate] = useState<IDate>({} as IDate)
    const [load, setLoad] = useState(false)
    const history = useHistory()

    
    const hadleSumbmit = useCallback((e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setLoad(true)
        
        api.post('session', data).then(
            
            response => {
                const sessionToken = JSON.stringify(response.data.token)
                localStorage.setItem('@gamaServiceToken',sessionToken)
                setLoad(false)
                toast.success("Login realizado com sucesso!", {
                    hideProgressBar: false,
                    onClose: () => history.push('/dashboard')
                })

            }

        ).catch(e => {toast.error("Oops, algo deu errado!")})
            .finally(()=>setLoad(false))
    }, [data, history])
    if (load) {
        return(
            <Loader/>
        )
    }
    return (
        <Container>

            <div className="card">
                <h5>Logar</h5>
                <form onSubmit={hadleSumbmit}>
                    
                    
                   
                   
                    <input
                        type="email"
                        placeholder="Informe seus email"
                        onChange={e => setDate({ ...data, email: e.target.value })}
                    />
                    <input
                        type="password"
                        placeholder="Infomer seu Senha"
                        onChange={e => setDate({ ...data, senha: e.target.value })}
                    />
                   
                    
                    <button type="submit" value="Logar">Logar</button>
                </form>
                <Link to={"/signup"}>Cadastre-se</Link>
            </div>
        </Container>
    );
}
export default SignIn


