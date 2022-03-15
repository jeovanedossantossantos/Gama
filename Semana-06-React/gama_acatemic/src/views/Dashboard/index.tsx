import React from "react";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer";
import Nav from "../../components/Nav";
import { Container } from "./style";
import { useEffect, useState } from "react";
import api from "../../services/api";
import Loader from "../../components/Loade";
import {useDispatch} from "react-redux"
import addNewUser from '../../store/modules/user/action';


interface ICollaborator {

    id: number;
    name: string;
    email: string;
    photo: {
        path: string;
    }
}




const Dashboard: React.FC = () => {

    const [data, setData] = useState<ICollaborator[]>([])
    const [isLoadd, setIsLoad] = useState(false)
    const tokem = localStorage.getItem("@gamaServiceToken")?.replace(/[*]/g, '')
    
    const dispach = useDispatch();;



    useEffect(() => {
        api.get("collaborator", {

            headers: {
                Authorization: `Bearer ${tokem}`,
            }
        }).then(response => {
            setIsLoad(true)
            setData(response.data)
        }).finally(() => setIsLoad(false))
    }, [tokem])

    useEffect(()=>{
        data?.map(user => dispach((addNewUser(user))))
    },[data, dispach])
    if (isLoadd) {
        return <Loader />
    }

    return (
        <div>

            <div>
                <Nav />
                <Container>

                    <div className="wrapper">
                        <h1>  Dashboard</h1>

                        <div>
                            {/* {data?.map(el => (
                                <div key={el.id}>
                                    <img src="https://www.blogcitario.blog.br/wp-content/uploads/2018/05/Banco-de-imagem-free-pessoas-negras.jpg" alt="" width="100px" height="100px" />
                                    <p>
                                       Nome: {el.name}
                                    </p>
                                    <p>Email: {el.email}</p>
                                </div>
                            ))} */}

                            <div className="card">
                                <img src="https://www.blogcitario.blog.br/wp-content/uploads/2018/05/Banco-de-imagem-free-pessoas-negras.jpg" alt="" width="100px" height="100px" />

                                <div className="informe">
                                    <p>
                                        Nome: Fabiama
                                    </p>
                                    <p>Email: fabianaandrade@gmail.com</p>

                                </div>

                            </div>

                            <div className="card">
                                <img src="https://www.blogcitario.blog.br/wp-content/uploads/2018/05/Banco-de-imagem-free-pessoas-negras.jpg" alt="" width="100px" height="100px" />

                                <div className="informe">
                                    <p>
                                        Nome: Fabiama
                                    </p>
                                    <p>Email: fabianaandrade@gmail.com</p>

                                </div>

                            </div>

                        </div>

                            <Link to="/">Home</Link>
                    </div>

                </Container>

                <Footer />
            </div>
        </div>
    )
}
export default Dashboard