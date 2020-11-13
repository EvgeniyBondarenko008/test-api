import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { AccountHttpService } from 'src/app/core/http/accounts-service';
import { IAccount } from 'src/app/models/accounts';

@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss']
})
export class MainPage implements OnInit {
  public accounts: IAccount[] = [];

  constructor(    
    private accountHttpService: AccountHttpService,
  ) {

  }
  ngOnInit(): void {
    this.accountHttpService.getAccounts()
      .subscribe(
          account => {
            this.accounts = account,
            this.accountHttpService.updateData$.subscribe(acc => this.accounts = acc);
          },
          error => {
            console.error(error);
          }
      );
  }
  public blockedService(id: number) {
    console.log(id);
    // отправка id заявки на сервер, которую нужно заблокировать
    // ...
  }
  
  

}
