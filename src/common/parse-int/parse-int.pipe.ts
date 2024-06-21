import {
  ArgumentMetadata,
  BadRequestException,
  Injectable,
  PipeTransform,
} from '@nestjs/common';

@Injectable()
export class ParseIntPipe implements PipeTransform {
  //recibimos el value, le ponemos un string si lo sabemos
  transform(value: string, metadata: ArgumentMetadata) {
    const val = parseInt(value, 10); //hacemos el parseInt del value recibido y lo ponemos en base 10
    if (isNaN(val)) {
      //si el value que recibimos en forma de string NO es un numero, es un texto...
      throw new BadRequestException(`${value} is not a number`); //lanzamos un error
    }
    return value;
  }
}
