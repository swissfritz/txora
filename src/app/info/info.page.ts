import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InAppBrowser } from '@awesome-cordova-plugins/in-app-browser/ngx';

@Component({
  selector: 'app-info',
  templateUrl: './info.page.html',
  styleUrls: ['./info.page.scss'],
})
export class InfoPage implements OnInit {

  constructor(private router: Router, private iab: InAppBrowser) { }

  ngOnInit() {
  }

  goCor() {
    this.router.navigateByUrl('/cor');
  }

  goCam() {
    this.router.navigateByUrl('/cam');
  }

  goAus() {
    this.router.navigateByUrl('/poli');
  }

  goPark() {
    this.router.navigateByUrl('/park');
  }

  goWer() {
    this.router.navigateByUrl('/werpr');
  }

  goFar() {
  this.router.navigateByUrl('/fahr');
  }

  goSchl() {
    this.router.navigateByUrl('/schul');
  }

  goWeb() {
    this.router.navigateByUrl('/austt');
  }

}
