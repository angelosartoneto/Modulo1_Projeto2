import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'ddd-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    
  }
  
  public logout () {
    this.authService.logout();
  }

}
