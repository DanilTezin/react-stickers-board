import Sticker from "./Sticker";
import { stickerSet } from './stickerSet';
import './style.css'


const StickerBoard = () =>{
    return(
        <div className="board">
            {
                stickerSet.map((sticker)=>{
                    return <Sticker name={sticker.name} image={sticker.image}/>
                })
            }
        </div>
    )
}

export default StickerBoard