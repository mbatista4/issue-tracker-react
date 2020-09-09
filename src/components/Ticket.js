import React, { useState } from 'react';
import axios from 'axios';
import { Container, Button } from 'react-bootstrap';
import { ticket, descStyle, delBtn } from './Ticket.module.css';


export default function Ticket({ desc, devAssigned, priority, _id, getData }) {

    const [dis, setDis] = useState('flex');

    const deleteTicket = async () => {
        setDis('none');

        try {
            await axios.delete('/delete-ticket', { id: _id });
            getData()

        } catch (e) {
            console.log(e);
        }

    }


    return (
        <Container className={ticket} style={{ display: dis }}>
            <div style={{ display: 'flex', flexDirection: "row", justifyContent: "space-between" }}>
                <div style={{ display: "flex", flexDirection: "row" }}>
                    <label htmlFor="Assigned">Assigned:</label>
                    <p>{devAssigned}</p>
                </div>
                <Button className={delBtn} onClick={deleteTicket}>Close Issue</Button>
            </div>
            <div style={{ display: "flex", flexDirection: "row" }}>
                <label htmlFor="Priority">Priority:</label>
                <p>{priority}</p>
            </div>
            <div className={descStyle}>
                <label htmlFor="Description">Description</label>
                <p>{desc}</p>
            </div>
        </Container>
    )
}