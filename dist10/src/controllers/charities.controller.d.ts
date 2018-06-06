import { CharityRepository } from "../repositories/charity.repository";
import { Charity } from "../models/charities";
export declare class CharityController {
    protected charityRepo: CharityRepository;
    constructor(charityRepo: CharityRepository);
    findUsers(): Promise<Charity[]>;
    findCharitiesById(id: number): Promise<Charity>;
}
