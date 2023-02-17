import React from "react";

const Button= ({value,className,onClick})=>{
    return (
        <button className={className} onClick={()=>onClick(value)}>{value}</button>
    );
}


export default Button;