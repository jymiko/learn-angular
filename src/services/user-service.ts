import { Injectable } from "@angular/core";
import { Service } from "./service";
import { HttpClient } from "@angular/common/http";
import { catchError, retry } from "rxjs";


@Injectable({
  providedIn:'root'
})
export class UserService extends Service {
  constructor(private http:HttpClient){
    super()
  }

  public GetUserList(){
    return this.http.get("https://jsonplaceholder.typicode.com/users").pipe(
      retry(3),
      catchError(this.catchError)
    )
  }
}