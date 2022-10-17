import { Injectable } from '@nestjs/common';

@Injectable()
export class SharedService {
  hello() {
    return 'hello from shared.';
  }
}
