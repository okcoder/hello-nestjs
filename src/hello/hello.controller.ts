import { Body, Controller, Get, Post } from '@nestjs/common';
import { HelloService } from './hello.service';
import { HelloResponse } from './hello.response.model';
import { HelloRequest } from './hello.resquest.model';

@Controller('hello')
export class HelloController {
  constructor(private readonly helloService: HelloService) {}

  @Get()
  getHello(): HelloResponse {
    return this.helloService.getHello();
  }

  @Post()
  postHello(@Body() request: HelloRequest): HelloResponse {
    return this.helloService.postHello(request);
  }
}
