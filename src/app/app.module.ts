import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import {ReleasePageModule} from '../pages/release/release.module';

import { DeliveryProvider } from '../providers/delivery/delivery';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { DeleteCapitalPipe}  from '../pipe/delete-capital'



@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TabsPage,
    DeleteCapitalPipe
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
    HttpModule,
    ReleasePageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DeliveryProvider
  ]
})
export class AppModule {}
