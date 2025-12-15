import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class ResponseAuthDto {
  @Field()
  fullName: string;

  @Field()
  email: string;

  @Field()
  token: string;

  @Field()
  encuesta: boolean;

  constructor(
    fullName: string,
    email: string,
    token: string,
    encuesta: boolean,
  ) {
    this.fullName = fullName;
    this.email = email;
    this.token = token;
    this.encuesta = encuesta;
  }
}
