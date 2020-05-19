import React from 'react';
import FooterMenuItem from "./footerMenuItem";

function Footer(props) {
    return (
        <div>

            <footer className="footer mt-auto py-3">
                <div className="container-fluid padding">
                    <div className="row alert text-center">
                        <div className="col-12">
                                <hr/>
                            {props.footerMenu.map(el => <FooterMenuItem key={el} item={el}/>)}
                                <h1 className="display-4">Copyright&copy;</h1>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default Footer;


