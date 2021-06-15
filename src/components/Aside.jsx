import React, { useContext } from 'react';
import { DataCotext } from '../context/Context';
import simboloSvg from '../assets/logo/Simbolo.svg'
import closeSvg from '../assets/icons/close.svg'

const Aside = () => {
    const { handleMenu, menu } = useContext(DataCotext)

    return ( 
        <aside className={`${menu ? 'show-menu' : ''} `}>
            <div className="menu">
                <div className="menu-head">
                    <div className="logo">
                        <img src={simboloSvg} alt="" />
                    </div>
                    <div className="action">
                        <img onClick={handleMenu} src={closeSvg} alt="" />
                    </div>
                    
                </div>
                <div className="navigation">
                    <a>Home</a>
                    <a>Recomendaciones</a>
                    <a>La Agencia</a>
                    <a>Contacto</a>
                </div>
            </div>
        </aside>
     );
}
 
export default Aside;