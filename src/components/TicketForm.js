import React from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import Axios from 'axios';
import { container } from './Form.module.css';





export default function TicketForm({ isDisabled }) {

    const API = '/create-ticket';


    const addTicket = async (e) => {
        e.preventDefault();

        console.log(e.target.desc.value);

        let {
            desc,
            devAssigned,
            priority
        } = e.target;

        const newTicket = { desc: desc.value, devAssigned: devAssigned.value, priority: priority.value };

        try {
            await Axios.post(API, newTicket);

        } catch (e) {
            console.log(e);
        }
    }

    return (
        <Container className={container} style={{ display: (isDisabled) ? "none" : "flex" }} >
            <Form onSubmit={addTicket} className="w-100" style={{ display: (isDisabled) ? "none" : "block" }}>
                <Form.Group>
                    <Form.Label>Description</Form.Label>
                    <Form.Control name="desc" as="textarea" rows="1" style={{ resize: "none" }} required />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Assign To: </Form.Label>
                    <Form.Control as="select" name="devAssigned" >
                        <option value="dev1">dev1</option>
                        <option value="dev2">dev2</option>
                        <option value="dev3">dev3</option>
                    </Form.Control>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Priority: </Form.Label>
                    <Form.Control as="select" name="priority">
                        <option value="low">low</option>
                        <option value="medium">medium</option>
                        <option value="high">high</option>
                    </Form.Control>
                </Form.Group>
                <Button variant="primary" type="submit">Add Issue</Button>
            </Form>
        </Container>

    )
}