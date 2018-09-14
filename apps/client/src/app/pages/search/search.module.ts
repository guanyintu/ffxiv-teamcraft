import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search/search.component';
import { RouterModule, Routes } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { CoreModule } from '../../core/core.module';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FullpageMessageModule } from '../../modules/fullpage-message/fullpage-message.module';
import { PageLoaderModule } from '../../modules/page-loader/page-loader.module';
import { PipesModule } from '../../pipes/pipes.module';
import { SettingsModule } from '../settings/settings.module';

const routes: Routes = [
  {
    path: '',
    component: SearchComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,

    CoreModule,
    TranslateModule,
    FullpageMessageModule,
    PageLoaderModule,
    PipesModule,
    SettingsModule,

    NgZorroAntdModule,

    RouterModule.forChild(routes)
  ],
  declarations: [SearchComponent]
})
export class SearchModule {
}
