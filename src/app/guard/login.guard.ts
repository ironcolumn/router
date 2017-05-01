import {CanActivate} from "@angular/router";
/**
 * Created by zzy on 2017/5/1.
 */
export class LoginGuard implements CanActivate{
  canActivate(){
    let loggedIN:boolean=Math.random()<0.5;
    if(!loggedIN){
      console.log("用户未登录");
    }
    return loggedIN;
  }


}
