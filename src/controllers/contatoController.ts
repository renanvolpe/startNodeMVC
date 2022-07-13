import { Request, Response } from "express";

export const contatoHome = (req: Request, res: Response) => {
    res.render('pages/contato');
}