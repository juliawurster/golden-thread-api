import { repository } from "@loopback/repository";
import { UserRepository } from "../repositories/user.repository";
import { post, get, requestBody } from "@loopback/rest";
import { User } from "../models/user";

export class UsersController {

  constructor(
    @repository(UserRepository.name) private userRepo: UserRepository
  ) {}

  @get('/users')
  async getAllUsers(): Promise<Array<User>> {
    return await this.userRepo.find();
  }

  @get('/users')
  async getAllUsersByID(): Promise<Array<User>> {
    let allUsers = await this.userRepo.find();
    var allUserIds = new Array();

    allUsers.forEach(element => {
        allUserIds.push(element.getId());
    });
    return await allUserIds;
  }

}