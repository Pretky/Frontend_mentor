//----------- QR Code Project -------------------------------//
import React from 'react';
import './Qr_style.css';
export default function App(){
return(

    <div className = "outer">
<div className = "inner1"> 
    <img src = "/Qr_code/image-qr-code.png" alt = "QR_code" />
    <a className  = "inner3" href = "https://www.frontendmentor.io/home" > https://www.frontendmentor.io/home </a>
</div>
<div className = "inner2">
    <div className = "para"><p><b>Improve your front-end skills by building projects </b></p> </div> 
    <div className = "para"><p> Scan the QR code to visit Frontend Mentor and take your coding skills to the next level.</p></div>
    </div>
    </div>
)
}
