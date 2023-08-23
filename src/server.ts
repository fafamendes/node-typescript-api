import './util/module-alias';
import { Server } from '@overnightjs/core';
import bodyParser from 'body-parser';
import { PostController } from './controllers/post';
import { Application } from 'express';

export class SetupServer extends Server {
  constructor(private port = 3000) {
    super();
  }

  public init(): void {
    this.setupExpresss();
    this.setupControllers();
  }

  public getApp(): Application{
    return this.app;
  }

  private setupExpresss(): void {
    this.app.use(bodyParser.json())
  }

  private setupControllers(): void {
    const postController = new PostController();
    this.addControllers([postController]);
  }
}