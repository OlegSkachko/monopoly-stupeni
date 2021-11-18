import React from 'react';
import './index.css'

const moveDict = {
    gotoRight2: "gotoRight2",
    gotoRight3: "gotoRight3",
    gotoRight4: "gotoRight4",
    gotoRight5: "gotoRight5",
    gotoRight6: "gotoRight6",
    gotoRight7: "gotoRight7",
    gotoRight8: "gotoRight8",
    gotoRight9: "gotoRight9",
    stay: "stay"
}

const Ball = (props) => {
    return (
        <div className={props.color ==='green'? 'ball green': 'ball' + ' ' + moveDict[props.goto]}/>
    );
};


export default Ball;