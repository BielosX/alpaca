import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-containers',
  templateUrl: './containers.component.html',
  styleUrls: ['./containers.component.css']
})
export class ContainersComponent implements OnInit {
  containers: Array<String> = ["test", "test2"];
  constructor() { }

  ngOnInit() {
  }

}
