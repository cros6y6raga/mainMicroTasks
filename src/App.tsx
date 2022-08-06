import React from 'react';
import './App.css';
import {Header} from './task1/site/Header';
import {Body} from './task1/site/Body';
import {Footer} from './task1/site/Footer';

function App() {
    return (
        <>
            <Header titleForHeader={'NEW HEADER'}/>
            <Body titleForBody={'NEW BODY'}/>
            <Footer titleForFooter={'NEW FOOTER'}/>
        </>
    );
}

export default App;
