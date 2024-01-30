import { Module } from "@nestjs/common";
import { AuthController } from "./authlcontroller";
import { AuthService } from "./auth.service";
import { PrismaModule } from "src/prisma/prisma.module";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { JwtModule } from "@nestjs/jwt";
import { JwtStrategy } from "src/strategy";
@Module({
    imports:[PrismaModule,JwtModule.register({})],
    controllers:[AuthController],
    providers:[AuthService,JwtStrategy]

})
export class AuthModule{

} 