import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
// import { isNumber, isString } from 'util';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {

  id: any;

  constructor(private activatedRoute: ActivatedRoute) {
    // this.id = Number(activatedRoute.snapshot.params.id);
    this.id = activatedRoute.snapshot.params.id;
    if (+this.id === +activatedRoute.snapshot.params.id) { // + === +
      this.id = +activatedRoute.snapshot.params.id;
      console.log('id === ' + this.id);
      console.log('id === ' + typeof this.id);
    } else if (typeof this.id === 'string') {
      this.id = 'id не равняется типу number';
      console.log('string === ' + typeof this.id);
    } else {
      this.id = 'id не определен';
      console.log('id === ' + typeof this.id);
    }
  }

  ngOnInit(): void {
  }

}
