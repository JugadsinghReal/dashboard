import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { MongoClient, ServerApiVersion } from 'mongodb';
import bodyParser from 'body-parser';
import require from 'requirejs'
import WebSocket, { WebSocketServer } from 'ws';


dotenv.config();
const app = express();
const port = 3000;

app.use(express.static('public'));
app.use(cors());
app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});

app.get('/cards', (req, res) => {
    fetchCards().then(cards => {
        res.json(cards);
    });
});

const databaseUrl = process.env.CONNECTION_URL;
const client = new MongoClient(databaseUrl, {

    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

//---------------------------------------------------------

app.get('/chat', (req, res) => {
    fetchChat().then(text => {
        res.json(text);
    });
});

//this function returns all cards from the card collection in Mongodb

async function fetchChat() {

    try {
        // connect the client to the server
        await client.connect();
        // connection with the test database
        const database = client.db("Myfirstdatabase");
        // connect with the card collection
        const collection = database.collection('Chatbot');
        // fetch the cards from the database
        const text = await collection.find().toArray();
        // return the cards
        return text;
    } finally {
        // client will close when finish/error
        await client.close();
    }
}

async function insertChat(name, email, message) {

    try {
        // connect the client to the server
        await client.connect();
        //we connection with the test database
        const database = client.db("Myfirstdatabase");
        // connect with the card collection
        const collection = database.collection('Chatbot');
        //the cheese is inserted
        await collection.insertOne({ name: name, email: email, message: message });
        console.log("succesfully inserted message");
    } finally {
        // ensures that the client will close when you finish/error
        await client.close();
    }

}

app.post('/chat', (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const message = req.body.message;
    insertChat(name, email, message).
        then(res.send({ chatAdded: true }));
});


const socket = new WebSocket("wss://stream.aisstream.io/v0/stream")

socket.onopen = function (_) {
    let subscriptionMessage = {
        Apikey: "b54989d1253e07475f11062e0968ae58359eadca",
        BoundingBoxes: [[[-90, -180], [90, 180]]],
        FiltersShipMMSI: ["368207620", "367719770", "211476060"], // Optional!
        FilterMessageTypes: ["PositionReport"] // Optional!
    }
    socket.send(JSON.stringify(subscriptionMessage));
};

socket.onmessage = function (event) {
    let aisMessage = JSON.parse(event.data)
    console.log(aisMessage)
};

// ----------------------------------------------------

app.get('/planeAccidents', (req, res) => {
    fetchPA().then(text => {
        res.json(text);
    });
});

async function fetchPA() {

    try {
        // connect the client to the server
        await client.connect();
        // connection with the test database
        const database = client.db("planes");
        // connect with the card collection
        const collection = database.collection('planeAccidents');
        // fetch the cards from the database
        const text = await collection.find().toArray();
        // return the cards
        return text;
    } finally {
        // client will close when finish/error
        await client.close();
    }
}


app.get('/injuries', (req, res) => {
    fetchPI().then(text => {
        res.json(text);
    });
});

async function fetchPI() {

    try {
        // connect the client to the server
        await client.connect();
        // connection with the test database
        const database = client.db("planes");
        // connect with the card collection
        const collection = database.collection('injuries');
        // fetch the cards from the database
        const text = await collection.find().toArray();
        // return the cards
        return text;
    } finally {
        // client will close when finish/error
        await client.close();
    }
}
