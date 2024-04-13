import { Injectable } from '@nestjs/common';
import { HelloResponse } from 'src/hello/hello.response.model';
import { HelloRequest } from './hello.resquest.model';
import { Response } from 'express';

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

  async ssePost(
    request: HelloRequest,
    response: Response<any, Record<string, any>>,
  ) {
    if (request.stream) {
      response.setHeader('Content-Type', 'text/event-stream');
      response.setHeader('Transfer-Encoding', 'chunked');
      response.status(200);

      response.write(`event: receive\n\n`);
      await this.sleep(1);
      response.write(`event: process\n\n`);
      await this.sleep(2);

      for (let i = 0; i < 5; i++) {
        const data = JSON.stringify(
          new HelloResponse(`Hello, ${request.name}!`, new Date()),
        );
        response.write(`data: ${data}\n\n`);
        await this.sleep(1);
      }
      response.write(`data: [DONE]\n`);
      response.end();
    } else {
      response.status(200);
      response.json(new HelloResponse(`Hello, ${request.name}!`, new Date()));
    }
  }

  private async sleep(secend: number) {
    await new Promise((resolve) => setTimeout(resolve, secend * 1000));
  }
}
