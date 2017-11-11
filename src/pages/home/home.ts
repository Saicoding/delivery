import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DeliveryProvider } from '../../providers/delivery/delivery'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  com : string="EMS";
  no : any="9530150074302";
  clicked:boolean=false;

  delivery:any={
      "isDone":false,
      "list":[],
  };
  message:string;

  constructor(
    private deliveryProvider : DeliveryProvider,
    public navCtrl: NavController,
  ) {

  }

  searchDelivery(){
    this.deliveryProvider.getDelivery(this.com,this.no).subscribe((res) =>{
      this.delivery.isDone = (res.resultcode=="200");
      console.log(res.resultcode)
      console.log(res.reason)
      if(res.reason=="查不到物流信息"){ 
        this.delivery.list=[];
      }else{
        this.delivery.list=res.result.list;
      }  
      this.clicked = true;
    }) 
  }

  clearNum(){
    this.no="";
  }

}
