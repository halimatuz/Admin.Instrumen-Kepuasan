import { Component, OnInit } from '@angular/core';
import { Pertanyaan } from '../services/pertanyaan/pertanyaan.model';
import { PertanyaanService  } from '../services/pertanyaan/pertanyaan.service';
import { Details } from '../services/details/details.model';
import { DetailsService  } from '../services/details/details.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  public criteria = "";
  pertanyaan: Pertanyaan[];
  detail: Details[];
  constructor(private pertanyaanService: PertanyaanService,
              private DetailsService: DetailsService ) { }

  ngOnInit() {
    
    this.pertanyaanService.getPertanyaan().subscribe(data => {
      this.pertanyaan = data.map(e => {
        return {
          id: e.payload.doc.id,
          ...e.payload.doc.data() as Pertanyaan 
      };
      })
      console.log(this.pertanyaan);
    });
    this.DetailsService.getDetails().subscribe(data => {
      this.detail = data.map(e => {
        return {
          id: e.payload.doc.id,
          ...e.payload.doc.data() as Details 
      };
      })
      console.log(this.detail);
    });
}
}
