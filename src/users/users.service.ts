import { BadRequestException, Injectable, NotFoundException, NotImplementedException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { AuthService } from 'src/auth/auth.service';
import { LoginDto } from './dto/login.dto';

@Injectable()
export class UsersService {

  constructor(@InjectModel(User.name) private userModel: Model<User>,
  private readonly authService: AuthService){}


  async register(createUserDto: CreateUserDto){

    const {name, email, password} = createUserDto

    const validationEmail = await this.userModel.findOne({email: email})
    
    if(validationEmail) throw new BadRequestException(`User with the email ${email} already exists, please try with another`)


    const event = new this.userModel({
      ...createUserDto,
      password: await this.authService.hashearPassword(password)
    })

    return await event.save()
  }

  async login(userData: LoginDto){

    const {email, password} = userData

    const user = await this.userModel.findOne({email: email})

    if(!user) throw new NotFoundException(`Please confirm your email. data incorrect`)

    const passwordValidation = await this.authService.comparePasswords(password, user.password) 

    if(!passwordValidation) throw new NotImplementedException(`Please confirm your password. data incorrect`)

    return this.authService.loginToken(user)

  }

  async findAll(page: number, limit: number) {

    const user = await this.userModel.find().skip((page - 1) * 100).limit(limit).exec()
    const total = await this.userModel.countDocuments()

    return {
      data: user,
      total: total,
      page: page, 
    }

  }

  async findOne(id: string) {
    return await this.userModel.findById(id)
  }

  async update(id: string, updateUserDto: UpdateUserDto) {

    const user = await this.userModel.findByIdAndUpdate(id, updateUserDto, {new: true})
    return user
  }

  async remove(id: string) {
    return await this.userModel.findByIdAndDelete(id)
  }
}
