//import { M_usersApi } from './../shared/sdk/services/custom/M_users';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import{Observable} from 'rxjs/Observable'
import 'rxjs/add/observable/of';
//import { RisksApi, Risks } from '../shared/sdk';
import { find } from 'rxjs/operators/find';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  // arrayResultRisks :Array<Risks> = [];

  // constructor( private _router:Router,private m_user:M_usersApi,private _risk:RisksApi) {
  //     _risk.find().subscribe((_risk_result)=>{
  //      // console.log(_risk_result);
  //       this.arrayResultRisks = <Risks[]> _risk_result;
  //       console.log(this.arrayResultRisks)
  //     })
  //  }

  ngOnInit() {
  }
  // logout(){

  //   console.log("in logout");
  //   this.m_user.logout().subscribe((result)=>{
  //     console.log(result)
  //     console.log("Success");
  //     this._router.navigate(['']);
  //   },(err)=>{
  //     console.log("Error");

  //     console.log(err);
  //   })

  // }  

//   getCars():Observable<any>{
//     return Observable.of ([17]);
// }
}
