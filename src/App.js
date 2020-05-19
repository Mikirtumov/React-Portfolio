import React from 'react';
import './App.css';
import Header from "./Header";
import Container from "./Container";
import Footer from "./Footer";
import 'bootstrap/dist/css/bootstrap.css';


function App() {
    // const appVersion = " 0.2.321";
    const topMenu = ["HOME", "ABOUT", "SERVICES", "BLOG", "WORK", "CONTACT"];
    const footerMenu = ["GitHub", "LinkedIn", "Facebook", "Twitter", "Instagram"];
    const myInfo = ["NAME", "PROFILE", "EMAIL", "PHONE"];


    return (
        <div className="App">
            <Header topMenu={topMenu}/>
            <Container myInfo={myInfo}/>
            <Footer footerMenu={footerMenu}/>

        </div>
    );
}

export default App;
