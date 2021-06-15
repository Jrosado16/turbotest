import React, { useEffect, useRef, useState } from 'react';
import red02 from '../assets/img/Red02_car.jpg'
import whiteCard from '../assets/img/White_car.jpg'
import cardJson from '../car.json'

let elementOffset = 0;

const Content = () => {
    const [card, setCar] = useState([])
    const [ active, setActive] = useState(true);
    const [ isSticky, setSticky ] = useState(false);
    const navBarEl = useRef(null);

    const handleActive = (active) => {
        setActive(active)
    }

    const initSticky =() => setTimeout(() => {
        if (window.pageYOffset >= elementOffset) {
            setSticky(true);
        } else {
            setSticky(false);
        }
    }, 500); 

    useEffect(() => {
        setCar(cardJson.card);
        const navbar = navBarEl.current;
        elementOffset = navbar.offsetTop;

        window.addEventListener('scroll', initSticky);

    }, [])
    
    

    return ( 
        <div className="content">
        <div className={`nav-container ${isSticky ? 'sticky' : ''}`} ref={navBarEl}>
            <div className="container">
                <div className="nav">
                    <a href="#she" 
                        className={ active ? 'active': '' }
                        onClick={ () => handleActive(true)}
                    >
                        Yes or No
                    </a>
                    <a href="#hold" 
                        className={ active ? '': 'active' }
                        onClick={() => handleActive(false)}
                    >
                        Hold
                    </a>
                </div>
            </div>
        </div>

        <div id="she" className="she-container">
            <div className="container">
                <div className="title">
                    Is she dead, yes or no?
                </div>
                <p className="description">
                    Well, the way they make shows is, they make one show. 
                    That show's called a pilot. Then they show that show to the 
                    people who make shows, and on the strength of that one show 
                    they decide if they're going to make more shows. Some pilots 
                    get picked and become television programs. Some don't, become nothing. 
                    She starred in one of the ones that became nothing.
                </p>
            </div>
        </div>
        <div className="car-content">
            {
                card.map(c => (
                    <div className="card" key={c.id}>
                        <img src={c.img} alt="" />
                        <div className="description">
                            {c.title}
                        </div>
                    </div>
                ))
            }
        </div>
        

        <div id="hold" className="hold-container">
            <div className="container">
                <div className="info">
                    <div className="title">
                        Hold on to your butts
                    </div>
                    <div className="description">
                        Well, the way they make shows is, <span className="mark">they make one show.</span> That show's called a pilot. Then they show that show to the people who make shows, and on the strength of that one show they decide if they're going to make more shows. Some pilots get picked and become television programs. Some don't, become nothing. She starred in one of the ones that became nothing.
                    </div>
                    <button>
                        Conocenos
                    </button>
                </div>
                <img src={red02} alt="" />
            </div>
            <div className="container hold-2">
                <img src={whiteCard} alt="" />

                <div className="info">
                    <div className="description">
                        Well, the way they make shows is, <span className="mark">they make one show.</span> That show's called a pilot. Then they show that show to the people who make shows, and on the strength of that one show they decide if they're going to make more shows. Some pilots get picked and become television programs. Some don't, become nothing. She starred in one of the ones that became nothing.
                    </div>
                    <button>
                        Conocenos
                    </button>
                </div>
            </div>
        </div>
    </div>
     );
}
 
export default Content;