import { Entity, property, model} from '@loopback/repository';

export class Pizza extends Entity {

    @property({
        type: 'string',
        id: true
    })
    id?: number;

    @property({
        type: 'string',
        required: true
    })
    name: string;

    @property({
        type: 'string'
    })
    desc: string;

    @property({
        type: 'string'
    })
    toppings: string;

    getId() {
        return this.id;
    }
}