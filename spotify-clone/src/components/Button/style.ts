import styled from "styled-components";

interface PropsButton {
    background?: string | undefined;
    color?: string | undefined;
}

export const Butto = styled.button<PropsButton>`
  background: ${(props: any) =>
    props.background ? props.background : "rgb(241, 81, 21)"};
    color:${(props: any) =>
        props.color ? props.color : "#fff"};
    font-weight: bold;
    font-size:18px;
    text-transform: uppercase;
    padding:10px 30px;
    border-radius: 50px;
    border:none;

    :hover{
        cursor:pointer;
        transform: scale(1.05);
        transition: transform 0.3s;

    }
`