import {Component} from '@angular/core';

import {BaMsgCenterService} from './baMsgCenter.service';
import { Socket } from 'ng-socket-io';
import {Observable} from "rxjs/Observable";
import {AuthGuard} from "../../../pages/auth.guard";
import {Router} from "@angular/router";
@Component({
  selector: 'ba-msg-center',
  providers: [BaMsgCenterService],
  styleUrls: ['./baMsgCenter.scss'],
  templateUrl: './baMsgCenter.html'
})
export class BaMsgCenter {

  public notifications:Array<Object> = [];
  public messages:Array<Object>;

  constructor(private _baMsgCenterService:BaMsgCenterService,
              private socket: Socket,
              public authGuard: AuthGuard,
              public router: Router) {
    // this.notifications
   /* this._baMsgCenterService.getNotifications()
      .subscribe(res=>{
        console.log(res);
        if(res.success)
        {
          this.notifications = res.notifications;
        }
      });
    this.messages = this._baMsgCenterService.getMessages();
    this.socket.removeAllListeners();
    this.socket.connect();
    this.socket.on('connect', () => {
      console.log('connected');
      this.socket.emit('authenticate', {token: localStorage.getItem('user_token')}); //send the jwt
    });
    let role = this.authGuard.role();
    // if(role == 'v_a_s_'){
    //   this.getVenderNotificaion().subscribe(notification => {
    //     console.log('notification');
    //     console.log(notification);
    //       this.notifications.push(notification);
    //   });
    // }
    if(role != 'v_a_s_'){
      this.getAdminNotificaionClient().subscribe(notification => {
        console.log('notification');
        console.log(notification);
        this.notifications.push(notification);
      });
      this.getAdminNotificaionVendor().subscribe(notification => {
        console.log('notification');
        console.log(notification);
        this.notifications.push(notification);
      });
    }*/
  }
  getAdminNotificaionClient() {
    let observable = new Observable(observer => {
      this.socket.on('notificationbroadcastclient', (data) => {
        // console.log(data);
        observer.next(data);
      });
    });
    return observable;
  }
  getAdminNotificaionVendor() {
    let observable = new Observable(observer => {
      this.socket.on('notificationbroadcastvendor', (data) => {
        // console.log(data);
        observer.next(data);
      });
    });
    return observable;
  }
  messageSeen(msg: any)
  {
    this._baMsgCenterService.notificationSeen(msg._id)
      .subscribe(res=>{
        if(res.success)
        {
          if(msg.type == 'dispute')
          {
            this.router.navigate(['/pages/disputes/viewdispute', msg.dispute_id]);
          }
        }
      })
  }
}
