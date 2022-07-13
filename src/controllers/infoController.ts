import { Request, Response } from "express";

export const sobreHome = (req: Request, res: Response) => {
    res.render('pages/sobre');
}