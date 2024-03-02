import { arch } from 'os';
import { ArticleEntity } from 'src/articles/model/article.entity/article.entity';
import { UserEntity } from 'src/user/models/user.entity/user.entity';
import {
    Column,
    Entity,
    PrimaryGeneratedColumn,
    JoinTable,
    ManyToOne,
    ManyToMany
} from 'typeorm';

@Entity()
export class CommentEntity {

    @PrimaryGeneratedColumn({ type: 'bigint' })
    id: number;

    @ManyToOne(() => UserEntity, (user) => user.username )
    user: UserEntity

    @ManyToOne(() => ArticleEntity, (article) => article.comments)
    article: ArticleEntity

    @Column()
    text: string

}

