import * as process from 'node:process';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductsModule } from './products/products.module';
import { CommonModule } from './common/common.module';
import { SeedModule } from './seed/seed.module';
import { FilesModule } from './files/files.module';
import { AuthModule } from './auth/auth.module';
import { MessagesWsModule } from './messages-ws/messages-ws.module';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { ApolloServerPluginLandingPageLocalDefault } from '@apollo/server/plugin/landingPage/default';
import { join } from 'path';
import { GeminiModule } from './gemini/gemini.module';
import { MongodbModule } from './mongodb/mongodb.module';
import { ConversationModule } from './conversation/conversation.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { QuestionaryModule } from './questionary/questionary.module';
import { TemarioModule } from './temario/temario.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    GeminiModule,
    ConfigModule,
    MongodbModule,
    ConversationModule,
    TypeOrmModule.forRoot({
      /*ssl: process.env.STAGE === 'prod',
      extra:
        process.env.STAGE === 'prod'
          ? { ssl: { rejectUnauthorized: false } }
          : undefined,*/
      type: 'postgres',
      host: process.env.DB_HOST,
      port: +process.env.DB_PORT,
      database: process.env.DB_NAMEDB,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      autoLoadEntities: true,
      synchronize: true,
    }),
    /*GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      playground: false,
      plugins: [ApolloServerPluginLandingPageLocalDefault()],
    }),*/
    // ProductsModule,
    // CommonModule,
    SeedModule,
    // FilesModule,
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'static'),
    }),
    QuestionaryModule,
    TemarioModule,
    // AuthModule,
    // MessagesWsModule,
  ],
})
export class AppModule {}
