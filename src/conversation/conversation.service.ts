import { Inject, Injectable } from '@nestjs/common';
import { CreateConversationDto } from './dto/create-conversation.dto';
import { UpdateConversationDto } from './dto/update-conversation.dto';
import { Model } from 'mongoose';
import { ConversationInterface } from './interface/conversation.interface';

@Injectable()
export class ConversationService {
  constructor(
    @Inject('ConversationModel')
    private conversationModel: Model<ConversationInterface>,
  ) {}
  create(createConversationDto: CreateConversationDto) {
    return 'This action adds a new conversation';
  }

  async createConversation(CreateConversationDto: CreateConversationDto) {
    // const { usuarioMessage, iaMessage } = CreateConversationDto;
    const conversation = await this.conversationModel.create(
      CreateConversationDto,
    );

    return await conversation.save(conversation[0]);
  }

  findAll() {
    return `This action returns all conversation`;
  }

  findOne(id: number) {
    return `This action returns a #${id} conversation`;
  }

  update(id: number, updateConversationDto: UpdateConversationDto) {
    return `This action updates a #${id} conversation`;
  }

  remove(id: number) {
    return `This action removes a #${id} conversation`;
  }
}
