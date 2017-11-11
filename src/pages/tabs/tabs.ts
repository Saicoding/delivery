import { HomePage } from '../home/home';
import { Component } from '@angular/core';
import { ReleasePage} from '../release/release';

@Component({
    selector: 'page-tabs',
    templateUrl: 'tabs.html'
  })

export class TabsPage{
    homePage=HomePage;
    releasePage=ReleasePage;
}