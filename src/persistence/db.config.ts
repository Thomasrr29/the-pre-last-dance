import { registerAs } from "@nestjs/config"


export default registerAs('dbConfig', () => {
    
    
    const dbConfig = {
            db : {
            user: process.env.DB_USER,
            database: process.env.DB_NAME,
            host: process.env.DB_HOST,
            cluster: process.env.DB_CLUSTER,
            password: process.env.DB_PASSWORD
        }, 

        env: process.env.NODE_ENV || 'local',
    }

    return dbConfig 
})

