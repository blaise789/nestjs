import { Controller,Req, Get, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { User } from '@prisma/client';
import { Request } from 'express';
import { GetUser } from '../auth/decorators/get-user.decorator';
import { JwtGuards } from '../auth/guard/jwt.guard';


@Controller('users')
@UseGuards(JwtGuards)
export class UserController {
    @Get("me")
    getMe(@GetUser() user:User) {
        // console.log(r)
        // console.log({
        //     req:req.user
        // })

 return user;
    }

}
