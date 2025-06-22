import { useState, useEffect } from "react";

export default function SelectedContact({ selectedContactId, setSelectedContactId }) {
  const [contact, setContact] = useState(null);

  function fetchContact(id) {
    fetch(`https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${id}`)
      .then(res => res.json())
      .then(data => {
        console.log("Fetched contact:", data);
        setContact(data);
      });
  }

  useEffect(() => {
    if (!selectedContactId) return;
    fetchContact(selectedContactId);
  }, [selectedContactId]);

  if (!contact) return <p>Loading...</p>;

  return (
    <div>
      <h1>{contact.name}</h1>
      <p><b>Username: </b>{contact.username}</p>
      <p><b>Email: </b>{contact.email}</p>
      <p><b>Phone: </b>{contact.phone}</p>
      <p><b>Website: </b>{contact.website}</p>
      <p><b>Address: </b>{contact.address?.street}, {contact.address?.suite}, {contact.address?.city}, {contact.address?.zipcode}</p>
      
      <button onClick={() => setSelectedContactId(null)}>Back</button>
    </div>
  );
}
