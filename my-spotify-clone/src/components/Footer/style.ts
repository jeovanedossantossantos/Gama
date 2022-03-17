import styled from "styled-components";

export const FooterStyle = styled.footer`
background-color: black;

.wrapper{
    display: flex;
    flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-start;
  padding: 50px;
}
.redes{
    display: flex;
  gap: 20px;
}
@media (max-width: 481px){
    margin:auto;
    
    .logo{
        width:210px;
        
        margin: 10px
    }
    .wrapper{
        width:100%;
        
    }
    .redes{
        width:250px;
    }
}
`