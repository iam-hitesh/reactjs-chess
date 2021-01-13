import React, { useState } from 'react';

import Chessboard from "chessboardjsx";
const Chess = require('chess.js');

const ChessboardComponent = () => {
    const [currentPosition, setCurrentPosition] = useState('rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1');
    const [chess, setChess] = useState(new Chess());

    const onDropCallback = (e) => {
        const sourceSquare = e.sourceSquare;
        const targetSquare = e.targetSquare;

        const chessMove = chess.move({ from: sourceSquare, to: targetSquare });

        if (chessMove) {
            const currentFen = chess.fen();
            setCurrentPosition(currentFen);

            setTimeout(() => {
                const allMoves = chess.moves();

                const prioritizedMoves = allMoves.map((move) => {
                    const tempChess = new Chess(currentFen);
                    const returnedMove = tempChess.move(move);

                    if (returnedMove.flags === 'c') {
                        return returnedMove;
                    }
                }).filter((move) => move);

                // q, r, b, n, p
                const sortedMoves = prioritizedMoves.sort((move) => {
                    if (move.captured === 'q') {
                        return 1;
                    } else if (move.captured === 'r') {
                        return 2;
                    } else if (move.captured === 'b') {
                        return 3;
                    } else if (move.captured === 'n') {
                        return 4;
                    } else if (move.captured === 'p') {
                        return 5;
                    }

                    return 6;
                });


                console.log(sortedMoves);
                let newMove = prioritizedMoves[0];

                if (!newMove) {
                    const randomMove =  Math.floor(Math.random() * Math.floor(allMoves.length - 1));
                    newMove = allMoves[randomMove];
                }

                chess.move(newMove);
                setCurrentPosition(chess.fen());
            }, 1000);

        } else {
            console.log("Illegal");
        }
    }

    return (
        <div style={{"margin":"10px"}}>
            <Chessboard
                position={currentPosition}
                onDrop={onDropCallback}
            />
        </div>
    );
}

export default ChessboardComponent;
