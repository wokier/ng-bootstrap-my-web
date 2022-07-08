import { Component } from '@angular/core';
import { SessionService } from '../../services/session.service';

@Component({
  selector: 'my-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {

  constructor(public sessionService: SessionService) {
  }

}
