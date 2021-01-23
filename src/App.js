import React, { useState } from "react";
import Div from "./component/DIv";
import "./styles.css";

export default function App() {
  let [{r1c1,r1c2,r1c3,r2c1,r2c2,r2c3,r3c1,r3c2,r3c3}, setBoxValue] = useState({
    r1c1: "",
    r1c2: "",
    r1c3: "",
    r2c1: "",
    r2c2: "",
    r2c3: "",
    r3c1: "",
    r3c2: "",
    r3c3: ""
  });
  let gameOver = false;
  let [player,setPlayer] = useState("player1");
  let [decideVariable, setDecideVariable] = useState("x");
  let xOrO = (id) => {
      gameOver!==true&&(setBoxValue((prev) =>  prev.[id]==="" ? (setDecideVariable(decideVariable==="x"?"0":"x"),setPlayer(player==="player1"?"player2":"player1"),{...prev,[id]:decideVariable}): {...prev}));
  };
  return (
    <div>
      <div className="board">
        <h2>{player}:{decideVariable}</h2>
        <div className="board-row">
          <Div
            id="r1c1"
            className="column column_r column_r1"
            passFunction={xOrO}
            value={r1c1}
          />
          <Div
            id="r1c2"
            className="column column_r column_r1"
            passFunction={xOrO}
            value={r1c2}
          />
          <Div
            id="r1c3"
            className="column column_r"
            passFunction={xOrO}
            value={r1c3}
          />
        </div>
        <div className="board-row">
          <Div
            id="r2c1"
            className="column column_r column_r1"
            passFunction={xOrO}
            value={r2c1}
          />
          <Div
            id="r2c2"
            className="column column_r column_r1"
            passFunction={xOrO}
            value={r2c2}
          />
          <Div
            id="r2c3"
            className="column column_r"
            passFunction={xOrO}
            value={r2c3}
          />
        </div>
        <div className="board-row">
          <Div
            id="r3c1"
            className="column column_r1"
            passFunction={xOrO}
            value={r3c1}
          />
          <Div
            id="r3c2"
            className="column column_r1"
            passFunction={xOrO}
            value={r3c2}
          />
          <Div
            id="r3c3"
            className="column"
            passFunction={xOrO}
            value={r3c3}
          />
        </div>
      </div>
    </div>
  );
}
