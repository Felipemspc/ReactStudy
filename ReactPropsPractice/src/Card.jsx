import React from "react";

function Card(props){
    return( 
    <div className="card">
        <div className="top">
          <h2 className="name">{props.nome}</h2>
          <img className="circle-img"
            src={props.img}
            alt="avatar_img"
          />
        </div>
        <div className="bottom">
          <p className="info">{props.telefone}</p>
          <p className="info">{props.correioEletronico}</p>
        </div>
        </div>
        )};

export default Card;