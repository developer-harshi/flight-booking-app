export class Login {
  userName?: string;
  password?: string;


}
export interface UserForLogin {
  userName: string;
  password: string;
  token: string;
  role:string;
}
