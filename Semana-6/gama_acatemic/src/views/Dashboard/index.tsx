import React  from "react";
import Footer from "../../components/Footer";
import Nav from "../../components/Nav";
import { Container } from "./style";
import { useEffect, useState } from "react";
import api from "../../services/api";
import Loader from "../../components/Loade";

interface ICollaborator{

    id: number;
    name: string;
    email: string;
    photo:{
        path: string;
    }
}




const Dashboard : React.FC = () =>{

    const [data, setData] = useState<ICollaborator[]>([])
    const [isLoadd, setIsLoad] = useState(false)
    const tokem = localStorage.getItem("@gamaServiceToken")?.replace(/[*]/g,'')
useEffect(() =>{
    api.get("collaborator",{

        headers:{
            Authorization:`Bearer ${tokem}`,
        }
    }).then(response =>{
        setIsLoad(true)
        setData(response.data)
    }).finally(() => setIsLoad(false))
},[])
    if(isLoadd){
        return <Loader/>
    }

    return(
        <div>
          
            <div>
            <Nav />
           <Container>
                <h1>  Dashboard</h1>
                <div className="card">

                    {data?.map(el =>(
                        <div key={el.id}>
                            <img src={`https://sistemadeagendamento-san5v.ondigitalocean.app/tmp/uploads/${el.photo.path}`} alt="" />
                            <p>
                                {el.name}
                            </p>
                            <p>{el.email}</p>
                        </div>
                    ))}

                </div>

                </Container>
          
            <Footer />
        </div>
        </div>
    )
}
export default Dashboard