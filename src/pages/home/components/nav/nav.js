import React from 'react'
import img from "../../../../assets/img/img/home/1.jpg"
import "./nav.css"

export default function Nav() {
    return (
        <div className="nav">
             <ul>
                    <li>
                        <img src={img} alt="" className="img"/>
                        <p>限时抢购</p>
                    </li>
                    <li>
                        <img src={img} alt="" className="img"/>
                        <p>限时抢购</p>
                    </li>
                    <li>
                        <img src={img} alt="" className="img"/>
                        <p>限时抢购</p>
                    </li>
                    <li>
                        <img src={img} alt="" className="img"/>
                        <p>限时抢购</p>
                    </li>
                </ul>
        </div>
    )
}
