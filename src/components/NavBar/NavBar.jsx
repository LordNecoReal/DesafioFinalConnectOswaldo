import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
// Import dos componentes
import Inicio from "../Inicio/inicio"
import AcoesDaConnect from '../AcoesDaConnect/AcoesDaConnect'
import QuemSomos from '../QuemSomos/QuemSomos'
import Perfil from '../Perfil/Perfil'
//Importar Imagens
import Logo from '../../assets/logo.png'
import ImgPerfil from '../../assets/perfil.jpg'
function NavBar(){
    return(
        <>
            <nav>
                <img src={Logo} alt="" />
                <ul>
                    <li>Inicio</li>
                    <li>Ações da Connect</li>
                    <li>Quem Somos</li>
                </ul>
                <img src={ImgPerfil} alt="" />
            </nav>
        </>
    )



}
export default NavBar