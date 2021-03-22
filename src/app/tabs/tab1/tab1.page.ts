import { Component } from '@angular/core';
import { AuthHttpService } from 'src/app/core/auth-http.service';
import { NgHttpService } from 'src/app/core/ng-http.service';

@Component({
    selector: 'app-tab1',
    templateUrl: 'tab1.page.html',
    styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

    loading: boolean;
    authLoading: boolean;

    todo: any;
    authTodo: any;

    constructor(private http: NgHttpService, private authHttp: AuthHttpService) { }

    async getToDo() {

        this.loading = true;

        try {
            this.todo = await this.http.xhr({
                url: 'https://jsonplaceholder.typicode.com/todos/1',
                method: 'GET'
            });
        } catch (e) {
            console.error(e);
        }

        this.loading = false;
    }
    async getAuthToDo() {

        this.authLoading = true;

        try {
            this.authTodo = await this.authHttp.request('GET', 'https://jsonplaceholder.typicode.com/todos/1');
        } catch (e) {
            console.error(e);
        }

        this.authLoading = false;
    }

}
