import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { CreateConversationDto } from './dto/create-conversation.dto';
import { UpdateConversationDto } from './dto/update-conversation.dto';
import { Model } from 'mongoose';
import { ConversationInterface } from './interface/conversation.interface';
import {
  ConversationMainInterface,
  messageInterface,
} from './interface/conversationMain.interface';
import { CreateConversationMainDto } from './dto/create-conversation-main.dto';
// import { CreateConversationMainDto } from './dto/create-conversation-main.dto';

@Injectable()
export class ConversationService {
  constructor(
    @Inject('ConversationModel')
    private conversationModel: Model<ConversationInterface>,

    @Inject('ConversationMainModel')
    private conversationMainModel: Model<ConversationMainInterface>,
  ) {}
  create(createConversationDto: CreateConversationDto) {
    return 'This action adds a new conversation';
  }

  async createConversation(createConversationDto: CreateConversationDto) {
    const { idConversation, usuarioMessage, iaMessage } = createConversationDto;
    console.log(createConversationDto);

    try {
      let conversationMain: ConversationMainInterface;

      // Si no viene id → crear nueva conversación principal
      if (!idConversation) {
        conversationMain = await this.createConversationMain({
          userId: '23897643786589263745623789456',
          title: 'Logaritmos en js',
        });
      } else {
        // Buscar la conversationMain existente
        conversationMain = await this.findOneConversationMain(idConversation);

        if (!conversationMain) {
          throw new NotFoundException(
            `No existe una conversación con id ${idConversation}`,
          );
        }
      }

      const messages: {
        usuarioMessage: string;
        iaMessage: string;
        createdAt: Date;
      } = {
        usuarioMessage: usuarioMessage,
        iaMessage: iaMessage,
        createdAt: new Date(),
      };

      // Actualizar o crear conversación secundaria
      // Actualizar la conversación agregando mensajes al array
      const updatedConversation = await this.conversationMainModel
        .findByIdAndUpdate(
          conversationMain._id,
          {
            $push: {
              messages: messages, // Agrega 1 mensaje al array
            },
          },
          { new: true },
        )
        .exec();

      return updatedConversation;
    } catch (error) {
      console.error(error);
      throw new NotFoundException(
        'Error mientras se guardaban los datos de la conversación',
      );
    }
  }

  async findAll() {
    return this.conversationModel.find();
  }

  async findAllConversaciones() {
    return this.conversationMainModel.find();
  }

  findOne(id: string) {
    return this.conversationModel.findById(id);
    // return;
  }

  findOneConversationMain(id: string) {
    return this.conversationMainModel.findById(id);
    // return;
  }

  async createConversationMain(
    createConversationDto: CreateConversationMainDto,
  ) {
    const { userId, title } = createConversationDto;

    const conversationMain = new CreateConversationDto(userId, title, null);
    const conversation = await this.conversationMainModel.create({
      userId,
      title,
    });

    return await conversation.save(conversation[0]);
  }

  update(id: number, updateConversationDto: UpdateConversationDto) {
    return `This action updates a #${id} conversation`;
  }

  remove(id: number) {
    return `This action removes a #${id} conversation`;
  }

  deleteAll(): string {
    this.conversationModel.deleteMany({}).exec();
    this.conversationMainModel.deleteMany({}).exec();
    return 'This action deletes a #';
  }
}
