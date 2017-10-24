import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-error',
  template: `
    <div class="alert alert-danger">
      <ng-template [ngIf]="!error">
        <strong>Oops!</strong> There was a problem sending or retrieving data. Please try again.
      </ng-template>
      <ng-template [ngIf]="error">
        <strong>Oops!</strong> {{error.message}}
        <br><small><strong>Status Code:</strong> <em>{{error.status}} {{error.statusText}}</em></small>
      </ng-template>
    </div>
  `,
  styles: [`
    .alert {
      font-size: 14px;
    }
  `]
})
export class ErrorComponent implements OnInit {
  @Input() error: any;

  constructor() { }

  ngOnInit() {
  }

}
