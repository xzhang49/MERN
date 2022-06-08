import './App.css';
import { useState } from 'react';
import Item from "./components/Item";

function App() {
  const [text, setText] = useState("");

  return (
    <div className="App">
      <div className="container">
        <h2>ToDo List</h2>

        <div className='top'>
          <input 
            type="text"
            placeholder="Write something..."
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <div className='add'>Add</div>
        </div>

        <div className='list'>
          <Item />
        </div>
      </div>
    </div>
  );
}

export default App;
