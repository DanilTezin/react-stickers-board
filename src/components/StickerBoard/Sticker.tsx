export type StickerTypes ={
    name: string,
    image: string
}

const Sticker = ({name, image}: StickerTypes) =>{
    return (
        <div>
            <img src={image} alt="" />
        </div>
    )
}

export default Sticker