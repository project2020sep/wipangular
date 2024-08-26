 export class Employee{
    empid !: number;
    ename !:string;
    phone !: number;
    city !:string;

    constructor(empid:number,ename:string,phone:number,city:string){
        this.empid = empid;
        this.ename =ename;
        this.phone = phone;
        this.city = city;
    }
}

