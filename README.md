# Nativescript + Angular Gradients
An Angular directive for adding Gradients to your Nativescript UI.

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

    <StackLayout [nsgrad]="gColors" [nsgradType]="gType" [nsgradOrient]="gOrient" [nsgradRadius]="gRadius">
      <Label text="Hello World"></Label>
    </StackLayout>
  `
})
export class AppComponent {
  public gColors = ['#666666', '#eeeeee'];
  public gType = Types.LINEAR_GRADIENT;
  public gOrient = Orientation.LEFT_RIGHT;
  public gRadius = 0;
}
```

### Properties
`[nsgrad]` : Initiates the Directive with an optional value of an array of colors. Defaults to a gradient from black to white.

`[nsgradType]` : Specifies the type of gradient to use. Defaults to `Types.LINEAR_GRADIENT`

`[nsgradOrient]` : Specifies the Orientation of the gradient. Defaults to  `Orientation.LEFT_RIGHT`

`[nsgradRadius]` : Specifies the Radius of the gradient is any. Defaults to  `0` (none);


### Note
Still can't seem to get RADIAL_GRADIENT to work and this only supported on Android for now.


* Thats all. No dependencies. 

## License

[MIT](/LICENSE)
