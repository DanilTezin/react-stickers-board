import { FC, useState } from 'react';
import '../StickerBoard/style.css'
import { stickerSet } from '../StickerBoard/stickerSet';
import Sticker from '../StickerBoard/Sticker';



interface FakePostTypes {
    
}

const FakePost:FC  = () =>{

    const [emoji, setEmoji] = useState()

    return (
        <div className="fakepost">
            <div className="contentFakePost">
                <h3>Post</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi asperiores soluta nemo sit facere consectetur sint saepe ad odio nobis.</p>
            </div>
            <div className="ratings">
                {stickerSet.map((rating)=>{
                    return <Sticker image={rating.image} name={rating.name}/>
                })}
            </div>
        </div>
    )
}

export default FakePost