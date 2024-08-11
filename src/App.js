// src/App.js
import React from 'react';

function App() {

  const handleSubmit = async (event) => {
    event.preventDefault();
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Ollama Chat</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={input}
            // onChange={(e) => setInput(e.target.value)}
            placeholder="Ask me anything..."
          />
          <button type="submit">Send</button>
        </form>
        {/* {response && <p>Response: {response}</p>} */}
      </header>
    </div>
  );
}

export default App;
