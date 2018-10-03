import { Injectable } from '@angular/core';

@Injectable()
export class EntityFactoryService {

    constructor() { }

    static create<T>(type: (new (element) => T), element?: any): any {
        return new type(element);
    }

    static createMany<T>(type: (new () => T), entity: any[]): any[] {
        return entity.map(function (element, index, array) {
            return EntityFactoryService.create(type, element);
        });
    }
}
