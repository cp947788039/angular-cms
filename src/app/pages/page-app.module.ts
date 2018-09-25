import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import element module
import { ElModule } from 'element-angular';
// import common component
import { SideBarComponent } from '../commonangular/side-bar/side-bar.component';
import { TopComponent } from '../commonangular/top/top.component';
// import page component
import { PageAppComponent } from './page-app.component';
import { AuthorityAddComponent, AuthorityListComponent, AuthorityModifyComponent, RoleAddComponent, RoleListComponent, RoleModifyComponent } from './admin';
import { GoodsListComponent } from './basicdata';
import { ColumnMangComponent } from './column';
import { CommissionListComponent } from './commission';
import { CompanyListComponent } from './companyinfo';
import { DeviceListComponent } from './device';
import { FinanceListComponent } from './finance';
import { GroupAccountListComponent } from './groupinfo';
import { HomeComponent } from './index/home.component';
import { MemberListComponent } from './member';
import { NoticeListComponent } from './notice';
import { OperatorListComponent } from './operator';
import { OrderListComponent } from './order';
import { PriceapvalListComponent } from './priceapval';
import { ActivityListComponent } from './romotion';
import { SettingPwdModifyComponent } from './setting';
import { StockListComponent } from './stock';
import { SupplierListComponent } from './supplier';
import { WorkspaceComponent } from './workinfo';


export const ROUTER_CONFIG: Routes = [
  {
    path: '', component: PageAppComponent,
    children: [
      { path: '', pathMatch: 'full', redirectTo: '/' },
      { path: '', component: HomeComponent },
      { path: 'authority-add', component: AuthorityAddComponent },
      { path: 'authority-list', component: AuthorityListComponent },
      { path: 'authority-modify', component: AuthorityModifyComponent },
      { path: 'role-add', component: RoleAddComponent },
      { path: 'role-list', component: RoleListComponent },
      { path: 'role-modify', component: RoleModifyComponent },
      { path: 'goods-list', component: GoodsListComponent },
      { path: 'colum-nmang', component: ColumnMangComponent },
      { path: 'commission-list', component: CommissionListComponent },
      { path: 'company-list', component: CompanyListComponent },
      { path: 'device-list', component: DeviceListComponent },
      { path: 'finance-list', component: FinanceListComponent },
      { path: 'group-account-list', component: GroupAccountListComponent },
      { path: 'member-list', component: MemberListComponent },
      { path: 'notice-list', component: NoticeListComponent },
      { path: 'operator-list', component: OperatorListComponent },
      { path: 'order-list', component: OrderListComponent },
      { path: 'priceapval-list', component: PriceapvalListComponent },
      { path: 'activity-list', component: ActivityListComponent },
      { path: 'setting-pwd-modify', component: SettingPwdModifyComponent },
      { path: 'stock-list', component: StockListComponent },
      { path: 'supplier-list', component: SupplierListComponent },
      { path: 'workspace', component: WorkspaceComponent },
    ]
  }
];


@NgModule({
  imports: [
    RouterModule.forChild(ROUTER_CONFIG),
    ElModule.forRoot(),
  ],
  providers: [

  ],
  declarations: [
    SideBarComponent,
    TopComponent,
    PageAppComponent,
    AuthorityAddComponent, 
    AuthorityListComponent, 
    AuthorityModifyComponent, 
    RoleAddComponent, 
    RoleListComponent, 
    RoleModifyComponent,
    GoodsListComponent,
    ColumnMangComponent,
    CommissionListComponent,
    CompanyListComponent,
    DeviceListComponent,
    FinanceListComponent,
    GroupAccountListComponent,
    HomeComponent,
    MemberListComponent,
    NoticeListComponent,
    OperatorListComponent,
    OrderListComponent,
    PriceapvalListComponent,
    ActivityListComponent,
    SettingPwdModifyComponent,
    StockListComponent,
    SupplierListComponent,
    WorkspaceComponent,
  ]
})
export class PageAppModule {
}
