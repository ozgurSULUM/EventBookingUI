import express from 'express';
import cors from 'cors';
import events, { getUpcomingEvents, getPastEvents } from './events.js';


const PORT_NUMBER = process.env.PORT || 5001;

const app = express();
app.use(cors());


app.get('/events/upcoming', (req, res) => {
    const upcomingEvents = getUpcomingEvents(events);
    res.status(200).send(JSON.stringify(upcomingEvents));
})

app.get('/events/passed', (req, res) => {
    const pastEvents = getPastEvents(events);
    res.status(200).send(JSON.stringify(pastEvents));
})

app.listen(PORT_NUMBER, () => {
    console.log("server started");
});