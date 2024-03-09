import { IsNumber, IsString } from 'class-validator';


export class CreateCommentDto {
    @IsNumber()
    private  user: number

    @IsNumber()
    private  article: number

    @IsString()
    private  text: string
}
