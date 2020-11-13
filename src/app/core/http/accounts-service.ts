import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { IAccount } from 'src/app/models/accounts';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})

export class AccountHttpService {
    public accounts: IAccount[] = [
        {
            account_id: 0,
            address: 'г.Москва, ул.Весенняя, д.23',
            balance: 40,
            channelsQuality: 20,
            id: 0,
            isActive: true,
            name: 'Петров П.Е.',
            tariffGroup: 'FirstChannels',
            velocity: 20
        },
        {
            account_id: 1,
            address: 'г.Минск, ул.Космонавтов д.1',
            balance: 40,
            channelsQuality: 160,
            id: 1,
            isActive: false,
            name: 'Иванов И.И.',
            tariffGroup: 'TwoChannels',
            velocity: 200
        }
    ];
    public accountRequest$: Observable<IAccount[]>;
    public updateData$ = new BehaviorSubject<IAccount[]>(this.accounts);

    constructor(private http: HttpClient) {}

     /** Получить список всех лицевых счетов */
    public getAccounts(): Observable<IAccount[]> {
        // используется заглушка данных вместо Angular in-memory-web-api или прямого запроса к серверу
        return of(this.accounts);
    }

    /** Получить счет по id */
    public getAccount(id: number) {
        return this.getAccounts()
            .pipe(
                map(
                    (accounts: IAccount[]) => accounts.find(account => account.id === id)
            ),
        );
    }

}
