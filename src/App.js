import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button } from 'react-bootstrap';
import TicketForm from './components/TicketForm.js';
import TicketView from './components/TicketView.js';
import { main_body, title, buttons, create, view } from './App.module.css'

function App() {

  const [createD, setCreateD] = useState(true);
  const [data, setData] = useState([]);

  const getData = async () => {
    let dat = await axios.get('/get-all');
    setData(dat.data);
  }


  useEffect(() => {
    getData();
  }, [data])


  const viewTickets = async () => {

    setCreateD(!createD);

    let ticketsRes = await axios.get('/get-all');
    setData(ticketsRes.data);
  }

  return (

    <div className={main_body}>
      <h1 className={title}>Issue Tracker</h1>
      <TicketForm isDisabled={!createD} />
      <TicketView isDisabled={createD} data={data} getData={getData} />
      <div className={buttons}>
        <Button className={create} onClick={() => setCreateD(!createD)} disabled={createD} >Create Ticket</Button>
        <Button className={view} onClick={viewTickets} disabled={!createD} > View Tickets</Button>
      </div>
    </div>

  );
}

export default App;
