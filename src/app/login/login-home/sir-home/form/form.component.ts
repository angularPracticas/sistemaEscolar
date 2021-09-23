import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  maxLength: number = 7;
  checkUser: any;
  email!: string;
  id!: string;
  maestros: Array<any> = [];
  constructor() { 
    
    this.maestros = [
      {
        name: 'Alberto',
        surname: 'Caracas',
        lastName: 'Muños',
        idSchool: '1234567',
        email: 'alberto@gmail.com',
        profile: 'https://cdn-icons-png.flaticon.com/512/1621/1621561.png'
      },
      {
        name: 'Oscar',
        surname: 'Caracas',
        lastName: 'Muños',
        idSchool: '1234598',
        email: 'oscar@gmail.com',
        profile: 'https://cdn-icons-png.flaticon.com/512/1621/1621561.png'
      }  
    ];
  }

  getEmail(email: string){
    this.email = email;
    console.log(this.email);
  }

  getIdSchool(id: string){
    this.id = id;
    console.log(this.id);
  }

  checkTeacher(){
      this.checkUser = this.maestros.some((maestro) =>{
        return maestro.email === this.email && maestro.idSchool === this.id;
      })
      console.log(this.checkUser); 
  }

  ngOnInit(): void {
    
  }

}


