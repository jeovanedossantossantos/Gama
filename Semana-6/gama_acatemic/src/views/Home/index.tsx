import React, { useState } from "react";
import { Container } from "./style";
import { Link } from "react-router-dom";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
const Home: React.FC = () => {

    const [isLoad, setIsLoad] = useState(true)
    return (
        <>
            <Nav />
            <Container>
                <div>

                    <h1>Home </h1>

                </div>
            </Container>
            <Footer />
        </>
    )

}
export default Home