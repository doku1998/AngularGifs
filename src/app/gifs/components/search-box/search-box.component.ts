

import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../../services/gifs.service';

@Component({
  selector: 'gifs-search-box',
  template: `
  <h5>buascar: </h5>
  <input type="text"
    class="form-control"
    placeholder="buscar gifs..."
    (keyup.enter)="searchTag()"
    #txtTagInput
  >
  `
})

export class SearchBoxComponent {

  @ViewChild('txtTagInput')
  public tagInput!:ElementRef<HTMLInputElement>;

  constructor(private GifsService: GifsService) { }

  searchTag():void {
    const newTag = this.tagInput.nativeElement.value;

    this.GifsService.searchTag(newTag);

    this.tagInput.nativeElement.value='';
  }

}
