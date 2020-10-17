import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class ContainersService {

  constructor() { }

  async getContainers(): Promise<Array<String>> {
    const result = await axios.get('/assets/containers.json');
    return result.data;
  }

}
