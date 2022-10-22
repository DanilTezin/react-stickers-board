import './style.css'

export type StickerTypes ={
    name: string,
    image: string,
    onClick?: any
}


const Sticker = ({name, image, onClick}: StickerTypes) =>{
    return (
        <div onClick={onClick} className="wrapSticker">
            <img className="sticker" src={image} alt="" />
        </div>
    )
}

export default Sticker