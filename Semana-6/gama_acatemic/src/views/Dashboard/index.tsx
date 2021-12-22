import React from "react";
import Footer from "../../components/Footer";
import Nav from "../../components/Nav";
import { Container } from "../Home/style";

const Dashboard : React.FC = () =>{
    return(
        <div>
          
            <div>
            <Nav />
           <Container>
                <h1>  Dashboard</h1>

                </Container>
          
            <Footer />
        </div>
        </div>
    )
}
export default Dashboard