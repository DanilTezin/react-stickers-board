import FakePost from "../FakePost/FakePost";
import Sticker from "./Sticker";
import { stickerSet, ratingsStickerSet } from './stickerSet';
import './style.css'
import { useState } from 'react';


const StickerBoard = () =>{
    const [ratings, setRatings] = useState(ratingsStickerSet)

    const [sadRating, setSadRating] = useState(0)
    const [smileRating, setSmileRating] = useState(0)
    const [angryRating, setAngryRating] = useState(0)
    const [blankRating, setBlankRating] = useState(0)
    const [tangutRating, setTangueRating] = useState(0)
    const [unsureRating, setUnsureRating] = useState(0)
    const [dribbleRating, setDribbleRating] = useState(0)

    const countRating = [   
        smileRating, 
        angryRating, 
        blankRating, 
        tangutRating, 
        sadRating,
        unsureRating, 
        dribbleRating
    ]

    


    let handleStickerClick = (name: string, image: string) =>{
        switch (name) {
            case "smile":
                setSmileRating(smileRating == 1 ? 0 : 1)
                break;
            case "angry":
                setAngryRating(angryRating == 1 ? 0 : 1)
                break;
            case "blank":
                setBlankRating(blankRating == 1 ? 0 : 1)
                break;
            case "tangue":
                setTangueRating(tangutRating == 1 ? 0 : 1)
                break;
            case "sad":
                setSadRating(sadRating == 1 ? 0 : 1)
                break;
            case "unsure":
                setUnsureRating(unsureRating == 1 ? 0 : 1)
                break;
            case "dribble":
                setDribbleRating(dribbleRating == 1 ? 0 : 1)
                break;
                                
            default:
                break;
        }
    }


    
    return(
        <>  

            <div className="ratings">
                <div className="countRatings">
                    {countRating.map(count => <div style={{backgroundColor: count > 0 ? 'black' : '', color: 'white'}}>{count}</div>)}
                </div>
                <div>
                    {ratings.map(rating =>  <Sticker image={rating.image} name={rating.name}/>)}
                </div>
              
            </div>
            
            
            <div className="board">
                {
                    stickerSet.map((sticker, index)=>{
                        return <Sticker onClick={()=> handleStickerClick(sticker.name, sticker.image)} 
                                        key={index} 
                                        name={sticker.name} 
                                        image={sticker.image}
                                />
                    })
                }
            </div>
        </>
    )
}

export default StickerBoard