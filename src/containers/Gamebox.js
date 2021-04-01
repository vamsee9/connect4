import React, { useReducer } from 'react';
import ReactDOM from 'react-dom';
import Grid from './Grid';
import {reducer} from './Reducer';
import Sidebar from './Sidebar';


const initialBoxes = new Array(7 * 6).fill("white");
const initialHalfBoxesTop = new Array (7 * 1).fill("#e6e6e6");

const GameBox = () => {

    const [state, dispatch] = useReducer(reducer, { color: "cyan", 
                                                    halfBoxColor: "cyan",
                                                    boxes: initialBoxes, 
                                                    halfBoxesTop : initialHalfBoxesTop,
                                                    filledBox: [], 
                                                    player1Score: 0, 
                                                    player2Score: 0,
                                                    winnerText: "",
                                                    indicatorPlay: true,
                                                    winningStatus : false,
                                                    aiIsMoving: false,
                                                });

        
                                          
    let gameResult;
                                       
    // if someone is winning, then reset the dot color to magenta and show the winner announcement box
    if (state.winningStatus){
        gameResult =  (<div className="game-result">
                            <h3>{state.winnerText}</h3>
                        </div>)
        }


return  <> 
             <Sidebar 
                sidebar = "one"
                player1Score = {state.player1Score}
                player2Score = {state.player2Score}
                indicatorPlay = {state.indicatorPlay}
                winningStatus = {state.winningStatus}
            />
            <div className="game-boxes">
                <div className="menu-bar">
                    <h1>CONNECT<span>4</span></h1>
                </div>
                <Grid boxes = {state.boxes} 
                      halfTopBoxes = {state.halfBoxesTop}
                     
                      filledBox = {state.filledBox}
                      onMouseOut = {(i) => dispatch({ type: "hoverOut", index: i})}
                      onMouseOver = {(i) => dispatch({ type: "hover", index: i})} 
                      onClick = {(i) => {
                        if (state.aiIsMoving) {
                            return;
                        }
                          
                        dispatch({ type: "fill", index: i });

                        
                      }}  
                />  
                <div className="menu-bar">
                    <button onClick={()=> dispatch({type: "newGame"})}>NEW GAME</button>
                    <button onClick= {() => dispatch({type: "resetGame"})}>RESET GAME</button>
                </div>
            </div>
            <div className="sidebar two">
                
                <Sidebar 
                    sidebar = "two"
                    
                    player1Score = {state.player1Score}
                    player2Score = {state.player2Score}
                    indicatorPlay = {state.indicatorPlay}
                    winningStatus = {state.winningStatus}
                />
            </div>

            {ReactDOM.createPortal(gameResult, document.body)}
        </>     
}

export default GameBox;