import styled from "styled-components";

export const Container = styled.div`
.preto{
    background:#000
}
.menu {
    background: black;
    height: 10vh;
  }
  
  .menu .wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    padding: 20px;
  }
  
  .menu div img {
  
  }
  
  .menu nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
  }
  
  .menu nav a {
    font-size: 14px;
    font-weight: bold;
    text-decoration: none;
    color: #fff;
  }
  
  .menu nav a:hover {
    color: #1ed760;
  }
    .mobile{
        display:none;
    }
    .web{
      display:block;
  }
    @media (max-width: 768px){
        .mobile{
            display:block;
        }
        .web{
            display:none;
        }
    }
`