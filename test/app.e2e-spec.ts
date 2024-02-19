import { Test } from "@nestjs/testing"
import * as  pactum from "pactum"
import { AppModule } from "../src/app.module"
import { INestApplication, ValidationPipe } from "@nestjs/common"
import { AuthDto } from "../src/auth/dto"
import { PrismaService } from "../src/prisma/prisma.service"

describe('App e2e',()=>{
  let app:INestApplication;
  let prisma:PrismaService;
  beforeAll(async ()=>{
    const moduleRef=await Test.createTestingModule({imports:[
      AppModule
    ]}).compile()
    app=moduleRef.createNestApplication();
    app.useGlobalPipes(new ValidationPipe({whitelist:true}))
await app.init()
await app.listen(3333)
prisma=app.get(PrismaService)
await prisma.cleanDb();
pactum.request.setBaseUrl(
  'http://localhost:3333'
)
    

  })
  afterAll(async ()=>{})
  it.todo("should pass ")


  describe('Auth',()=>{
    const dto:AuthDto={
      email:"vlad@gmail.com",
      password:"123"
    }
    describe('Signup',()=>{
      it('should throw if email is empty',()=>{
        return pactum
        .spec()
        .post("/auth/signup")
        .withBody({
          password:dto.password
        })
        .expectStatus(400)
      })
    })
  })
}


)
 