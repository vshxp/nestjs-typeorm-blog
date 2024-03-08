import { ArticleEntity } from 'src/articles/model/article.entity/article.entity';
import { CommentEntity } from 'src/comments/models/comment.entity/comment.entity';
import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
  ManyToMany,
  OneToMany
} from 'typeorm';

@Entity()
export class UserEntity {
  
  @PrimaryGeneratedColumn({ type: 'bigint'})
  id: number;

  @Column()
  username: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column({ nullable: true })
  photo_profile: string;

  @OneToMany((type) => ArticleEntity, (article) => article.author)
  articles: ArticleEntity[]
  
}
