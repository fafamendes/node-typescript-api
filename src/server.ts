import './util/module-alias';
import { Server } from '@overnightjs/core';
import bodyParser from 'body-parser';
import { PostController } from './controllers/post';
import { Application } from 'express';
import * as database from '@src/database';

export class SetupServer extends Server {
  constructor(private port = 3000) {
    super();
  }

  public async init(): Promise<void> {
    this.setupExpresss();
    this.setupControllers();
    await this.setupDatabase();
  }

  public getApp(): Application {
    return this.app;
  }

  public async close(): Promise<void> {
    await database.close();
  }

  private setupExpresss(): void {
    this.app.use(bodyParser.json())
  }

  private async setupDatabase(): Promise<void> {
    await database.connect();
  }

  private setupControllers(): void {
    const postController = new PostController();
    this.addControllers([postController]);
  }
}