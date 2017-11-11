import { HttpClient } from '@angular/common/http';
import { Http} from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';


/*
  Generated class for the DeliveryProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DeliveryProvider {
  ApiKey : any;
  url;
  constructor(
    public http2:Http,
    public http1: HttpClient) {
    this.ApiKey="caa6f38808de05b6e5b20cc9af4a75e9";
  }
  
  getDelivery(com,no){
    console.log(`https://v.juhe.cn/exp/index?key=${this.ApiKey}&com=${com}&no=${no}`)
    return this.http2.get(`https://v.juhe.cn/exp/index?key=${this.ApiKey}&com=${com}&no=${no}`)
            .map(res => res.json())

  }

}
