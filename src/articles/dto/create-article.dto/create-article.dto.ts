import { IsNumber, IsString } from 'class-validator';
import { CategoriesService } from 'src/categories/categories.service';
import { CommentEntity } from 'src/comments/models/comment.entity/comment.entity';
import { UserEntity } from 'src/user/models/user.entity/user.entity';


export class CreateArticleDto {

    @IsString()
    private tittle: string

    @IsString()
    private bannerImage: string

    @IsString()
    private article: string

    @IsNumber()
    private author: number

    private comments: CommentEntity[]
    private categories: CategoriesService[]

}





