import {Role} from "./role.model";

export class User {
    id:number;
    firstName:string;
    lastName:string;
    username:string;
    password:string;
    email:string;
    roles:Role;
}
