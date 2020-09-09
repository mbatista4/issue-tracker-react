import React from 'react';
import { Container } from 'react-bootstrap';
import { container } from './Ticket.module.css';
import Ticket from './Ticket';

export default function TicketView({ isDisabled, data, getData }) {


    return (
        <Container className={container} style={{ display: (isDisabled) ? "none" : "flex", padding: '1rem', background: '#c3c3c3', marginTop: '2rem', width: "50%" }}>
            {data.map(ticket => (<Ticket key={ticket._id} desc={ticket.desc} devAssigned={ticket.devAssigned} priority={ticket.priority} id={ticket._id} getData={getData} />))}
        </Container>
    )
}
