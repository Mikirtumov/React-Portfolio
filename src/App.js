import React from 'react';
import './App.css';
import Header from "./Header";
import Container from "./Container";
import Footer from "./Footer";
import 'bootstrap/dist/css/bootstrap.css';





function App() {
    const appVersion = " 0.2.321";
    const topMenu = ["HOME", "ABOUT", "SERVICES", "BLOG", "WORK", "CONTACT"];
    const footerMenu = ["facebook","github","linkedin"];



    return (
        <div className="App">
            <Header topMenu={topMenu}/>
            <Container v={appVersion}/>
            <Footer footerMenu={footerMenu}/>

        </div>
    );
}

export default App;
