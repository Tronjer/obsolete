import {Component} from "angular2/core";
import {DataService} from "../shared/data.service";
import {error} from "util";

@Component({
    template: `
        <h1>Data</h1>
        <p>{{ dataset }}</p>
        <button (click)="onGetData()">Get Data</button>
        <br>
        <button (click)="onDeleteData()">Delete all Data</button>
    `,
    providers: [DataService]
})
// @CanActivate()
export class SuperSecretComponent {
    dataset: any;

    constructor (private _dataService: DataService) {}

    onGetData() {
        this._dataService.getAllData()
            .subscribe( // observable
                data => this.dataset = JSON.stringify(data), // success handler
                error => console.log(error) // error handler
            )
    }

    onDeleteData() {
        this._dataService.deleteAllData()
            .subscribe( // observable
                data => this.dataset = '', // success handler
                error => console.log(error) // error handler
            )
    }
}