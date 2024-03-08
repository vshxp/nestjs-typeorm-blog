import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository,  } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserEntity } from './models/user.entity/user.entity';
import { CreateUserDto } from './dto/create-user.dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto/update-user.dto';

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

    async update(id: number, updateUserDto: UpdateUserDto){
        const user = await this.userRepository.preload({ id, ...updateUserDto });
        if (!user) {
            throw new NotFoundException (`User #${id} not found`);
        }
        return this.userRepository.save(user);
    }

    async findOne(id){
        const user = await this.userRepository.findOne(id,);
        if (!user){
            throw new NotFoundException(`User #${id} not found`);
        }
        return user;
    }
}
