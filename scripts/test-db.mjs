import { PrismaClient } from '@prisma/client';

const db = new PrismaClient();

const comment = await db.comment.create({
  data: {
    slug: 'fall-guys',
    user: 'Alice',
    message: 'Test message 1',
  },
});

console.log('created', comment);
