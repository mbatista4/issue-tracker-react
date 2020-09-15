import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button } from 'react-bootstrap';
import TicketForm from './components/TicketForm.js';
import TicketView from './components/TicketView.js';
import { main_body, title, buttons, create, view } from './App.module.css'

function App() {

  const [createD, setCreateD] = useState(true);
  const [data, setData] = useState([]);

  const api = 'https://issue-tracker-back.herokuapp.com/get-all';

  const getData = async () => {
    try {
      let dat = await axios.get(api);
      setData(dat.data);
    } catch (error) {
      console.log(error);
    }
  }


  useEffect(() => {
    getData();
    console.log('here');
  }, [])


  const viewTickets = async () => {

    try {
      let ticketsRes = await axios.get(api);
      setData(ticketsRes.data);

      setCreateD(!createD);

    } catch (error) {
      console.log(error);
    }

  }

  return (

    <div className={main_body}>
      <h1 className={title}>Issue Tracker</h1>
      <TicketForm isDisabled={!createD} viewTickets={viewTickets} />
      <TicketView isDisabled={createD} data={data} getData={getData} />
      <div className={buttons}>
        <Button className={create} onClick={() => setCreateD(!createD)} disabled={createD} >Create Ticket</Button>
        <Button className={view} onClick={viewTickets} disabled={!createD} > View Tickets</Button>
      </div>
    </div>

  );
}

export default App;
