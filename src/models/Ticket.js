import mongoose from 'mongoose';

const TicketSchema = new mongoose.Schema({
    desc: {
        type: String,
        required: true
    },
    devAssigned: {
        type: String,
        required: true
    },
    priority: {
        type: String,
        required: true
    }
}
);
export default mongoose.model('Ticket', TicketSchema);