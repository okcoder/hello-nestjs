import { Injectable } from '@nestjs/common';
import { HelloResponse } from 'src/hello/hello.response.model';
import { HelloRequest } from './hello.resquest.model';

@Injectable()
export class HelloService {
  getHello(): HelloResponse {
    const response = new HelloResponse('Hello, World!', new Date());
    return response;
  }

  postHello(request: HelloRequest): HelloResponse {
    const response = new HelloResponse(`Hello, ${request.name}!`, new Date());
    return response;
  }
}
