import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  array1 = [1,2,3,4];

  bdMaestro = [
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
      idSchool: '1234568',
      email: 'oscar@gmail.com',
      profile: 'https://cdn-icons-png.flaticon.com/512/1621/1621561.png'
    }
  ];

  checkUser(){
    for(let a of this.bdMaestro){
      console.log(a.idSchool);
    }
  }

}
