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


  //criar um usuário a partir do method Post da home.mu
  let newUserName: string = req.body.name;
  let newUserAge: string = req.body.age;

  if(newUserName){
    const newUser = User.build({
      name: newUserName,
      age: newUserAge
    });
    await newUser.save();
  }


  //criando um usuario no banco, duas maneiras:

  //1 - build + save
  const usuario1 = User.build({
    name: "Pablo",
    age: 28
  });

  //await usuario1.save();

  
  //2 - create
  /*const usuario2 = await User.create({
    name: "bonde",
    age: 80
  })*/

  //atualizando dados do banco
  /*await User.update(
    {
      age: 18
    },
    {
      where: {
        age: {
          [Op.lt]: 18
        }
        
      }
    }
  );*/

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

  let users5 = await User.findAll({
    where:{
      age: {
            [Op.gte]: 18
           } 
    },
    order: [['name', 'DESC']]  //DESC = =ordenar pelo nome   
  });

  let users6 = await User.findAll({
    where:{
      age: {
            [Op.gte]: 18
           } 
    },
    limit: 2, // limita exibição
    offset: 2 //pula dois itens para começar a exibir
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
     users4: users4,
     users5: users5,
     users6: users6
    });
}