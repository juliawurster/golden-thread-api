// uncomment these imports to begin using cool features

// import {inject} from @loopback/context;

import { get, post, requestBody } from '@loopback/rest';
export class PizzaController
{
    constructor () {}

    @get('/pizza')

    getPizzas(): Array<object>
    {
        return [{
            name: "Hawaii",
            topping: "Pineapple"
        }]
    }

    @post("/pizzas")
    requestPizza(@requestBody() pizza: any): object {
        pizza.requested = "yes";
        return pizza;
    }
}