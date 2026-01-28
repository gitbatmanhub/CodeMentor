import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { CreateConversationDto } from './dto/create-conversation.dto';
import { UpdateConversationDto } from './dto/update-conversation.dto';
import { Model } from 'mongoose';
import { ConversationInterface } from './interface/conversation.interface';
import { ConversationMainInterface } from './interface/conversationMain.interface';
import { CreateConversationMainDto } from './dto/create-conversation-main.dto';
import { ConversationMain } from './entities/conversation.schema';
import { TemarioService } from '../temario/temario.service';

// import { CreateConversationMainDto } from './dto/create-conversation-main.dto';

@Injectable()
export class ConversationService {
  constructor(
    @Inject('ConversationModel')
    private conversationModel: Model<ConversationInterface>,

    @Inject('ConversationMainModel')
    private conversationMainModel: Model<ConversationMainInterface>,

    private temarioService: TemarioService,
  ) {}
  create(createConversationDto: CreateConversationDto) {
    return 'This action adds a new conversation';
  }

  async createConversation(createConversationDto: CreateConversationMainDto) {
    const { userId, title, mode } = createConversationDto;

    try {
      // let conversationMain: ConversationMainInterface;
      // Si no viene id → crear nueva conversación principal
      /* } else {
        // Buscar la conversationMain existente
        conversationMain = await this.findOneConversationMain(idConversation);

        if (!conversationMain) {
          throw new NotFoundException(
            `No existe una conversación con id ${idConversation}`,
          );
        }
      }*/
      /*const messages: {
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
        .exec();*/
      /*return await this.createConversationMain({
        userId: userId, // TODO: cambiar por userId real
        title: title, // TODO: cambiar por título real,
        mode: mode,
      });*/
    } catch (error) {
      console.error(error);
      throw new NotFoundException(
        'Error mientras se guardaban los datos de la conversación',
      );
    }
  }

  async updateConversationMain(
    idConversation: string,
    updateConversationDto: UpdateConversationDto,
  ) {
    const { usuarioMessage, iaMessage } = updateConversationDto;
    const messages: {
      usuarioMessage: string;
      iaMessage: string;
      createdAt: Date;
    } = {
      usuarioMessage: usuarioMessage,
      iaMessage: iaMessage,
      createdAt: new Date(),
    };
    await this.conversationMainModel
      .findByIdAndUpdate(
        idConversation,
        {
          $push: {
            messages: messages,
          },
        },
        { new: true },
      )
      .exec();
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

  async findOneConversationMain(
    idTemaConversacion: string,
    idUsuario: string,
  ): Promise<ConversationMainInterface> {
    const filter: any = {
      idTemaConversacion,
      userId: idUsuario,
    };

    const conversation = this.conversationMainModel.findOne(filter);

    const tema = await this.temarioService.findTemaById(idTemaConversacion);
    if (!conversation) {
      throw new NotFoundException(
        `Conversation with id ${idTemaConversacion} not found`,
      );
    }
    return conversation;
  }

  async findOneConversationMainByMode(
    idUsuario: string,
    mode?: string,
    idTemaConversacion?: string,
  ): Promise<ConversationMainInterface> {
    console.log(idUsuario);
    console.log(mode);
    console.log(idTemaConversacion);
    const filter: any = {
      userId: idUsuario,
      mode: mode,
    };

    if (idTemaConversacion) {
      filter.idTemaConversacion = idTemaConversacion;
    }
    const conversation = this.conversationMainModel.findOne(filter);

    return conversation;
  }

  async createConversationMain(
    createConversationDto: CreateConversationMainDto,
  ): Promise<ConversationMainInterface> {
    const { userId, title, mode, idTemaConversacion } = createConversationDto;

    const conversation: ConversationMainInterface =
      await this.conversationMainModel.create({
        userId,
        title,
        mode,
        idTemaConversacion,
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
