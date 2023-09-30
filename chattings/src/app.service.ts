import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Injectable()
export class AppService {
  constructor(private readonly prisma: PrismaService) {}

  // Socket 관련 메서드
  async createSocket(data: { id: string; username: string }) {
    return this.prisma.socket.create({
      data,
    });
  }

  async getSocketById(id: string) {
    return this.prisma.socket.findUnique({
      where: { id },
    });
  }

  async updateSocket(id: string, data: { username?: string }) {
    return this.prisma.socket.update({
      where: { id },
      data,
    });
  }

  async deleteSocket(id: string) {
    return this.prisma.socket.delete({
      where: { id },
    });
  }

  // Chatting 관련 메서드
  async createChatting(data: { chat: string; userId: string }) {
    return this.prisma.chatting.create({
      data,
    });
  }

  async getChattingById(id: number) {
    return this.prisma.chatting.findUnique({
      where: { id },
    });
  }
}
