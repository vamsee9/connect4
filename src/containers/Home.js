import React from "react";
import "./Home.css";

export default function Home() {
  return (
    <div className="Home">
      <div className="lander">
        <h1>Instructions to the game</h1>
        <p className="text-muted">A simple Connect 4 PVP Game {"\n"}</p>

        <b>Please read the instructions carefully </b>
        {"\n"}
        <ol className="text-left">
          <li>Choose who plays first.</li>
          <li>
            Each player in his turn drops one of his checkers down any of the
            slots in the top of the grid.
          </li>
          <li>
            The play alternates until one of the players gets four checkers of
            his color in a row. The four in a row can be horizontal, vertical,
            or diagonal.
          </li>
          <li>If the first player to get four in a row wins.</li>
          <li>
            If the board is filled with pieces and neither player has 4 in a
            row, then the game is a draw.
          </li>
        </ol>
      </div>
    </div>
  );
}
