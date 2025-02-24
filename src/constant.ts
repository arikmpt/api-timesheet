export const ROLE_ADMIN = 'Admin';
export const ROLE_HRD = 'Hrd';
export const ROLE_VENDOR = 'Vendor';
export const ROLE_EMPLOYEE = 'Employee';

export const CREATE_USER = 'create_user';
export const EDIT_USER = 'edit_user';
export const INDEX_USER = 'index_user';
export const FIND_USER = 'find_user';
export const REMOVE_USER = 'remove_user';

export const CREATE_ROLE = 'create_role';
export const EDIT_ROLE = 'edit_role';
export const INDEX_ROLE = 'index_role';
export const FIND_ROLE = 'find_role';
export const REMOVE_ROLE = 'remove_role';

export const CREATE_VENDOR = 'create_vendor';
export const EDIT_VENDOR = 'edit_vendor';
export const INDEX_VENDOR = 'index_vendor';
export const FIND_VENDOR = 'find_vendor';
export const REMOVE_VENDOR = 'remove_vendor';

export const CREATE_TASK = 'create_task';
export const EDIT_TASK = 'edit_task';
export const INDEX_TASK = 'index_task';
export const FIND_TASK = 'find_task';
export const REMOVE_TASK = 'remove_task';

export const CREATE_EMPLOYEE = 'create_employee';
export const EDIT_EMPLOYEE = 'edit_employee';
export const INDEX_EMPLOYEE = 'index_employee';
export const FIND_EMPLOYEE = 'find_employee';
export const REMOVE_EMPLOYEE = 'remove_employee';

export const CREATE_CONTRACT = 'create_contract';
export const EDIT_CONTRACT = 'edit_contract';
export const INDEX_CONTRACT = 'index_contract';
export const FIND_CONTRACT = 'find_contract';
export const REMOVE_CONTRACT = 'remove_contract';

export const CREATE_TIMESHEET = 'create_timesheet';
export const EDIT_TIMESHEET = 'edit_timesheet';
export const INDEX_TIMESHEET = 'index_timesheet';
export const FIND_TIMESHEET = 'find_timesheet';
export const REMOVE_TIMESHEET = 'remove_timesheet';
export const MANAGE_TIMESHEET = 'manage_timesheet';
export const INTERNAL_MEMO_TIMESHEET = 'internal_memo_timesheet';
export const EXTERNAL_MEMO_TIMESHEET = 'external_memo_timesheet';

export const CREATE_INVOICE = 'create_invoice';
export const EDIT_INVOICE = 'edit_invoice';
export const INDEX_INVOICE = 'index_invoice';
export const FIND_INVOICE = 'find_invoice';
export const REMOVE_INVOICE = 'remove_invoice';

export const CREATE_TIME_OFF = 'create_time_off';
export const EDIT_TIME_OFF = 'edit_time_off';
export const INDEX_TIME_OFF = 'index_time_off';
export const FIND_TIME_OFF = 'find_time_off';
export const REMOVE_TIME_OFF = 'remove_time_off';
export const MANAGE_TIME_OFF = 'manage_time_off';

export const USER_PERMISSION_GROUPS = [CREATE_USER, EDIT_USER, INDEX_USER, FIND_USER, REMOVE_ROLE];

export const ROLE_PERMISSION_GROUPS = [CREATE_ROLE, EDIT_ROLE, INDEX_ROLE, FIND_ROLE, REMOVE_ROLE];

export const VENDOR_PERMISSION_GROUPS = [CREATE_VENDOR, EDIT_VENDOR, INDEX_VENDOR, FIND_VENDOR, REMOVE_VENDOR];

export const TASK_PERMISSION_GROUPS = [CREATE_TASK, EDIT_TASK, INDEX_TASK, FIND_TASK, REMOVE_TASK];

export const EMPLOYEE_PERMISSION_GROUPS = [
  CREATE_EMPLOYEE,
  EDIT_EMPLOYEE,
  INDEX_EMPLOYEE,
  FIND_EMPLOYEE,
  REMOVE_EMPLOYEE
];

export const CONTRACT_PERMISSION_GROUPS = [
  CREATE_CONTRACT,
  EDIT_CONTRACT,
  INDEX_CONTRACT,
  FIND_CONTRACT,
  REMOVE_CONTRACT
];

export const TIMESHEET_PERMISSION_GROUPS = [
  CREATE_TIMESHEET,
  EDIT_TIMESHEET,
  INDEX_TIMESHEET,
  FIND_TIMESHEET,
  REMOVE_TIMESHEET
];

export const INVOICE_PERMISSION_GROUPS = [CREATE_INVOICE, EDIT_INVOICE, INDEX_INVOICE, FIND_INVOICE, REMOVE_INVOICE];

export const TIME_OFF_PERMISSION_GROUPS = [
  CREATE_TIME_OFF,
  EDIT_TIME_OFF,
  INDEX_TIME_OFF,
  FIND_TIME_OFF,
  REMOVE_TIME_OFF
];

export const ADMIN_HAS_PERMISSIONS = [
  ...USER_PERMISSION_GROUPS,
  ...ROLE_PERMISSION_GROUPS,
  ...VENDOR_PERMISSION_GROUPS,
  INDEX_CONTRACT
];

export const HRD_HAS_PERMISSIONS = [
  ...USER_PERMISSION_GROUPS,
  ...ROLE_PERMISSION_GROUPS,
  ...VENDOR_PERMISSION_GROUPS,
  ...CONTRACT_PERMISSION_GROUPS,
  ...EMPLOYEE_PERMISSION_GROUPS,
  INDEX_TIMESHEET,
  INTERNAL_MEMO_TIMESHEET,
  FIND_TIMESHEET,
  CREATE_INVOICE,
  EDIT_INVOICE,
  REMOVE_INVOICE,
  INDEX_TIME_OFF,
  FIND_TIME_OFF,
  EDIT_TIME_OFF
];

export const VENDOR_HAS_PERMISSIONS = [
  INDEX_USER,
  INDEX_CONTRACT,
  FIND_VENDOR,
  INDEX_TIMESHEET,
  MANAGE_TIMESHEET,
  EXTERNAL_MEMO_TIMESHEET,
  FIND_TIMESHEET,
  EDIT_INVOICE,
  INDEX_TIME_OFF,
  FIND_TIME_OFF,
  EDIT_TIME_OFF
];

export const EMPLOYEE_HAS_PERMISSIONS = [FIND_VENDOR, ...TIMESHEET_PERMISSION_GROUPS, ...TIME_OFF_PERMISSION_GROUPS];
