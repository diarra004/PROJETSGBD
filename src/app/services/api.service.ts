import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class ApiService {
  constructor(private http: HttpClient) {}
  postRapport(data: any) {
    const access_token = localStorage.getItem('access_Token') 
    const headers ={
      Authorization:`Bearer ${access_token}`
    }
    return this.http.post<any>("http://localhost:3000/rapport/creer", data, {
      headers,
    });
  }
  getProduct() {
    return this.http.get<any>("http://localhost:3000/productList/");
  }

  getRapport() {
    const access_token = localStorage.getItem('access_Token') 
    const headers ={
      Authorization:`Bearer ${access_token}`
    }
    return this.http.get<any>("http://localhost:3000/rapport/all", { headers });
  }

  login(data: any) {
    const access_token = this.http.post<any>(
      "http://localhost:3000/auth/login",
      data
    );
    return access_token;
  }

  postAvis(data:any){
    const access_token = localStorage.getItem('access_Token') 
    const headers ={
      Authorization:`Bearer ${access_token}`
    }
    return this.http.post<any>("http://localhost:3000/avis/creer",data,{headers})
  }

  getAvis(){
    const access_token = localStorage.getItem('access_Token') 
    const headers ={
      Authorization:`Bearer ${access_token}`
    }

    return this.http.get<any>("http://localhost:3000/avis/all",{headers})
  }

  postPv(data:any){
    const access_token = localStorage.getItem('access_Token') 
    const headers ={
      Authorization:`Bearer ${access_token}`
    }
    return this.http.post<any>("http://localhost:3000/pv/creer",data,{headers})
  } 

  getPv(){
    const access_token = localStorage.getItem('access_Token') 
    const headers ={
      Authorization:`Bearer ${access_token}`
    }
    return this.http.get<any>("http://localhost:3000/pv/all",{headers})
  }
}
