import "./App.css";
import { useState } from 'react';
import contacts from "./contacts.json";

function App() {

  const firstFiveContact = [
    contacts[0],
    contacts[1],
    contacts[2],
    contacts[3],
    contacts[4],
  ]
  const [contact, setContacts] = useState(firstFiveContact);
  const addRandomContact = () => {
    let filtered = contacts.filter((people) => {
      return !contact.includes(people);
    });
    const addRandomContact = [Math.floor(Math.random()*filtered.length)];
    let randomContact = filtered[addRandomContact];
    setContacts(contact.concat(randomContact));
  }


  const sortContactByName = () => {
    let contactArr = [...contact];
    let sortName = contactArr.sort((a, b) => a.name.localeCompare(b.name));
    setContacts(sortName);
  };
  const sortCOntactByPopularity = () => {
    let contactArr = [...contact];
    let byPopularity = contactArr.sort(
      (a, b) => b.popularity.toFixed(2) - a.popularity.toFixed(2)
    );
    setContacts(byPopularity);
  };

  const renderContact = contact.map((contact) => {
    return (
      
      <tbody>
        <tr>
          <td>
            <img
              src={contact.pictureUrl}
              alt="contact"
            />
          </td>
          <td>
            {contact.name}
            <br />
            <button>Delete</button>
          </td>
          <td>{contact.popularity}</td>
          <td>{contact.wonOscar ? "🏆" : ""}</td>
          <td>{contact.wonEmmy ? "✴️" : ""}</td>
        </tr>
      </tbody>
    );
  });
  return <div className="App">
    <h1>Iron Contacts</h1>
    <button onClick={addRandomContact}>Add Random Contact</button>
    <button onClick={sortContactByName}>Sort by Name</button>
    <button onClick={sortCOntactByPopularity}>Sort by Popularity</button>

   <table>
          <tr>
            <th >Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won Oscar</th>
            <th>Won Emmy</th>
          </tr>
        {renderContact}
      </table>

  
  </div>;

}

export default App;
