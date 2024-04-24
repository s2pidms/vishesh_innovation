changes in angular code

1. company crud
2. add new crud company grouping [_id,name,companies(String Array)]
3. role model => remove companyId field (become same for all company)
4. menuItem model => remove [ menuOrder roles] field
5. menuItem_company model => add field [companyId,menuItemId, displayTitle ,menuOrder, roles] (Update api a/cly for menuItem,menuItem_company to menuItem)
6. add new model menuItem_company_roles_mapping ==>
   [companyId,menuItemId,roleId,home,master,transactions,reports] ( use for roles base access tabs screen)
   For each role add all menuitem entries
7. submodule management ==> remove fields [order,isDisplay,displayName,disabled]
8. add new model submodule_management_company ==> add fields [submoduleManagementId,companyId,order,isDisplay,displayName,disabled]
9. Submodule_management_company_role_mapping ==> [companyId,roleId,submoduleManagementId,isDisplay][ SubModule Permissions updated]For each submodule_management card add all roles entries
10. AutoIncrement model update the getNextId and setNextId with auto-increment prefix

Create a new company
Write a script to insert and sync all data against data of that company

1. Roles entry ( add role company_sp)
2. menuItem and menuItem_company and menuItem_roles_mapping entry
3. Company entry
4. User (Super admin Entry and company_sp with company auto increment and default but diff for all company)
5. submodule management and submodule_management_company and submodule_management_company_role_mapping entry
6. SubModule Permissions entry
7. label Master entry
8. App parameters with companyId entry
9. attributesConfiguration json with companyId entry
10. mailConfig json entry
11. purchaseSAC entry

FrontEnd Side changes
1. MenuItems Guard update with menuItem_roles_mapping
2. create tabs component guard / function to display cards or not