import { Module } from '@nestjs/common';
import { ChatsGateway } from './chats.gateway';
import { AppService } from '../app.service'; // 추가
import { PrismaService } from '../prisma.service'; // 추가

@Module({
  providers: [ChatsGateway, AppService, PrismaService],
})
export class ChatsModule {}
