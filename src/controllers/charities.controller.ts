import { repository } from "@loopback/repository";
import { CharityRepository } from "../repositories/charity.repository";
import { param, get, requestBody, HttpErrors } from "@loopback/rest";
import { Charity } from "../models/charities";

export class CharityController {

  constructor(
        @repository(CharityRepository) protected charityRepo: CharityRepository,
      ) {}
    
      @get('/charities')
      async findUsers(): Promise<Charity[]> {
        return await this.charityRepo.find();
      }
    
      @get('/charities/{id}')
      async findCharitiesById(@param.path.number('id') id: number): Promise<Charity> {
        // Check for valid ID
        let charityExists: boolean = !!(await this.charityRepo.count({ id }));
    
        if (!charityExists) {
          throw new HttpErrors.BadRequest(`charity ID ${id} does not exist`);
        }
    
        return await this.charityRepo.findById(id);
      }
    }