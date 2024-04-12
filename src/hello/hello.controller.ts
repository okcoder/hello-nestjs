import { Controller, Get } from '@nestjs/common';
import { HelloService } from './hello.service';
import { HelloResponse } from './hello.response.model';

@Controller('hello')
export class HelloController {
  constructor(private readonly helloService: HelloService) {}

  @Get()
  getHello(): HelloResponse {
    return this.helloService.getHello();
  }
}
