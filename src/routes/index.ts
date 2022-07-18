import {Router} from 'express'


//import {paginaHome}  from '../controllers/homeController';    OU
import * as homeController  from '../controllers/homeController';
import * as contatoController  from '../controllers/contatoController';
import * as infoController  from '../controllers/infoController';
import * as usuarioController from '../controllers/userController';
const router = Router();




router.get('/', homeController.paginaHome);
router.post('/', homeController.paginaHome);

router.get('/contato', contatoController.contatoHome);
router.get('/sobre', infoController.sobreHome);

router.get('/nomes',usuarioController.nome );
//get é usado para exibição
router.get('/idade',usuarioController.idadeGet );
//post, usado para calculo também para exibição
router.post('/idade', usuarioController.idadePost );

export default router;