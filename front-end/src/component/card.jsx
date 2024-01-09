import React from "react";
import './card.css';

const card = (promp) => {
    return (
        <div className="card">
            <div className="img">
                <img src={promp.imgs} alt="" />
            </div>
            <div className="content">
                <div className="title">{promp.title}</div>
                <div className="description">{promp.description}</div>
            </div>
        </div>
    )
}

export default card;