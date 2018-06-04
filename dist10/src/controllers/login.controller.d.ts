import { UserRepository } from "../repositories/user.repository";
export declare class LoginController {
    private userRepo;
    constructor(userRepo: UserRepository);
    sendUser(username: string, password: string): Promise<boolean>;
}
