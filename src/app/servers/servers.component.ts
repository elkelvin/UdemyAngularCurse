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
  serverName="TestServer";
  serverCreated=false;
  servers=['TestServer','TestServer 2'];
  constructor() {
    setTimeout(()=>{
      this.allowNewServer=true;
    },3000);
  }

  ngOnInit() {
  }

  onCreateServer(){
    this.serverCreated=true;
    this.servers.push(this.serverName);
    this.serverCreateStatus="Server was created!";
  }

  onUpdateServerName(event:Event){
    this.serverName=(<HTMLInputElement>event.target).value;
  }
}
