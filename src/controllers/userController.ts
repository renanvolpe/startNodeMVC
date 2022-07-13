import { Request, Response } from "express";

export const nome = (req: Request, res: Response)=>{
    console.log("query String", req.query);
    let nome: string = req.query.nome as string;
    res.render('pages/nomes',{
        nome,
    })
}

export const idadeGet = (req: Request, res: Response)=>{
    res.render('pages/idade')
}

export const idadePost = (req: Request, res: Response)=>{
    
    console.log("Query String do post", req.query);
    console.log("Body String do post", req.body);
    
    let idade: number = parseInt(req.body.idade as string);
    let anoNascimento: number = (new Date()).getFullYear() - idade;
    
    
    res.render('pages/idade',{
        
        anoNascimento
    })
}