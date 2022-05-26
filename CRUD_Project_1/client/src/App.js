import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import './App.css';

function App() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [newName, setNewName] = useState('');
  const [newEmail, setNewEmail] = useState('');
  const [newPhone, setNewPhone] = useState('');
  const [contactList, setContactList] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:3001/read").then((response) => {
      setContactList(response.data);
    });
  }, []);

  const addToList = () => {
    Axios.post("http://localhost:3001/insert", {
      name: name,
      email: email,
      phone: phone,
    });
  };

  const updateContact = (id) => {
    Axios.put("http://localhost:3001/update", {
      id: id,
      newName: newName,
      newEmail: newEmail,
      newPhone: newPhone,
    });
  }

  const deleteContact = (id) => {
    Axios.delete(`http://localhost:3001/delete/${id}`);
  }

  return (
    <div className="App">
      <h1>CRUD App with MERN</h1>

      <div>
        <label>Name: </label>
        <input 
          type="text"
          onChange={(event) => {
            setName(event.target.value);
          }}
        />
      </div>
      
      <div>
        <label>Email: </label>
        <input 
          type="text"
          onChange={(event) => {
            setEmail(event.target.value);
          }}
        />
      </div>
      
      <div>
        <label>Phone: </label>
        <input 
          type="text"
          onChange={(event) => {
            setPhone(event.target.value);
          }}
        />
      </div>
      
      <button onClick={addToList}>Add To List</button>

      <h1>Contact List</h1>

      {contactList.map((val, key) => {
        return (
          <div key={key} className="contact">
            <h2> {val.name} </h2> 
            <h2> {val.email} </h2>
            <h2> {val.phone} </h2>

            <div>
              <label>Updated Name: </label>
              <input 
                type="text" 
                placeholder="New Name..."
                onChange={(event) => {
                  setNewName(event.target.value);
                }} 
              />
            </div>
            
            <div>
              <label>Updated Email: </label>
              <input 
                type="text" 
                placeholder="New Email..."
                onChange={(event) => {
                  setNewEmail(event.target.value);
                }} 
              />
            </div>

            <div>
              <label>Updated Phone: </label>
              <input 
                type="text" 
                placeholder="New Phone..."
                onChange={(event) => {
                  setNewPhone(event.target.value);
                }} 
              />
            </div>

            <button onClick={() => updateContact(val._id)}> Update </button>
            <button onClick={() => deleteContact(val._id)}> Delete </button>
          </div>
        );
      })}
    </div>
  );
}

export default App;
