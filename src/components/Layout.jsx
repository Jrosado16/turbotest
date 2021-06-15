import React, { useContext } from 'react';
import Header from './Header'
import Content from './Content'
import Footer from './Footer'
import Aside from './Aside'
import { DataCotext } from '../context/Context';



const Layout = () => {
    const { menu } = useContext(DataCotext)

    return ( 
        <div className="my-container">
            <div className={`${menu ? 'hidden-body' : ''} body`}>
                <Header />
                <Content />
                <Footer />
            </div>
            <Aside />
        </div>
    );
}
 
export default Layout;