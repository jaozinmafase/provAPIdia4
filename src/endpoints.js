import { Router } from "express";
import { diaSemana, semaforo, fatorial, sequencia} from "./services.js";
const server= Router();



server.get('/dia4/semaforo/:cor', (req, resp) =>{
        try{
            const {cor} = req.params;
            const primaria = semaforo(cor);

            resp.send ({
                primaria: primaria
            })
        }catch(err){
            resp.status(404).send({
                 erro: err.message

            })
        }
})


server.get('/dia4/diasemana', (req, resp) => {
    try {
        const {dia}= req.query;
        const semana = diaSemana(dia);

        resp.send({
            dia:semana
        })
    }
        catch(err){
            resp.status(404).send ({
                erro:err.message
            })
        }
    
})

server.post('/dia4/fatorial', (req, resp) => {
    try {
        const num = Number(req.query.num)

        const res = (fatorial(num)) ;

        resp.send({
            sequencia: res
        })
    }
    catch(err){
        resp.status(404).send ({
                erro:err.message
        })
    }
})

server.post('/dia4/sequencia', (req, resp)=> {
    try {
        const limite = req.body.limite;
        const numeros = sequencia(limite);

        resp.send({
            pares: numeros
        })

    }
    catch (err) {
        resp.status(404).send ({
            error:err.message
        })
    }
})


export default server;
