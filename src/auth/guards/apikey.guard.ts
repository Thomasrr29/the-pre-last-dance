import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import { ConfigService } from "@nestjs/config";
import { Observable } from "rxjs";

@Injectable()
export class ApiKeyGuard implements CanActivate {
    constructor(private reflector: Reflector, private configService: ConfigService){}


    canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
        const request = context.switchToHttp().getRequest();
        const apiKey = request.headers['x-api-key']

        if(!apiKey){
            throw new UnauthorizedException('API key is missing')
        }

        const validApikey = this.configService.get<string>('X_API_KEY')
        if(apiKey !== validApikey){
            throw new UnauthorizedException('Invalid API Key')
        }

        return true
    }
}