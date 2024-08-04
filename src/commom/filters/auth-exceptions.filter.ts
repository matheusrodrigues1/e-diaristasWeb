import {
  ArgumentsHost,
  BadRequestException,
  Catch,
  ExceptionFilter,
  ForbiddenException,
  HttpException,
  UnauthorizedException,
} from '@nestjs/common';
import { Response } from 'express';
import { url } from 'inspector';

@Catch(HttpException)
export class AuthException implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest();

    if (
      exception instanceof BadRequestException ||
      exception instanceof UnauthorizedException ||
      exception instanceof ForbiddenException
    ) {
      request.flash('loginError', 'login ou senha invalidos');
      request.flash('class', 'is-invalid');
      response.redirect('/admin/login');
    } else {
      response.redirect('/404');
    }
  }
}
