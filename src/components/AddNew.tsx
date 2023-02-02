import React from "react";
import axios from "axios";
import { useState } from "react";

const AddNew = () => {

    const [link, setLink] = useState<string>('');
    const [name, setName] = useState<string>('');
    const [quote, setQuote] = useState<string>('');

    const addCard = () => {
        axios.post(`http://localhost:3004/quotes`, {
            link,
            name,
            quote
        })
    }
    return (
        <form action="" className="add-new">
            <input type="text" placeholder="Add new image link..." onChange={(e) => setLink(e.target.value)}/>
            <input type="text" placeholder="Add new name..." onChange={(e) => setName(e.target.value)} />
            <textarea name="" id="" placeholder="Add new quote..." onChange={(e) => setQuote(e.target.value)}></textarea>
            <button className="add-btn" type="submit" onClick={addCard}>Add</button>
        </form> 
    )
}
    


export default AddNew;