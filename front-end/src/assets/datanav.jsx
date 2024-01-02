import React from "react";
import { FaHome, FaShoppingCart, FaRegUserCircle } from "react-icons/fa";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { RiBillFill } from "react-icons/ri";

const data = [
    {
        name:"Home",
        icon: <FaHome />,
        link:"#"
    },
    {
        name:"Products",
        icon: <MdOutlineProductionQuantityLimits />,
        link:"#"
    },
    {
        name:"Orders",
        icon: <RiBillFill />,
        link:"#"
    },
    {
        name:"Cart",
        icon:<FaShoppingCart />,
        link:"#"
    },
    {
        name:"Profile",
        icon:<FaRegUserCircle />,
        link:"#"
    }
]

export default data;