import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const HomePage =() => {
    const [roomCode, setRoomCode] = useState('')
    const navigate = useNavigate();
    
    const handleFormSubmit = (ev) => {
        ev.preventDefault();
        navigate(`/room/${roomCode}`);
    }



    console.log("hello");
    return(
    <div className="home-page">
        <form onSubmit={handleFormSubmit} className="form">
            <div>
                <label>Enter Room Code</label>
                <input type='text' onChange={e=> setRoomCode(e.target.value)} placeholder="Enter Room Code"></input>
            </div>
            <button type="submit">Submit</button>
        </form>

    </div>
    )
}

export default HomePage