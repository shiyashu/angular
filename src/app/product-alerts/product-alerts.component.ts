import { Component,OnInit,Input,Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css']
})
export class ProductAlertsComponent implements OnInit {
  @Input() productIN;//接收父组件传入值
  @Output() notifyOut = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  onNotify() {//子组件警报引发事件，父组件响应
    window.alert('子组件不响应');
  }
}