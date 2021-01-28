import React from 'react';
import './App.css';


function Display(props: { count: number, max: number }) {

    return (
        <div className={props.count === props.max ? "error-message" : "display"}>
            {props.count}
        </div>
    );
}

export default Display;

