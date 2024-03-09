import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CommentEntity } from './models/comment.entity/comment.entity';
import {Repository} from 'typeorm';
import { CreateCommentDto } from './dto/create-comment.dto.ts/create-comment.dto';

@Injectable()
export class CommentsService {

    constructor(
        @InjectRepository(CommentEntity)
        private readonly commentRepository: Repository<CommentEntity>
    ){}

    
    async create(createCommentDto : CreateCommentDto){
        const comment = this.commentRepository.create({ ...createCommentDto });
        return this.commentRepository.save(comment);
    }

    async findAll(){
        return this.commentRepository.find();
    }

}
