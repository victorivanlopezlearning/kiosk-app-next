import { PrismaClient } from '@prisma/client';

export default async function handler(req, res) {

  const prisma = new PrismaClient();

  if (req.method === 'POST') {
    const { id } = req.query;

    const orderUpdated = await prisma.order.update({
      where: {
        id: parseInt(id)
      },
      data: {
        status: true
      }
    });
    res.status(200).json(orderUpdated);
  }
}