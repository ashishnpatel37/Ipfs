import { async, ComponentFixture,inject, TestBed} from '@angular/core/testing';

import { HeaderComponent } from './header.component';
//import { DataService } from '../data.service';
//import { Component, Injectable } from "@angular/core";
// import { QuestionServiceService } from '../question-service.service';
// import { QuestionSequenceManagerService } from '../question-sequence-manager.service';
// import { QuestionsApi, Questions, M_users } from '../shared/sdk/index';
// import { SocketConnection } from '../shared/sdk/sockets/socket.connections';
// import { SocketDriver } from '../shared/sdk/sockets/socket.driver';
// import { M_usersApi } from '../shared/sdk/services/custom/M_users';
import { Http, HttpModule,ConnectionBackend } from '@angular/http';
//import { DataTablesModule } from 'angular-datatables';
//import { SDKModels, LoopBackAuth, InternalStorage, JSONSearchParams, ErrorHandler, LoggerService, RealTime} from '../shared/sdk/index';
import {
  ReactiveFormsModule,
  FormsModule,
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from '@angular/forms';
import { RouterModule, Router  } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import 'rxjs/add/observable/throw';
import{Observable} from 'rxjs/Observable'
import { Location } from '@angular/common';
import { NO_ERRORS_SCHEMA }  from '@angular/core';
describe('HeaderComponent', () => {

  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  //let service: DataService;
  let location, router;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[FormsModule,HttpModule,RouterTestingModule.withRoutes([
        { path: 'dashboardHome', component:HeaderComponent  }
      ]),RouterModule],            
      declarations: [ HeaderComponent],
      //providers: [M_usersApi,LoopBackAuth,Location,ConnectionBackend, InternalStorage, JSONSearchParams,SDKModels,SocketConnection,SocketDriver,DataService,QuestionsApi,QuestionSequenceManagerService,QuestionServiceService,HttpModule,DataService,DataTablesModule],
      schemas:      [ NO_ERRORS_SCHEMA ] 
    })
    .compileComponents();
   
  })
);

beforeEach(inject([Router, Location], (_router: Router, _location: Location) => {
  location = _location;
  router = _router;
}));

  it('should create logout', async() => {
    let fixture = TestBed.createComponent(HeaderComponent);
    fixture.detectChanges()
  let component = fixture.componentInstance;
 //component.logout();
 router.navigate(['/dashboardHome']).then(() => {
  expect(location.path()).toBe('/dashboardHome');
  
  });})
  it('should throw error message', () => {
    let fixture = TestBed.createComponent(HeaderComponent);
    fixture.detectChanges()
  let component = fixture.componentInstance;
    var error = 'error from server'
    // let spy =spyOn(router,'navigate').and.returnValue(Observable.throw(error));
    // component.logout()
    //     expect(spy).toBe('error');
})


it('should check for cars length', () => {
  let fixture = TestBed.createComponent(HeaderComponent);
  fixture.detectChanges()
let component = fixture.componentInstance;
  var error = 'error from server'

//   component.getCars().subscribe( result => {         
//     expect(result.length).toBeGreaterThan(0);
// } );      
})

}

);
