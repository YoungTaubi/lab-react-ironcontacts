// import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';
import contacts from './contacts.json'

function App() {

const contactsFirstFive = contacts.slice(0,5)
const [contact, setContact] = useState(contactsFirstFive)
// console.log('contacts: ', contact);


const addContact = () => {
  let randomEle = contacts[Math.floor(Math.random() * contacts.length)]
  const contactCopy = contact.slice()
  // contactCopy.forEach((contact) => {
  //   console.log( 'id: ', contact.id)
  //   if (contact.id !== randomEle.id) {
  //     contactCopy.unshift(randomEle)
  //     return
  //   }
  // })
  if (contactCopy.length === contacts.length) {
    alert('Calm down! You reached the end of the list!')
    return
  }
  else if (contactCopy.some(contact => contact.id === randomEle.id)) {
    console.log('in arr');
    
    return addContact()
    
  } else {
    console.log('not in arr');
    contactCopy.unshift(randomEle)
  }
  // contactCopy.unshift(randomEle)
  setContact(contactCopy) 
  // console.log( 'random Ele: ', randomEle.id);
}

const sortByName = () => {
  const contactCopy = contact.slice()
  contactCopy.sort((a, b) => {
    if(a.name < b.name) { return -1; }
    if(a.name > b.name) { return 1; }
    return 0;
  })
  setContact(contactCopy) 
}

const sortByPop = () => {
  const contactCopy = contact.slice()
  contactCopy.sort((a, b) => {
    if(a.popularity < b.popularity) { return 1; }
    if(a.popularity > b.popularity) { return -1; }
    return 0;
  })
  setContact(contactCopy) 
}

const deleteContact = (id) => {
  const contactCopy = contact.filter((item) => item.id !== id)
  setContact(contactCopy) 
}

console.log('contacts: ', contact);




  return (
    <div className="App">
      <header className="App-header">
      <h1>Iron contacts</h1>
      <div class='buttonContainer'>
        <button onClick={addContact}>Add random contact</button>
        <button onClick={sortByName}>Sort by Name</button>
        <button onClick={sortByPop}>Sort by Popularity</button>
      </div>      
        {/* <img src={logo} className="App-logo" alt="logo" /> */}             
          <table>
          <tbody>
          <tr>
            <th>Picture</th>
            <th>Name</th>            
            <th>Popularity</th>
            <th>Won Oscar</th>
            <th>Won Emmy</th>
          </tr>
          {contact.map(contact => (
          <tr key={contact.id}>
            <th><img style={{height:'200px'}} src={contact.pictureUrl} /></th>
            <th>{contact.name}</th>            
            <th>{Math.round(contact.popularity *100) / 100}</th>
            <th>{contact.wonOscar ? '🏆' : ''}</th>
            <th>{contact.wonEmmy ? '🏆' : ''}</th>
            <th><button onClick={() => deleteContact(contact.id)}>Delete this Contact</button></th>
          </tr> 
          ))}           
          </tbody>
        </table>        
      </header>
    </div>
  );
}

export default App;
