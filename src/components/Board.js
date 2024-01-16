import React from 'react'
import { useLocation } from 'react-router-dom';
import { Game } from './Game';


function Board() {
    const { state } = useLocation();
    console.log(state)
    return (
        <>
        <html>
        WELCOME, {state.username}
        </html>
        <Game />
        </>
    );
}

export default Board;