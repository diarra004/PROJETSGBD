import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class ApiService {
  constructor(private http: HttpClient) {}
  postRapport(data: any) {
    const headers = {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjExLCJlbWFpbCI6InNhbWJhQGVzcC5zbiIsImlhdCI6MTcxMjY5MTM0MX0.guke1A19phHWb5cE_8BnhlJJtQ1JCGbFp_8ZN0lMTKo",
    };
    return this.http.post<any>("http://localhost:3000/rapport/creer", data, {
      headers,
    });
  }
  getProduct() {
    return this.http.get<any>("http://localhost:3000/productList/");
  }

  getRapport() {
    const headers = {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjExLCJlbWFpbCI6InNhbWJhQGVzcC5zbiIsImlhdCI6MTcxMjY5MTM0MX0.guke1A19phHWb5cE_8BnhlJJtQ1JCGbFp_8ZN0lMTKo",
    };
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
}
