import React, { useEffect, useState } from "react";
import './Navitem.css';


const Navitem = (promp) => {
    const[hidd, sethidd] = useState('')
    const[acls, setacls] = useState('ahid')

    useEffect(()=> {
        let hid = promp.hid
        sethidd("title "+hid)

        if(acls === 'ahid-act'){
            setacls('ahid')
        }else{
            setacls('ahid-act')
        }

        console.log(hidd)
    },[promp.hid])

    return (
        <div className="nav-item">
            <a href={promp.link} className={acls}>
                <div className="icon">
                    {promp.icons}
                </div>
                <div className={hidd}>
                    {promp.title}
                </div>
            </a>
        </div>
    )
}

export default Navitem;