import { Component, OnInit } from '@angular/core';

@Component({
  //selector: 'app-servers',
  // selector: '[app-servers]', //Como ID
   selector: '.app-servers',
  templateUrl: './servers.component.html',
  // template:`
  //   <app-server></app-server>
  //   <app-server></app-server>
  //   `,
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer=false;
  serverCreateStatus="No Server was created!";
  constructor() { 
    setTimeout(()=>{
      this.allowNewServer=true;
    },3000);
  }

  ngOnInit() {
  }

  onCreateServer(){
    this.serverCreateStatus="Server was created!";
  }
}
