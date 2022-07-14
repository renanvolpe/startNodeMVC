import { Request, Response } from "express";
import{Op} from 'sequelize';

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

  let users1 = await User.findAll({
    attributes:{
     // ['name', 'age']//filtragem
     exclude: ['id'] //exclui da chamada
    
    }  ,
    where:{
      [Op.or]: [ // filtragem com "or" de valores
      {age: 40},
      {name: 'Renan'}
    ]
    } 
    
  }); 

  let users2 = await User.findAll({
    attributes:{
     // ['name', 'age']//filtragem
     exclude: ['id'] //exclui da chamada
    
    }  ,
    where:{
      age: 40 //filtragem direta do valor
    } 
    
  });

  let users3 = await User.findAll({
    attributes:{
     // ['name', 'age']//filtragem
     exclude: ['id'] //exclui da chamada
    
    }  ,
    where:{
      age: {[Op.or]: [40, 30]}
    } 
    
  });

  let users4 = await User.findAll({
    
    where:{
      age: {
            [Op.gt]: 10
           } //gt -> "maior que". gte -> "maior igual que". lt -> "menor que". lte -> Menor ou igual que. 
    }        //between -> "entre os valores"(precisa de array de dois valores). not in -> "nao mostra essea valores"
             //like -> "começam com" (usa-se o % para continuar, Ex: Re%, ou  %na%)
    
  });
  
  
  //console.log("USUARIOS: ", JSON.stringify(users));
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
     users1: users1,
     users2: users2,
     users3: users3,
     users4: users4
    });
}