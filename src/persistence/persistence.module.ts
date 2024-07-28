import { Module } from "@nestjs/common";

import { MongooseModule } from "@nestjs/mongoose";
import dbConfig from "./db.config";
import { ConfigModule, ConfigService, ConfigType } from "@nestjs/config";


@Module({
    imports: [

        ConfigModule.forRoot({
            load: [dbConfig],
            isGlobal: true
        }),
        MongooseModule.forRootAsync({
            imports: [ConfigModule],
            inject: [dbConfig.KEY],
            useFactory: async (configService: ConfigType<typeof dbConfig>) => {
                const {cluster, database, password, host} = configService.db
                console.log(host)
                const uriDb = `${host}://${database}:${password}@${cluster}.6sckbsp.mongodb.net/`
                
                return {
                    uri: uriDb
                }
            }
        })

        
    ]
})


export class PersistenceModule {}
