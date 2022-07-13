import { Request, Response } from "express";

import {Product} from '../models/Product'

export const paginaHome = (req: Request, res: Response) => {
    // res.send('Olá mundo');

    let showWelcome: boolean = false
    //enviando um objeto user com nome e idade
    let user= {
     name: "Renan",
     idade: 10
    }

    if(user.idade < 15)
      showWelcome = true;

      let list = Product.getAll();
      let expensiveList = Product.getPrice(20);

    
    //tratamento de variaveis é realizado anteriomente ao envio, só pode enviar o resultado
    //"home" é o nome da .mustache, entao vai procurar o "home.mustache"
    res.render('pages/home', {
     user: user,
     lastName: "Volpe",
     showWelcome: showWelcome,
     products: list,
     productExpensive: expensiveList,
     fraseDoDia: [
         'testando outra lista',
         'lista diferenciada'
     ],
     
    });
}