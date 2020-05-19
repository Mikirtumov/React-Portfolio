import React from "react";

function Container(props) {
    return (
        <div className='app-container'>
            <div className="container-fluid">
                <div className="col-sm-6 col-md-7">
                <div className="about-info">
                    <p><span className="title-s">Name: </span> <span>Morgan Freeman</span></p>
                    <p><span className="title-s">Profile: </span> <span>full stack developer</span></p>
                    <p><span className="title-s">Email: </span> <span>contact@example.com</span></p>
                    <p><span className="title-s">Phone: </span> <span>(617) 557-0089</span></p>
                </div>
            </div>
            </div>
        </div>
    );
}

export default Container;
