import { CommentEntity } from 'src/comments/models/comment.entity/comment.entity';
import { UserEntity } from 'src/user/models/user.entity/user.entity';
import {
    Column,
    Entity,
    PrimaryGeneratedColumn,
    JoinTable,
    ManyToOne,
    ManyToMany,
    OneToMany
} from 'typeorm';

@Entity()
export class ArticleEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    tittle: string

    @Column()
    bannerImage: string

    @Column()
    article: string

    @ManyToOne((type) => UserEntity, (user) => user.articles, { cascade: true })
    author: UserEntity

    @OneToMany((type) => CommentEntity, (comments) => comments.text )
    comments: CommentEntity[]

}
