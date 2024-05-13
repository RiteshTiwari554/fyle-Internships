import { Component, OnInit } from '@angular/core';
import { ApiService } from './services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  user: any;

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.apiService.getUser('amanmishra7ave').subscribe(
      (data: any) => {
        this.user = data;
      },
      (error) => {
        console.error('Error fetching user:', error);
      }
    );
  }
}


// import { Component, OnInit } from '@angular/core';
// import { ApiService } from './services/api.service';

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.scss']
// })
// export class AppComponent implements OnInit{
//   getUser:any;
//   constructor(
//     private apiService: ApiService
//   ) {
//     apiService.getUser("amanmishra7ave").subscribe((data)=>{
//       console.log("data",data)
//       this.getUser=data
//     }) 
//   }

//   ngOnInit() {
//     this.apiService.getUser('johnpapa').subscribe(console.log);
//   }
// }
