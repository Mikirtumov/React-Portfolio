import React from 'react';
import Logo from "./Logo";
import TopMenuItem from "./topMenuItem";

function Header(props) {
    return (
        <div className='app-header'>
            <nav className="navbar navbar-expand-md navbar-light bg-light sticky-top">
                <div className="class container-fluid">
                    <a href="#" className="navbar-brand"><Logo/></a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navRes">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navRes">
                        <ul className="navbar-nav ml-auto">
                            {props.topMenu.map(el => <TopMenuItem key={el} item={el}/>)}
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Header;
