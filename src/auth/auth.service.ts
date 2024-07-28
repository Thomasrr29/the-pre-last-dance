import { Injectable } from "@nestjs/common";
import * as bcrypt from 'bcrypt'
import {JwtService} from '@nestjs/jwt'

@Injectable()
export class AuthService {

    constructor(private jwtService: JwtService){}

    async loginToken(user:any){
        const payload = {username: user.email, sub: user._id};
        return {
            access_token: this.jwtService.sign(payload)
        }
    }

    async generateToken(payload: string): Promise<any>{
        return this.jwtService.sign(payload)
    }

    async verifyToken(token:any){
        return this.jwtService.verify(token)
    }

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