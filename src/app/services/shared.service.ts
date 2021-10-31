import { Injectable, isDevMode } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable,throwError } from 'rxjs';
import { retry, catchError, tap } from 'rxjs/operators';
import { EmailValidator } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  endPointContact: string = 'api/contact/contact/';
  endPointCareer: string = 'api/career/opening/career/opening/';
  endPointPortfolio: string = 'api/portfolio/item/portfolio/item/';
  endPointBlog: string = 'api/blog/blog/';

  headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private http: HttpClient) { }




  // Contact
  getContactList(): Observable<any[]>{
    return this.http.get<any[]>(this.endPointContact, {headers: this.headers});
  }

  addContact(val: any){
    const body=JSON.stringify(val);
    console.log(body)
    return this.http.post(this.endPointContact, body, {headers: this.headers})
    .pipe(
      retry(1),
      catchError(this.httpError)
    )
    .pipe(tap(this.retry))
  }
  updateContact(val: any){
    return this.http.put(this.endPointContact, val, {headers: this.headers})
    .pipe(
      retry(1),
      catchError(this.httpError)
    )
    .pipe(tap(this.retry))
  }
  deleteContact(val: any){
    return this.http.delete(this.endPointContact + val, {headers: this.headers})
    .pipe(
      retry(1),
      catchError(this.httpError)
    )
    .pipe(tap(this.retry))
  }





  //Career
  getCareerList(){
    return this.http.get(this.endPointCareer, {headers: this.headers});
  }
  addCareer(val: any){
    const body=JSON.stringify(val);
    console.log(body)
    return this.http.post(this.endPointCareer, body, {headers: this.headers})
    .pipe(
      retry(1),
      catchError(this.httpError)
    )
    .pipe(tap(this.retry))
  }
  updateCareer(val: any){
    return this.http.put(this.endPointCareer, val, {headers: this.headers})
    .pipe(
      retry(1),
      catchError(this.httpError)
    )
    .pipe(tap(this.retry))
  }
  deleteCareer(val: any){
    return this.http.delete(this.endPointCareer + val, {headers: this.headers})
    .pipe(
      retry(1),
      catchError(this.httpError)
    )
    .pipe(tap(this.retry))
  }








// Portfolio items or Projects
getProjectList(){
  return this.http.get(this.endPointPortfolio, {headers: this.headers});
}
addProject(val: any){
  const body=JSON.stringify(val);
  console.log(body)
  return this.http.post(this.endPointPortfolio, body, {headers: this.headers})
  .pipe(
    retry(1),
    catchError(this.httpError)
  )
  .pipe(tap(this.retry))
}
updateProject(val: any){
  return this.http.put(this.endPointPortfolio, val, {headers: this.headers})
  .pipe(
    retry(1),
    catchError(this.httpError)
  )
  .pipe(tap(this.retry))
}
deleteProject(val: any){
  return this.http.delete(this.endPointPortfolio + val, {headers: this.headers})
  .pipe(
    retry(1),
    catchError(this.httpError)
  )
  .pipe(tap(this.retry))
}







// Blogs
getBlogList(){
  return this.http.get(this.endPointBlog, {headers: this.headers});
}
addBlog(val: any){
  const body=JSON.stringify(val);
  console.log(body)
  return this.http.post(this.endPointBlog, body, {headers: this.headers})
  .pipe(
    retry(1),
    catchError(this.httpError)
  )
  .pipe(tap(this.retry))
}
updateBlog(val: any){
  return this.http.put(this.endPointBlog, val, {headers: this.headers})
  .pipe(
    retry(1),
    catchError(this.httpError)
  )
  .pipe(tap(this.retry))
}
deleteBlog(val: any){
  return this.http.delete(this.endPointBlog + val, {headers: this.headers})
  .pipe(
    retry(1),
    catchError(this.httpError)
  )
  .pipe(tap(this.retry))
}










  // Handle Errors
  retry(val:any){
    if(isDevMode()){
      console.log(val)
    }
  }


  httpError(error: { error: { message: string; }; status: any; message: any; }) {
    let msg = '';
    if(error.error instanceof ErrorEvent) {
      // client side error
      msg = error.error.message;
    } else {
      // server side error
      msg = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(msg);
    return throwError(msg);
  }

}
