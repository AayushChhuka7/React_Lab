import React, { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);
  const [isloggedIn, setIsLoggedIn] = useState(false);
  function handleIncrement() {
    setCount((oldcount) => oldcount + 1);
    setCount((oldcount) => oldcount + 1);
    setCount((oldcount) => oldcount + 1);
  }
  return (
    <div>
      <h3>{count}</h3>
      <button onClick={handleIncrement}>Increment</button>
      {isloggedIn && <h3>Welcome</h3>}
      {isloggedIn && <h3>Please Login in</h3>}

      <button onClick={() => setIsLoggedIn(!isloggedIn)}>
        {isloggedIn ? "LogOut" : "Login"}
      </button>
    </div>
  );
}
