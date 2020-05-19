import React from 'react';


function TopMenuItem(props) {
    return (
        <div className="alert alert-primary" role="alert">
            {props.item}
        </div>
    );
}

export default TopMenuItem;
