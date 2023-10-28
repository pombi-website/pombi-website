import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.product.create({
    data: {
      name: "Product 1",
      price: 100,
      description: "Product 1 description",
      imageURL: "https://picsum.photos/200/300",
    },
  });
}

main()
  .then(async () => {
    console.log("Seeding complete");
    await prisma.$disconnect();
  })
  .catch((e) => {
    console.error(e);
    console.log("Seeding failed");
    prisma.$disconnect();
    process.exit(1);
  });
