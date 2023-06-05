export class Users {
    public Id: number;
    public name: string;
    public email:string;
    public pwd:string;
    public role:string;
    
    constructor(Id:number,name: string,pwd:string,email:string,role:string) {
    this.Id = Id;
    this.name = name;
    this.pwd = pwd;
    this.email = email;
    this.role = role;
    }
    }