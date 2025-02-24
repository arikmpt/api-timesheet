import { PrismaClient } from '@prisma/client';

import {
  ADMIN_HAS_PERMISSIONS,
  CONTRACT_PERMISSION_GROUPS,
  EMPLOYEE_HAS_PERMISSIONS,
  EMPLOYEE_PERMISSION_GROUPS,
  EXTERNAL_MEMO_TIMESHEET,
  HRD_HAS_PERMISSIONS,
  INTERNAL_MEMO_TIMESHEET,
  INVOICE_PERMISSION_GROUPS,
  MANAGE_TIME_OFF,
  MANAGE_TIMESHEET,
  ROLE_ADMIN,
  ROLE_EMPLOYEE,
  ROLE_HRD,
  ROLE_PERMISSION_GROUPS,
  ROLE_VENDOR,
  TASK_PERMISSION_GROUPS,
  TIME_OFF_PERMISSION_GROUPS,
  TIMESHEET_PERMISSION_GROUPS,
  USER_PERMISSION_GROUPS,
  VENDOR_HAS_PERMISSIONS,
  VENDOR_PERMISSION_GROUPS
} from '@/constant';

const ROLES = [ROLE_ADMIN, ROLE_HRD, ROLE_EMPLOYEE, ROLE_VENDOR];
const ALL_PERMISSIONS = [
  ...USER_PERMISSION_GROUPS,
  ...ROLE_PERMISSION_GROUPS,
  ...VENDOR_PERMISSION_GROUPS,
  ...TASK_PERMISSION_GROUPS,
  ...EMPLOYEE_PERMISSION_GROUPS,
  ...CONTRACT_PERMISSION_GROUPS,
  ...TIMESHEET_PERMISSION_GROUPS,
  ...INVOICE_PERMISSION_GROUPS,
  ...TIME_OFF_PERMISSION_GROUPS,
  MANAGE_TIMESHEET,
  INTERNAL_MEMO_TIMESHEET,
  EXTERNAL_MEMO_TIMESHEET,
  MANAGE_TIME_OFF
];

async function roleSeeder(prisma: PrismaClient) {
  for (const name of ROLES) {
    const exists = await prisma.role.findFirst({ where: { name } });
    if (!exists) {
      await prisma.role.create({ data: { name } });
    }
  }
}

async function permissionSeeder(prisma: PrismaClient) {
  for (const name of ALL_PERMISSIONS) {
    const exists = await prisma.permission.findFirst({ where: { name } });
    if (!exists) {
      await prisma.permission.create({ data: { name } });
    }
  }
}

async function assignAdminPermissionRole(prisma: PrismaClient) {
  const findRole = await prisma.role.findFirst({ where: { name: ROLE_ADMIN } });
  if (findRole) {
    for (const name of ADMIN_HAS_PERMISSIONS) {
      const permission = await prisma.permission.findFirst({ where: { name } });
      if (permission) {
        const exists = await prisma.rolePermission.findFirst({
          where: {
            roleId: findRole.id,
            permissionId: permission.id
          }
        });
        if (!exists) {
          await prisma.rolePermission.create({
            data: {
              roleId: findRole.id,
              permissionId: permission.id
            }
          });
        }
      }
    }
  }
}

async function assignHrdPermissionRole(prisma: PrismaClient) {
  const findRole = await prisma.role.findFirst({ where: { name: ROLE_HRD } });
  if (findRole) {
    for (const name of HRD_HAS_PERMISSIONS) {
      const permission = await prisma.permission.findFirst({ where: { name } });
      if (permission) {
        const exists = await prisma.rolePermission.findFirst({
          where: {
            roleId: findRole.id,
            permissionId: permission.id
          }
        });
        if (!exists) {
          await prisma.rolePermission.create({
            data: {
              roleId: findRole.id,
              permissionId: permission.id
            }
          });
        }
      }
    }
  }
}

async function assignVendorPermissionRole(prisma: PrismaClient) {
  const findRole = await prisma.role.findFirst({ where: { name: ROLE_VENDOR } });
  if (findRole) {
    for (const name of VENDOR_HAS_PERMISSIONS) {
      const permission = await prisma.permission.findFirst({ where: { name } });
      if (permission) {
        const exists = await prisma.rolePermission.findFirst({
          where: {
            roleId: findRole.id,
            permissionId: permission.id
          }
        });
        if (!exists) {
          await prisma.rolePermission.create({
            data: {
              roleId: findRole.id,
              permissionId: permission.id
            }
          });
        }
      }
    }
  }
}

async function assignEmployeePermissionRole(prisma: PrismaClient) {
  const findRole = await prisma.role.findFirst({ where: { name: ROLE_EMPLOYEE } });
  if (findRole) {
    for (const name of EMPLOYEE_HAS_PERMISSIONS) {
      const permission = await prisma.permission.findFirst({ where: { name } });
      if (permission) {
        const exists = await prisma.rolePermission.findFirst({
          where: {
            roleId: findRole.id,
            permissionId: permission.id
          }
        });
        if (!exists) {
          await prisma.rolePermission.create({
            data: {
              roleId: findRole.id,
              permissionId: permission.id
            }
          });
        }
      }
    }
  }
}

export {
  roleSeeder,
  permissionSeeder,
  assignAdminPermissionRole,
  assignHrdPermissionRole,
  assignVendorPermissionRole,
  assignEmployeePermissionRole
};
