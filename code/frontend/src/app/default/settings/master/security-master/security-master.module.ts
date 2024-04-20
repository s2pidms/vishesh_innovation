import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {Routes, RouterModule} from "@angular/router";
import {SecurityMasterComponent} from "./security-master.component";
import {SharedModule} from "@shared/shared.module";

const routes: Routes = [
    {path: "tab_list", component: SecurityMasterComponent},
    {
        path: "user",
        loadChildren: () => import("./user/user.module").then(m => m.UserModule)
    },
    {
        path: "role",
        loadChildren: () => import("./role/role.module").then(m => m.RoleModule)
    },
    {
        path: "menu-item",
        loadChildren: () => import("./menu-item/menu-item.module").then(m => m.MenuItemModule)
    },
    {
        path: "sub_module_management",
        loadChildren: () =>
            import("./sub-module-management/sub-module-management.module").then(m => m.SubModuleManagementModule)
    },
    {
        path: "submodule_permissions",
        loadChildren: () =>
            import("./submodule-permissions/submodule-permissions.module").then(m => m.SubmodulePermissionsModule)
    },
    {
        path: "mail_configuration",
        loadChildren: () =>
            import("./mail-configuration/mail-configuration.module").then(m => m.MailConfigurationModule)
    },
    {
        path: "mail_trigger",
        loadChildren: () => import("./mail-trigger/mail-trigger.module").then(m => m.MailTriggerModule)
    }
];

@NgModule({
    declarations: [SecurityMasterComponent],
    imports: [CommonModule, RouterModule.forChild(routes), SharedModule]
})
export class SecurityMasterModule {}
