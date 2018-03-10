import { Component, OnInit, Input } from '@angular/core';
import { DoCheck, OnChanges, OnDestroy, AfterContentInit, AfterContentChecked } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'app-ciclo',
  templateUrl: './ciclo.component.html',
  styleUrls: ['./ciclo.component.css']
})
export class CicloComponent implements OnInit, OnChanges, DoCheck, OnDestroy, AfterContentInit, AfterContentChecked {

  @Input() valorInicial = 10;

  constructor() {
    this.log('constructor');

  }

  ngOnChanges() {
    this.log('ngOnChanges');
  }

  ngOnInit() {
    this.log('ngOnInit');
  }

  ngDoCheck() {
    this.log('ngDoCheck');
  }

  ngAfterContentInit() {
     this.log('ngOnDestroy');
  }

  ngAfterContentChecked() {
    this.log('ngOnDestroy');
  }

  ngOnDestroy() {
    this.log('ngOnDestroy');
  }

  private log(hook: String) {
    console.log(hook);
  }

}
