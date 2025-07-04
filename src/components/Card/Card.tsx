import { useState } from "react";
import './Card.css'
interface PropsCard {
    card_name: string;
    card_text: string;
}
function Card({ card_name, card_text }: PropsCard) {
    const[color, setColor]=useState<boolean>(false);
    const changeColor=()=>{
        setColor(!color)
    }
    return (
        <div className="card">
            <button onClick={changeColor} className={color?"that":"cardbutt"}></button>
            <h2 className="namecard">{card_name}</h2>
            <p className="cardtxt">{card_text}</p>
        </div>
    );
}
export default Card;
