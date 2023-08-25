import { Component, Input } from '@angular/core';
import { GifsService } from '../../../gifs/services/gifs.service';

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  constructor(private gifsService:GifsService){ }

  get tag(): string[]{
    return this.gifsService.tagsHistory;
  }

  sendTag(tag:string):void{
    this.gifsService.searchTag(tag);
  }

}
