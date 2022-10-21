import './style.css'

export type StickerTypes ={
    name: string,
    image: string
}

const Sticker = ({name, image}: StickerTypes) =>{
    return (
        <div className="wrapSticker">
            <img className="sticker" src={image} alt="" />
        </div>
    )
}

export default Sticker