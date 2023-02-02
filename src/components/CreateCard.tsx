import axios from "axios";
import FormComponent from './FormComponent';
import AddNew from "./AddNew";
import { useEffect } from "react";
import { useState } from "react";


export default function CreateCard() {
    const [cards, setCards] = useState<any[]>([])
    
    useEffect(() => {
        axios.get("http://localhost:3004/quotes").then(({ data }) => {
            setCards(data);
            console.log(data);
        });
    }, [])
        return (
            <div className="container">
                {cards.map((card, index) => (
                    <div className="card-container" key={index}>
                        <img src={card.src} alt="" className="image"/>
                        <h5 className="card-title">{card.name}</h5>
                        <p className="quote-text">{card.quote}</p>
                        <FormComponent />
                    </div>
                ))}
                <AddNew />
            </div> 
    )  
}

    
