import { Controller, Post, Body, Get } from '@nestjs/common';
import { CommentsService } from './comments.service';
import { CreateCommentDto } from '../comments/dto/create-comment.dto.ts/create-comment.dto';

@Controller('comments')
export class CommentsController {

    constructor(private readonly commentsService: CommentsService){}

    @Post()
    create(@Body() createCommentDto: CreateCommentDto){
        return this.commentsService.create(createCommentDto);
    }

    @Get()
    findAll(){
        return this.commentsService.findAll();
    }

}
