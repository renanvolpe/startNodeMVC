"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const server = (0, express_1.default)();
server.get('/', (req, res) => {
    res.send('Olá mundo');
});
server.get('/noticia/:slug', (req, res) => {
    let slug = req.params.slug;
    res.send(`Olá na notícia: ${slug} `);
});
server.get('/voo/:origem-:destino', (req, res) => {
    let { origem, destino } = req.params;
    res.send(`Procurando voos de ${origem.toLocaleUpperCase} até ${destino.toLocaleUpperCase}  `);
});
server.listen(3000);
