import React, { useState, useCallback, FormEvent } from "react";
import { Link } from "react-router-dom";
import { Container } from "./style";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";

const Cursos: React.FC = () => {

    return (

        <div>
            <Nav />
            <Container>
                <h1>Cursos</h1>


            </Container>
            <Footer />
        </div>
    )
}

export default Cursos