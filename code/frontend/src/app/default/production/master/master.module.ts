import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule, Routes} from "@angular/router";
import {MasterComponent} from "./master.component";

const routes: Routes = [
    {
        path: "",
        component: MasterComponent,
        children: [
            {
                path: "ink_master",
                loadChildren: () => import("./ink-master/ink-master.module").then(m => m.InkMasterModule)
            },
            {
                path: "map_process_and_machine",
                loadChildren: () =>
                    import("./map-process-and-machine/map-process-and-machine.module").then(
                        m => m.MapProcessAndMachineModule
                    )
            },
            {
                path: "mould_master",
                loadChildren: () => import("./../../settings/master/production/mould-master/mould-master.module").then(m => m.MouldMasterModule)
            }
        ]
    }
];

@NgModule({
    declarations: [MasterComponent],
    imports: [CommonModule, RouterModule.forChild(routes)]
})
export class MasterModule {}
