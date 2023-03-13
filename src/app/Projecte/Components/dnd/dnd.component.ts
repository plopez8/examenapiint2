import { Component } from '@angular/core';
import { ApiService } from '../../Services/api.service';


@Component({
  selector: 'app-dnd',
  templateUrl: './dnd.component.html',
  styleUrls: ['./dnd.component.css']
})
export class DndComponent {
  monsters = Array<any>();
  url = "https://www.dnd5eapi.co";
  image = String;
  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.getMonstres();
  }

  getMonstres(): void {
    this.api.getMonsters().subscribe((data: any) => {
      this.monsters = data.results;
    });
  }

  getImage(name: String){
    this.api.getImage(name).subscribe((data: any) => {
      if(data.image == null){
        console.log("No te imatge");
      }else{
              this.image = data.image;
      }

    });
  }

  viewInfo(){
    console.log("hola");
  }

}
