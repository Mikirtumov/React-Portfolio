import React from "react";
import myImg from "./Img/IMG_5107.JPG";
import "./CSS/Container.css";

function Container(props) {
    return (
        <div className='app-container'>

            <div class="container">
                <div class="row">
                    <div class="col-sm-12">
                        <div class="box-shadow-full">
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="row">
                                        <div class="col-sm-6 col-md-5">
                                            <div class="about-img">
                                                <img src={myImg} className="img-fluid rounded b-shadow-a" alt="Sergo"/>
                                            </div>
                                        </div>
                                        <div class="col-sm-6 col-md-7">
                                            <div class="about-info">
                                                <p><span class="title-s">{props.myInfo[0]}: </span> <span>Sergo Mikirtumov</span>
                                                </p>
                                                <p><span class="title-s">{props.myInfo[1]}: </span> <span>Full stack developer</span>
                                                </p>
                                                <p><span class="title-s">{props.myInfo[2]}: </span>
                                                    <span>mikirtu@gmail.com</span></p>
                                                <p><span class="title-s">{props.myInfo[3]}: </span>
                                                    <span>(848)-702-4444</span></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="skill-mf">

                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="about-me pt-4 pt-md-0">
                                        <div class="title-box-2">
                                            <h5 class="title-left">
                                                About me
                                            </h5>
                                        </div>
                                        <p class="lead">
                                            Born and raised in a city that goes by the name Tbilisi, located in The The
                                            Republic of Georgia.
                                            Came to America to follow my young dreams of working in the Casino industry.
                                        </p>
                                        <p class="lead">
                                            Started from the bottom and worked my way up to becoming a pit Manager as I
                                            got close to my eleventh year in the business.
                                        </p>
                                        <p class="lead">
                                            Along the way I established a family and my dreams shifted into wanting to
                                            better myself and work in a new profession to better myself and my family
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    );
}

export default Container;
