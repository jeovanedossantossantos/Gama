import { BrowserRouter, Routes as RoutesWrapper, Route } from 'react-router-dom'
import Home from './pages/Home'
import { Sobre } from './pages/Sobre'
function Routes() {

    return (
        <BrowserRouter>
            <RoutesWrapper>
                <Route path="/" element={<Home/>}/>
                <Route path="/sobre" element={<Sobre/>}/>
            </RoutesWrapper>

        </BrowserRouter>
    )

}

export default Routes