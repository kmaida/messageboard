import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-loading',
  template: `
    <div class="loading-container {{pClass}}" [ngClass]="{'lg': size === 'large', 'sm': size === 'small', 'w-100 text-center': fillSpace}">
      <img src="/assets/images/loading.svg" class="loading-img">
    </div>
  `,
  styles: [`
    .loading-container.lg {
      padding: 15px;
      text-align: center;
    }
    .loading-container.sm {
      display: inline-block;
    }
    img {
      display: inline-block;
    }
    .loading-container.sm img {
      height: 30px;
    }
  `]
})
export class LoadingComponent implements OnInit {
  @Input() size: string; // 'large' or 'small'
  @Input() fillSpace: boolean;
  @Input() paddingClass: string;
  pClass = '';

  constructor() { }

  ngOnInit() {
    if (this.paddingClass) {
      this.pClass = this.paddingClass;
    }
  }

}
