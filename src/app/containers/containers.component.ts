import { ContainersService, Container } from './../containers.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-containers',
  templateUrl: './containers.component.html',
  styleUrls: ['./containers.component.scss']
})
export class ContainersComponent implements OnInit {
  private containersService: ContainersService;

  containers: Promise<Array<Container>>;

  constructor(containersService: ContainersService) {
    this.containersService = containersService;
  }

  ngOnInit() {
    this.containers = this.containersService.getContainers();
  }
}
