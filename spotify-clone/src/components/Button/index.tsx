import React from "react";
import { Butto } from "./style";

interface PropsButton{
    text: string | undefined;
    background:string | undefined;
    color:string | undefined;
}

export default function Button(props: PropsButton){
    return(
        <Butto background={props.background} color={props.color}>
            {props.text}
        </Butto>
    )
}