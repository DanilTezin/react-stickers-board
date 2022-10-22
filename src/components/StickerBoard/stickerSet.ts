import { StickerTypes } from './Sticker';

import smile from '../../assets/smile.svg'
import angry from '../../assets/angry.svg'
import blank from '../../assets/blank.svg'
import tangue from '../../assets/tangue.svg'
import sad from '../../assets/sad.svg'
import unsure from '../../assets/unsure.svg'
import dribble from '../../assets/dribble.svg'


export const stickerSet:Array<StickerTypes> = [
    {name:"smile", image: smile},
    {name:"angry", image: angry},
    {name:"blank", image: blank},
    {name:"tangue", image: tangue},
    {name:"sad", image: sad},
    {name:"unsure", image: unsure},
    {name:"dribble", image: dribble}
]

export const ratingsStickerSet: Array<any>=[
    {name:"smile", image: smile, rating: 0},
    {name:"angry", image: angry, rating: 0},
    {name:"blank", image: blank, rating: 0},
    {name:"tangue", image: tangue, rating: 0},
    {name:"sad", image: sad, rating: 0},
    {name:"unsure", image: unsure, rating: 0},
    {name:"dribble", image: dribble, rating: 0}
]