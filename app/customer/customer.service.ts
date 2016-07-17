import {Injectable} from '@angular/core';

@Injectable()
export class CustomerService {
    
    constructor() { }
    
    getCustomers() {
        return [
            {id: 1, name: 'fred'},
            {id: 2, name: 'kevin'},
            {id: 3, name: 'richard'},
            {id: 4, name: 'john'},
            {id: 5, name: 'kelly'}
        ];
    }

}