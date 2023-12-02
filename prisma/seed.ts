import { PrismaClient } from '@prisma/client';
import slugify from 'slugify';

// JSON data for seeding
import dataProducts from './data/products.json';

const prisma = new PrismaClient();

const seedProducts = dataProducts.map((product) => ({
  ...product,
  slug: slugify(product.name, {
    lower: true,
    strict: true,
    trim: true,
  }),
}));

async function main() {
  await prisma.product.deleteMany();

  await prisma.product.createMany({
    data: seedProducts,
  });
}

main()
  .then(async () => {
    console.log('Seeding complete');
    await prisma.$disconnect();
  })
  .catch((e) => {
    console.error(e);
    console.log('Seeding failed');
    prisma.$disconnect();
    process.exit(1);
  });
