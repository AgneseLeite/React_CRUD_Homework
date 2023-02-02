import { useState, useEffect } from "react";
import axios from "axios";

const FormComponent = () => {
    const [name, setName] = useState<string>('');
    const [quote, setQuote] = useState<string>('');
    const [cards, setCards] = useState<any[]>([])
    // const [APIData, setAPIData] = useState([]);

    
    // const handleDelete = (id: number) => {
    //     axios.delete(`http://localhost:3004/quotes/${id}`)
    //     .then(res => console.log(res)).catch((err: string) => console.log(err))
    // };
    return (
        <div>
            <button type="submit">Edit</button>
            <button>Delete</button>
            <form action="" className="form">
                <h3>Edit quote</h3>
                <input type="text" placeholder="Edit name..." onChange={(e) => setName(e.target.value)}/>
                <textarea name="quote" id="quote" placeholder="Edit quote..." onChange={(e) => setQuote(e.target.value)}></textarea>
                <button className="update-btn" type="submit">Update</button>  
            </form>
        </div>
    )
    }


export default FormComponent;
