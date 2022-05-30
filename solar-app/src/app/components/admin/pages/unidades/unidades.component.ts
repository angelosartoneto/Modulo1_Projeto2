import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'ddd-unidades',
  templateUrl: './unidades.component.html',
  styleUrls: ['./unidades.component.scss']
})
export class UnidadesComponent implements OnInit {

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
  }
  public logout () {
    this.authService.logout();
  }
}
