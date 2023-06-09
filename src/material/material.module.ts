import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatToolbarModule} from '@angular/material/toolbar';
import{MatIconModule} from '@angular/material/icon';
import{MatButtonModule} from '@angular/material/button';
import{MatSidenavModule} from '@angular/material/sidenav';
import{MatListModule} from '@angular/material/list';
import{MatFormFieldModule} from '@angular/material/form-field';
import{MatMenuModule} from '@angular/material/menu';

import{MatInputModule} from '@angular/material/input';
import{MatSelectModule} from '@angular/material/select';
@NgModule({
    declarations: [],
    imports: [
      CommonModule,
      MatToolbarModule,
      MatIconModule,
      MatButtonModule,
      MatSidenavModule,
      MatListModule,
      MatFormFieldModule,
      MatMenuModule,
      MatInputModule,
      MatSelectModule
    ],
    exports:[
      MatToolbarModule,
      MatIconModule,
      MatButtonModule,
      MatSidenavModule,
      MatListModule,
      MatFormFieldModule,
      MatMenuModule,
      
    ]
    
    
  })
  export class MaterialModule { }