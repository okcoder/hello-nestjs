import { Body, Controller, Get, Post, Sse } from '@nestjs/common';
import { HelloService } from './hello.service';
import { HelloResponse } from './hello.response.model';
import { HelloRequest } from './hello.resquest.model';
import { Observable, interval, map } from 'rxjs';

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

  @Sse('sse')
  sseHello(): Observable<{ data: HelloResponse }> {
    return interval(1000).pipe(
      map(() => ({ data: { message: 'hello world!', date: new Date() } })),
    );
  }
}
