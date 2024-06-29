import { useState } from "react";

export default function Player({ initialName, playerSymbol, isActive }) {
  const [isEditing, setIsEditing] = useState(false);
  const [playerName, setPlayerName] = useState(initialName);

  const editTriger = () => {
    setIsEditing((editing) => !editing);
  };

  function handleChange(e) {
    setPlayerName(e.target.value);
  }

  let playerHtml = <span className="player-name">{playerName}</span>;
  let buttonText = <button onClick={editTriger}>Edit</button>;

  if (isEditing == true) {
    playerHtml = (
      <input type="text" value={playerName} onChange={handleChange}></input>
    );
    buttonText = <button onClick={editTriger}>Save</button>;
  }

  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {playerHtml}
        <span className="player-symbol">{playerSymbol}</span>
      </span>
      {buttonText}
    </li>
  );
}
