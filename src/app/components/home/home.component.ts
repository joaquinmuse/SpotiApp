import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent {

  newSongs: any[] = [];
  loading:boolean;
  error:boolean;
  mensajeError:string;

  constructor( private spotify: SpotifyService ) {
  this.loading = true;
  this.error = false;

    this.spotify.getNewReleases()
        .subscribe( 
          (data: any) => {
          console.log(data);
          this.newSongs = data;
          this.loading = false;
        }
        ,
        (serviceError)=>{
          console.log(serviceError);
          this.error = serviceError;
          this.mensajeError = serviceError.error.error.message;
        }
        );



}
}
