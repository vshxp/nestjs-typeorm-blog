import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CommentEntity } from './models/comment.entity/comment.entity';
import {Repository} from 'typeorm';

@Injectable()
export class CommentsService {

    constructor(
        @InjectRepository(CommentEntity)
        private readonly commentRepository: Repository<CommentEntity>
    ){}

    async create(createCommentDto){
        const comment = this.commentRepository.create({ ...createCommentDto });
        return this.commentRepository.save(comment);
    }

    async findAll(){
        return this.commentRepository.find();
    }

}
