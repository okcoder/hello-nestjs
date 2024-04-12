import { Injectable } from '@nestjs/common';
import { HelloResponse } from 'src/hello/hello.response.model';

@Injectable()
export class HelloService {
  getHello(): HelloResponse {
    const response = new HelloResponse();
    response.message = 'Hello, World!';
    response.date = new Date();
    return response;
  }
}
