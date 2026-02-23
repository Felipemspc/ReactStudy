import React from "react"
import Detail from "./Detail"
import Avatar from "./Avatar"

function Card(props){
    return <div className="card">
        <div className="top">
          <h2 className="name">{props.name}</h2>
          <Avatar img={props.img}/>
        </div>
        <div className="bottom">
          <Detail Info={props.phone}/>
          <Detail Info={props.email}/>
        
        </div>
      </div>
}

export default Card;