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

  @Field()
  id: string;

  constructor(
    fullName: string,
    email: string,
    token: string,
    encuesta: boolean,
    id: string,
  ) {
    this.fullName = fullName;
    this.email = email;
    this.token = token;
    this.encuesta = encuesta;
    this.id = id;
  }
}
