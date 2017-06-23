# Nativescript @Ngrx/Store Debugger
An Agular2+ directive for adding Gradients to your Nativescript UI.

## How To
* Install.
```
tns plugin add nativescript-ng-gradient
```

* In your App module.
``` javascript
import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NSGradientDirectiveModule } from "nativescript-ng-gradient";
import { AppComponent } from "./app.component";

@NgModule({
  declarations: [ AppComponent ],
  bootstrap: [ AppComponent ],
  imports: [
    NativeScriptModule,
    NSGradientDirectiveModule
  ],
  schemas: [ NO_ERRORS_SCHEMA ]
})
export class AppModule { }

```

* In your Component. 
``` javascript
import { Component } from "@angular/core";
import { Types, Orientation } from "nativescript-ng-gradient";

@Component({
  selector: 'ns-app',
  template: `
    <ActionBar title="Hello"></ActionBar>

    <StackLayout [nsgrad]="gColors" [nsgradType]="gType" [nsgradOrient]="gOrient">
      <Label text="Hello World"></Label>
    </StackLayout>
  `
})
export class AppComponent {
  public gColors = ['#666666', '#eeeeee'];
  public gType = Types.RADIAL_GRADIENT;
  public gOrient = Orientation.TOP_BOTTOM;
}
```

* Thats all. No dependencies. 

## License

[MIT](/LICENSE)
