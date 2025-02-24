import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';

import config from '@/config';
import { ROLE_ADMIN } from '@/constant';

const email = 'admin@admin.com';

async function userSeeder(prisma: PrismaClient) {
  const findUser = await prisma.user.findFirst({
    where: {
      email: 'admin@admin.com'
    }
  });
  if (findUser) {
    return;
  }
  await prisma.$transaction(async (tx) => {
    const role = await tx.role.findFirstOrThrow({
      where: {
        name: ROLE_ADMIN
      }
    });
    if (role) {
      const exists = await tx.user.findFirst({
        where: {
          email
        }
      });
      if (!exists) {
        const cryptedPassword = await bcrypt.hash('password!23', config.saltRound);
        const user = await tx.user.create({
          data: {
            email: 'admin@admin.com',
            password: cryptedPassword,
            isActive: true,
            roleId: role.id
          }
        });

        await tx.profile.create({
          data: {
            firstName: 'System',
            lastName: 'Administrator',
            userId: user.id
          }
        });
      }
    }
  });
}

export default userSeeder;
