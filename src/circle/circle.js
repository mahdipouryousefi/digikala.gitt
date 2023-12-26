import React from "react"
import Circlephoto from "../image/circlephoto"
const Circle = () => {
    return (<div className="circle">

        {Circlephoto.map((img, inx) => {
            return (
                <div className="c">
                    <img src={img.src} className="circleitem" ></img>
                    <div className="namecircle">{img.name} </div>
                </div>
            )
        })}

    </div>)
}
export default Circle