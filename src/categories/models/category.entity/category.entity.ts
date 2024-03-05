import { ArticleEntity } from 'src/articles/model/article.entity/article.entity';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm'

@Entity()
export class CategoryEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string

    @OneToMany(() => ArticleEntity, (article) => article.categories)
    article: ArticleEntity

}
