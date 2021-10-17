import { Injectable } from '@angular/core';

@Injectable()
export class ClientService {
  client: Client = { nom: 'Jacques', prenom: 'Jean' };
  count: number = 0;
  constructor() {}
  public getClient(): Client {
    this.count++;
    return this.client;
  }
}
