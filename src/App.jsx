import React from 'react';
import Layout from './components/Layout';
import { DataProvider } from './context/Context';

const App = () => {
    return ( 
        <DataProvider>
            <Layout />
        </DataProvider>
     );
}
 
export default App;