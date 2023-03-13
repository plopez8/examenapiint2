import { Component } from '@angular/core';
import { ApiService } from '../../Services/api.service';


@Component({
  selector: 'app-dnd',
  templateUrl: './dnd.component.html',
  styleUrls: ['./dnd.component.css']
})
export class DndComponent {
  monsters = Array<any>();

  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.getMonstres();
  }

  getMonstres(): void {
    this.api.getMonsters().subscribe((data: any) => {
      this.monsters = data.results;
    });
  }
  

  viewinfo(){
    console.log("viewinfo");
  }
}
