import { prisma } from '@/libs/db.server';
import { Prisma, type User } from '@prisma/client';

export const modelUser = {
  getByEmail({ email }: Pick<User, 'email'>) {
    return prisma.user.findUnique({
      where: { email },
      select: { id: true, images: { select: { url: true } } },
    });
  },
  getByUsername({ username }: Pick<User, 'username'>) {
    return prisma.user.findUnique({
      where: { username },
      include: {
        profiles: true,
        roles: { select: { symbol: true, name: true } },
        images: { select: { id: true, url: true } },
      },
    });
  },
  continueWithService({
    email,
    fullname,
    username,
    imageUrl,
  }: Pick<User, 'email' | 'fullname' | 'username'> & {
    imageUrl: string;
  }) {
    return prisma.user.create({
      data: {
        email,
        fullname,
        username,
        images: { create: { url: imageUrl } },
      },
      select: { id: true },
    });
  },
  continueAttachImage({
    id,
    imageUrl,
  }: Pick<User, 'id'> & { imageUrl: string }) {
    return prisma.user.update({
      where: { id },
      data: { images: { create: { url: imageUrl } } },
    });
  },
};
