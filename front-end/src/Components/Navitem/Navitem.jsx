import React from "react";
import './Navitem.css';


const Navitem = (promp) => {
    return (
        <div className="nav-item">
            <a href={promp.link}>
                <div className="icon">
                    {promp.icons}
                </div>
                <div className="title">
                    {promp.title}
                </div>
            </a>
        </div>
    )
}

export default Navitem;