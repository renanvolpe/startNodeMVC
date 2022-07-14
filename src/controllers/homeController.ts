import { Request, Response } from "express";

import {sequelize} from '../instances/mysql'

import {Product} from '../models/Product'
import {User} from '../models/User';

export const paginaHome = async (req: Request, res: Response) => {
  try {
    await sequelize.authenticate;
    console.log("conectou no banco de dados")
  } catch (error) {
      console.log("deu erro na conexão", error)
  }

  let users = await User.findAll(); //users é um array de usuários
  
  console.log("USUARIOS: ", JSON.stringify(users));
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
     users: users
    });
}