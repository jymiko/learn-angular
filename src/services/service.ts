import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

export abstract class Service {

    catchError(err: any, caught:Observable<any>) 
    {
        console.log(err);
        console.log(caught);

        return caught;
    }
}