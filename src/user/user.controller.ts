import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto/update-user.dto';
import { ParseIntPipe } from 'src/commom/pipes/parse-int.pipe.ts';


@Controller('user')
export class UserController {

    constructor(private readonly userService: UserService){}

    @Post()
    create(@Body() createUserDto: CreateUserDto){
        return this.userService.create(createUserDto);
    }

    @Get()
    findAll(){
        return this.userService.findAll();
    }

    @Patch(':id')
    update(@Param('id') id: number, @Body() updateUserDto: UpdateUserDto ){
        return this.userService.update(id, updateUserDto);
    }

    @Get(':id')
    findOne(@Param('id', ParseIntPipe) id: number){
        return this.userService.findOne(id);
    }

}
