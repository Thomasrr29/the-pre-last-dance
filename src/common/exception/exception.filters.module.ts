import { Module } from "@nestjs/common";
import { APP_FILTER } from "@nestjs/core";
import { AllExceptionFilter } from "./http.exception";

@Module({
    providers: [
        {
            provide: APP_FILTER,
            useClass: AllExceptionFilter,
        }
    ]
})
export class ExceptionFilterModule {}