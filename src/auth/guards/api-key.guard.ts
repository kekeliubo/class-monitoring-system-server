import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
const API_KEY='$2b$10$OkrFKjxeaPOXW81n3kztJOr/lXwSVK77cuu2w/06ReEM7eGRJKVSG'
@Injectable()
export class ApiKeyGuard implements CanActivate {
  constructor(private configService: ConfigService) {}

  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest();
    const apiKey = request.headers['x-api-key'];
    const validApiKey = API_KEY;
    
    return apiKey === validApiKey;
  }
}
