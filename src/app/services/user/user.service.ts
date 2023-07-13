import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SinupUserRequest } from 'src/app/models/interfaces/user/SinupUserRequest';
import { SignupUserResponse } from 'src/app/models/interfaces/user/SinupUserResponse';
import { AuthRequest } from 'src/app/models/interfaces/user/auth/AuthRequest';
import { AuthResponse } from 'src/app/models/interfaces/user/auth/AuthResponse';
import { envioment } from 'src/envioments/envioment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private API_URL= envioment.API_URL;

  constructor(private http:HttpClient) { }

  snupUser(requestDatas: SinupUserRequest): Observable<SignupUserResponse>{
    return this.http.post<SignupUserResponse>(
      `${this.API_URL}/user`, requestDatas
    );
  }

  authUser(requestDatas: AuthRequest): Observable<AuthResponse>{
    return this.http.post<AuthResponse>(
      `${this.API_URL}/auth`, requestDatas
    );
  }
}
