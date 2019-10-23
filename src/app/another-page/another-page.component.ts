import { Component, OnInit } from '@angular/core';
import {Ui} from "../shared/services/ui.service";

@Component({
  selector: 'app-another-page',
  templateUrl: './another-page.component.html',
  styleUrls: ['./another-page.component.scss']
})
export class AnotherPageComponent implements OnInit {

  constructor(public ui: Ui) { }

  ngOnInit() {
  }

}
