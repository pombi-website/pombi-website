import { Prisma, type User } from '@prisma/client';

export const modelUser = {
  getByEmail({ email }: Pick<User, 'email'>) {
    return Prisma.user.findUnique({
      where: { email },
      select: { id: true, images: { select: { url: true } } },
    });
  },
};
