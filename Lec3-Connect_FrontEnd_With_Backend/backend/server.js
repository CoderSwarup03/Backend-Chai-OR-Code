import express from 'express'
const app = express();
const port = process.env.PORT || 5000

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/api/jokes', (req, res) => {
    const jokes = [
        {
            id: 1,
            title: "JavaScript Joke",
            content: "Why did the JS developer go broke? Because he kept using promises!"
        },
        {
            id: 2,
            title: "React Joke",
            content: "Why did the React component break up? It had too many states!"
        },
        {
            id: 3,
            title: "Developer Life",
            content: "I told my computer I needed a break… it said 'No problem, I'll go to sleep.'"
        },
        {
            id: 4,
            title: "Frontend Joke",
            content: "Why do frontend developers hate nature? Too many bugs."
        },
        {
            id: 5,
            title: "Debugging Joke",
            content: "Debugging: Being the detective in a crime movie where you are also the murderer."
        }
    ];
    res.send(jokes);
})

app.listen(port, () => {
    console.log(`Server is running at localhost:${port}`);
})