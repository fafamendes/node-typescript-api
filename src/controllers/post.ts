import { Controller, Get } from '@overnightjs/core';
import { Request, Response } from 'express';

@Controller('post')
export class PostController {
  
  @Get('')
  public getPosts(req: Request, res: Response): void {
    res.send([
      {
        id: 1,
        msg: 'Olá'
      }
    ])
  }
}