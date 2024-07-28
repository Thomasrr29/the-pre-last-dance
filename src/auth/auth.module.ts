import { Module } from "@nestjs/common";
import { PassportModule } from "@nestjs/passport";
import { AuthService } from "./auth.service";
import { JwtModule, JwtService } from "@nestjs/jwt";
import { JwtStrategy } from "./guards/jwt.strategy";
import { jwtConstants } from "./guards/auth.constants";

@Module({
    imports: [
        PassportModule,
        JwtModule.register({
            secret: jwtConstants.secret,
            signOptions: {expiresIn: '60m'}
        })
    ],
    providers: [AuthService, JwtStrategy],
    exports: [AuthService, JwtModule]
})

export class AuthModule {}