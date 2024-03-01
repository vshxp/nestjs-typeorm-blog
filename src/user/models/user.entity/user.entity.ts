import { ArticleEntity } from 'src/articles/model/article.entity/article.entity';
import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  ManyToMany
} from 'typeorm';

@Entity()
export class UserEntity {
  
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  username: string;
  @Column()
  email: string;
  @Column()
  passwrod: string;

  @ManyToMany((type) => ArticleEntity, (article) => article.author)
  articles: ArticleEntity[]

}
