import React, { useState } from "react";
import './Navbar.css';
import Data from '../../assets/datanav';
import Navitem from "../Navitem/Navitem";
import { FaChevronCircleLeft, FaChevronCircleRight } from "react-icons/fa";

const Navbar = () => {
    const[Hid1, setHid1] = useState('')
    const[Hid2, setHid2] = useState('hidden')
    const[navcls, setnavcls] = useState('nav')

    const ClickMe = () => {
        if(Hid1==''){
            setHid1('hidden')
            setHid2('')
            setnavcls('nav nav-hid')
        } else {
            setHid1('')
            setHid2('hidden')
            setnavcls('nav')
        }
    }

    return (
        <div className={navcls}>
            <div>
                {Data.map((item) => {
                    return <Navitem hid={Hid1} title={item.name} icons={item.icon}  link={item.link}/>
                })}
            </div>
            <div className="button-group" onClick={() => ClickMe()}>
                <FaChevronCircleLeft className={Hid1}/>
                <FaChevronCircleRight className={Hid2}/>
            </div>
        </div>
    )
}

export default Navbar;