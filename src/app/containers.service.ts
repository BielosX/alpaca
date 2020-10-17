import { Injectable } from '@angular/core';
import axios from 'axios';

export interface Container {
  Image: string
}

@Injectable({
  providedIn: 'root'
})
export class ContainersService {

  constructor() { }

  async getContainers(): Promise<Array<Container>> {
    const result = await axios.get('/assets/containers.json');
    return result.data;
  }

}
