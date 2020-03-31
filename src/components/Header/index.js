import React, { Component } from 'react';
import { HashLink as Link } from 'react-router-hash-link';

class Header extends Component{

    render(){
        return(
             <div className="menu"> 
                 <nav>
                     <ul>
                         <li><Link smooth to="#inicio">Inicio</Link></li>
                         <li><Link smooth to="#sobre">Sobre </Link></li>
                         <li><Link smooth to="#contato">Contato</Link></li>
                     </ul>
                 </nav>
             </div>
        );
    }
}

export default Header;