import { Injectable, NestMiddleware } from '@nestjs/common';

import { Request, Response, NextFunction } from 'express';
import { Options, createProxyMiddleware } from 'http-proxy-middleware';

@Injectable()
export class ProxyMiddleware implements NestMiddleware {
  constructor() {}
  async use(
    request: Request,
    response: Response,
    next: NextFunction,
  ): Promise<void> {
    // write code to proxy request to news api

    let options: Options = {
      target: process.env.NEWS_API_DOMAIN,
      changeOrigin: true,
    };
    const proxy = createProxyMiddleware(options);
    proxy(request, response, next);
  }
}
