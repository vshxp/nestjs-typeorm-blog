import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LoginController } from './login/login.controller';
import { UserController } from './user/user.controller';
import { CommentsController } from './comments/comments.controller';
import { UserService } from './user/user.service';
import { LoginService } from './login/login.service';
import { CommentsService } from './comments/comments.service';
import { CategoriesController } from './categories/categories.controller';
import { CategoriesService } from './categories/categories.service';
import { ArticlesModule } from './articles/articles.module';
import { CategoriesModule } from './categories/categories.module';
import { CommentsModule } from './comments/comments.module';
import { LoginModule } from './login/login.module';
import { UserModule } from './user/user.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './user/models/user.entity/user.entity';
import { ArticleEntity } from './articles/model/article.entity/article.entity';
import { CategoryEntity } from './categories/models/category.entity/category.entity';
import { CommentEntity } from './comments/models/comment.entity/comment.entity';

@Module({
  imports: [
    ConfigModule.forRoot({}),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DATABASE_HOST,
      port: +process.env.DATABASE_PORT,
      username: process.env.DATABASE_USER,
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE_NAME,
      autoLoadEntities: true,
      synchronize: true,
      entities: [UserEntity, ArticleEntity, CategoryEntity, CommentEntity]
    }),
    ArticlesModule,
    CategoriesModule,
    CommentsModule,
    LoginModule,
    UserModule
  ],
  controllers: [AppController, LoginController ],
  providers: [AppService, LoginService],
})
export class AppModule {

}
