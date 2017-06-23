import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";

import { NSGradientDirective } from './src/gradient.directive';
export * from './src/gradient.directive';

@NgModule({
  declarations: [NSGradientDirective],
  imports: [NativeScriptModule],
  exports: [NSGradientDirective],
  schemas: [NO_ERRORS_SCHEMA]
})
export class NSGradientDirectiveModule {
}
