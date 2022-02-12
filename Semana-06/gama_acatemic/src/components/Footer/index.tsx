import React from "react";
import { FooterStyle } from './style';
import { useSelector } from "react-redux";
import { IGlobalState } from "../../store/modules/user/type";

const Footer: React.FC = () =>{
    const state = useSelector((state:IGlobalState ) => state.users)
    return (
        <div>
            <FooterStyle>
                <p>Footer</p>
                <p>Temos {state.length}</p>
            </FooterStyle>
        </div>
    );
}
export default Footer