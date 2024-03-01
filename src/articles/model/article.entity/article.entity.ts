import { UserEntity } from 'src/user/models/user.entity/user.entity';
import {
    Column,
    Entity,
    PrimaryGeneratedColumn,
    JoinTable,
    ManyToMany
} from 'typeorm';

@Entity()
export class ArticleEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    tittle: string

    @Column()
    article: string

    @JoinTable()
    
    @ManyToMany((type) => UserEntity, (user) => user.articles, { cascade: true })
    author: UserEntity[]

}
