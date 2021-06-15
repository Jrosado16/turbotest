import React, { useContext, useEffect, useState } from 'react';
import logoSvg from '../assets/logo/logo.svg'
import menuSvg from '../assets/icons/menu.svg'
import simboloSvg from '../assets/logo/Simbolo.svg'
import { DataCotext } from '../context/Context';
import leftSvg from '../assets/icons/arrow-left.svg'
import rightSvg from '../assets/icons/arrow-right-blue.svg'
import rightWhiteSvg from '../assets/icons/arrow-right-white.svg'

const Header = () => {
    const { handleMenu } = useContext(DataCotext)
    const [arrayImg ] = useState([
        'Stop_car.jpg',
        'Blue_car.jpg',
        'Rain_car.jpg',
    ])

    let initCar = 'Stop_car.jpg';

    const [ img, setImg ] = useState(initCar)
    const [ counter, setCounter ] = useState(0)

    setTimeout(() => {
        nextHandleImg();
    }, 4000);

    
    const nextHandleImg = () => {

        if(counter < 2){
            let count = counter;
            count++
            setCounter( count);
            let img  = arrayImg[count];
            setImg(img)

        }else{
            setCounter(0)
            setImg(arrayImg[0])
        }

    }  
    const prevHandleImg = () => {
        
        if(counter > 0 ){
            let count = counter;
            count--
            setCounter( count);
            let img  = arrayImg[count];
            setImg(img)
        }else{
            setCounter(2)
            setImg(arrayImg[2])
        }

    }  
    

    return (  

        <div className="hero">
            <div className="content-img">
                <img src={`/assets/img/${img}`}  className={` ? 'active-anim': '' `}/>
            </div>
            <header>
                <div className="logo">
                    <img src={logoSvg} className="logo-svg" alt="" />
                    <img src={simboloSvg} className="logo-simbolo" alt="" />
                </div>
                <div className="navigation">
                    <a>+ 34 722 73 96 22</a>
                    <a>Contacto</a>
                    <div className="nav">
                        <img className="menu" onClick={handleMenu} src={menuSvg} alt="" />
                    </div>
                 </div>
             </header>
             <div className="content-hero">
                 <div className="title">Are you ready for the truth?</div>
                 <p className="description">
                     Well, the way they make shows is, they make one show. 
                     That show's called a pilot.
                 </p>
                 <button>Contactanos <img className="btn-white" src={rightWhiteSvg} /></button>
             </div>
             <div className="action">
                <img src={leftSvg} onClick={prevHandleImg} />
                <span> { counter + 1 } / 3 </span>
                <img src={rightSvg} onClick={nextHandleImg} />
             </div>
        </div>
        // <div className="hero">
        //     
        // </div>
    );
}
 
export default Header;