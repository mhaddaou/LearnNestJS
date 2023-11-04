import { PipeTransform, Injectable, ArgumentMetadata, BadRequestException } from '@nestjs/common';

@Injectable()
export class CustomeValidationPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    if (value.length < 3 || !value)
        throw new BadRequestException('query must be longer than or equal to 3 characters');
    return value;
  }
}