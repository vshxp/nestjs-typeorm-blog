import { Test, TestingModule } from '@nestjs/testing';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto/update-user.dto';

describe('UserController', () => {
  let controller: UserController;
  let userService: UserService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserController],
      providers: [UserService],
    }).compile();

    controller = module.get<UserController>(UserController);
    userService = module.get<UserService>(UserService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('create', () => {
    it('should create a new user', () => {
      const createUserDto: CreateUserDto = { /* create user DTO data */ };
      const createdUser = { /* created user data */ };

      jest.spyOn(userService, 'create').mockReturnValueOnce(createdUser);

      expect(controller.create(createUserDto)).toBe(createdUser);
      expect(userService.create).toHaveBeenCalledWith(createUserDto);
    });
  });

  describe('findAll', () => {
    it('should return all users', () => {
      const users = [{ /* user data */ }];

      jest.spyOn(userService, 'findAll').mockReturnValueOnce(users);

      expect(controller.findAll()).toBe(users);
      expect(userService.findAll).toHaveBeenCalled();
    });
  });

  describe('update', () => {
    it('should update a user', () => {
      const id = 1;
      const updateUserDto: UpdateUserDto = { /* update user DTO data */ };
      const updatedUser = { /* updated user data */ };

      jest.spyOn(userService, 'update').mockReturnValueOnce(updatedUser);

      expect(controller.update(id, updateUserDto)).toBe(updatedUser);
      expect(userService.update).toHaveBeenCalledWith(id, updateUserDto);
    });
  });

  describe('findOne', () => {
    it('should find a user by id', () => {
      const id = 1;
      const user = { /* user data */ };

      jest.spyOn(userService, 'findOne').mockReturnValueOnce(user);

      expect(controller.findOne(id)).toBe(user);
      expect(userService.findOne).toHaveBeenCalledWith(id);
    });
  });
});