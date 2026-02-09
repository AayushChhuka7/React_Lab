import React, { useState, useRef } from "react";

export default function App() {
  const [username, setuserName] = useState("");
  const inputRef = useRef(null);
  return (
    <div>
      <input
        ref={inputRef}
        type="text"
        value={username}
        onChange={(e) => setuserName(e.target.value)}
      />
      <button onClick={() => inputRef.current.focus()}>Focus Input</button>
      <p>Typed name : {username}</p>
    </div>
  );
}
