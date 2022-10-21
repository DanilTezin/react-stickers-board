import Sticker from "./Sticker";
import { stickerSet } from './stickerSet';
import styles from './style.css'


type StickerBoardTypes ={

}

const StickerBoard: StickerBoardTypes = () =>{
    return(
        <div>
            {
                stickerSet.map((sticker)=>{
                    return <Sticker name={sticker.name} image={sticker.image}/>
                })
            }
        </div>
    )
}

export default StickerBoard