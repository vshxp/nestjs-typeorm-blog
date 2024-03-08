import { Injectable } from '@nestjs/common';
import { InjectRepository,  } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserEntity } from './models/user.entity/user.entity';
import { CreateUserDto } from './dto/create-user.dto/create-user.dto';

@Injectable()
export class UserService {

    constructor(
        @InjectRepository(UserEntity)
        private readonly userRepository: Repository<UserEntity>
    ){}

    async create(createUserDto: CreateUserDto){
        const user = this.userRepository.create({ ...createUserDto });
        return this.userRepository.save(user);
    }

    findAll(){
        return this.userRepository.find();
    }
}
