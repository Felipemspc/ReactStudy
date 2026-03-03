import React from "react";

function Input(props){
    return (
       <div> 
        <input type={props.type} placeholder={props.placeholder} id="nome" />
       
        </div>
    )
    
}



export default Input;