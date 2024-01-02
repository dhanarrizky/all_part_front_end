import React from "react";
import './Navbar.css';
import Data from '../../assets/datanav';
import Navitem from "../Navitem/Navitem";

const Navbar = () => {

    return (
        <div className="nav">
            <div>
                {Data.map((item) => {
                    return <Navitem title={item.name} icons={item.icon}  link={item.link}/>
                })}
            </div>
        </div>
    )
}

export default Navbar;