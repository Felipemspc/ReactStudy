import React from "react";
import Avatar from "./Avatar";
import Detail from "./Detail";

function Card(props){
    return( 
    <div className="card">
        <div className="top">
          <h2 className="name">{props.nome}</h2>
          <Avatar  img = {props.img} />
        </div>
        <div className="bottom">
         <Detail detailInfo= {props.telefone} />
         <Detail detailInfo= {props.correioEletronico}/>

        </div>
        </div>
        )};

export default Card;