import { Component, Input } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @Input() user: any;

  // user: any;

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

  ngOnChanges() {
    console.log(this.user);
  }

  handleImageError(event: any) {
    event.target.src = 'path/to/placeholder-image.jpg'; // Replace with the path to your placeholder image
  }
}


// import { Component, Input } from '@angular/core';
// import { AppComponent} from "../app.component";

// @Component({
//   selector: 'app-header',
//   templateUrl: './header.component.html',
//   styleUrls: ['./header.component.scss'],
 
// })
// export class HeaderComponent {
//   @Input() user:any;
// // [x: string]: any;

//   ngOnChanges() {
//     console.log(this.user)
//   }
//   handleImageError(event: any) {
//     event.target.src = 'path/to/placeholder-image.jpg'; // Replace with the path to your placeholder image
//   }
// }
