import { Injectable } from "@nestjs/common";
import * as bcrypt from 'bcrypt'



@Injectable()
export class AuthService {

    
    async hashearPassword(password: string){

        const number = Math.floor(Math.random() * (15 - 10 + 1) + 10)

        const salt = await bcrypt.genSalt(number)
        const hashedPassword = await bcrypt.hash(password, salt)
        return hashedPassword

    }

    async comparePasswords(password: string, hashedPassword: string){

        return await bcrypt.compare(password, hashedPassword)

    }

}