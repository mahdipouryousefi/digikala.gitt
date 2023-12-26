import Booiamge from "../image/photoimage"

const Bottimage = () => {
    return (<div className="Bottimage">
        {Booiamge.map((img, inx) => {
            return <div>
                <img src={img.src} className="Bottimageitem"></img>
                <div className="Bottimageelement">{img.name}</div>
            </div>
        })}
    </div>)

}
export default Bottimage