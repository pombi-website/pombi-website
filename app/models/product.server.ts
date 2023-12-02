import { prisma } from '@/db.server';

export async function getAllProducts() {
  return prisma.product.findMany({
    select: {
      slug: true,
      name: true,
      price: true,
      imageURL: true,
      description: true,
    },
  });
}

export async function getProduct(slug: string) {
  return prisma.product.findUnique({ where: { slug } });
}
