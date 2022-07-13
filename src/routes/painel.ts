import {Router, Request, Response} from 'express'

const router = Router();

router.get('/', (req: Request, res: Response) => {
        res.send('Olá no painel');
});

router.get('/contato', (req: Request, res: Response) => {
    res.send('Formulário de contato do painel');
});

router.get('/sobre', (req: Request, res: Response) => {
    res.send('Página institucional sobre o painel');
});

export default router;