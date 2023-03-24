import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { map, Observable, takeUntil } from "rxjs";
import { environment } from "src/environments/environment";
import { Istudent, IuserSignUp } from "../model/student.interface";



@Injectable({
    providedIn: 'root',
})
export class ApiService {
    api: string = `${environment.fireBaseApi}studentData.json`;
    logIn_api: string = `${environment.fireBaseApi}logIn.json`;
    constructor(
        private _http: HttpClient,
        private _snackbar : MatSnackBar
        ) { };

      snackbar(msg : string, ok : string){
        this._snackbar.open(msg , ok)
      }

    createStudentData(body: Istudent): Observable<{ name: string }> {
        return this._http.post<{ name: string }>(this.api, body);
    }

    feachStudentData(): Observable<Istudent[]> {
        return this._http.get<{ [pro: string]: Istudent }>(this.api).pipe(
            map((data: { [pro: string]: Istudent }) => {
                let studentArr: Istudent[] = [];
                for (let key in data) {
                    studentArr.push({ ...data[key], id: key })
                }
                return studentArr;
            })
        );
    }

    OnEditStudent(id: string): Observable<Istudent> {
        let editUrl = `${environment.fireBaseApi}studentData/${id}.json`;
        return this._http.get<Istudent>(editUrl);
    }

    getSinglePrdouct(id: string): Observable<any> {
        let singleObject = `${environment.fireBaseApi}studentData/${id}.json`;
        return this._http.get<any>(singleObject)
    }

    OnDeleteData(id:string) : Observable<any>{
        let DeleteUrl = `${environment.fireBaseApi}studentData/${id}.json`;
        return this._http.delete<any>(DeleteUrl)
    }

    // LogInUseer : -
    SingUpUserData(body: IuserSignUp) {
        return this._http.post<IuserSignUp>(this.logIn_api, body);
    }

    getSingUpUserData(): Observable<IuserSignUp[]> {
        return this._http.get<{ [key: string]: IuserSignUp }>(this.logIn_api).pipe(
            map((res: { [key: string]: IuserSignUp }) => {
                let usersArray : any = [];
                for (let key in res) {
                    usersArray.push({ ...res[key], id : key })
                }
                return usersArray;
            })
        )
    }
}

