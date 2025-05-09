import express from "express";

const app = express(); 
const PORT = 3000;
const arrayResponse = [
    {name: "diego", company: "Hashtag programação"}, 
    {name: "antonio", company: "Hashtag treinamentos"}
];

app.get('/', (request, response) => {
    response.json(arrayResponse);
});

app.listen(PORT, () => {
    console.log(`o servidor esta rodando na porta ${PORT}`)
});