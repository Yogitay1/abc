import {useState} from "react";

export default function Demo(){
    const[fruit,setFruit ]= useState('mango');
    return (

        <div>
            my fav fruit is{fruit}
            <button onClick={()=>setFruit('strawberries')}>strawberries</button>
        </div>
    )
}