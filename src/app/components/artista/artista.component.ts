import { Component } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { SpotifyService } from '../../services/spotify.service';
@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styles: []
})
export class ArtistaComponent {

  artist : any = {};
  topTracks : any = {};
  loading:boolean;

  constructor(private router:ActivatedRoute,private spotify:SpotifyService){
    this.router.params.subscribe(params =>{
      this.getArtist(params['id']);
      this.getTopTracks(params['id']);
    });
  }

  getArtist(id:string){

    this.loading = true;
    this.spotify.getArtist(id)
    .subscribe(artist =>{
    this.artist = artist;
    this.loading = false;
   });
  }


  getTopTracks(id:string){
    this.spotify.getTopTracks(id).subscribe(tracks =>{
      this.topTracks = tracks;
    });
  }
}
