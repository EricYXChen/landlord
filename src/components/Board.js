import React from 'react'
import { useLocation } from 'react-router-dom';

function Board() {
    
    const { state } = useLocation();
    console.log(state)
    return (
        <>
        <html>
        WELCOME, {state.username}
        </html>
        </>
    );
}

export default Board;