import { Directive, HostListener, ElementRef, Input } from '@angular/core';
import { Color } from 'color';

declare const android: any;
export enum Types {
  LINEAR_GRADIENT,
  RADIAL_GRADIENT,
  SWEEP_GRADIENT,
  RING,
}
export const Orientation = {
  BL_TR: 'BL_TR',
  BOTTOM_TOP: 'BOTTOM_TOP',
  BR_TL: 'BR_TL',
  LEFT_RIGHT: 'LEFT_RIGHT',
  RIGHT_LEFT: 'RIGHT_LEFT',
  TL_BR: 'TL_BR',
  TOP_BOTTOM: 'TOP_BOTTOM',
  TR_BL: 'TR_BL',
}

@Directive({ selector: '[nsgrad]' })
export class NSGradientDirective {
  @Input('nsgrad') gradientColors: string[] = ['#ffffff', '#000000'];
  @Input('nsgradOrient') gradientOrient: string = Orientation.LEFT_RIGHT;
  @Input('nsgradType') gradientType: number = Types.LINEAR_GRADIENT;
  
  constructor(private el: ElementRef) { }

  @HostListener('loaded', ['$event'])
  onLoaded(event) {
    this.makeAndroid();
  }

  makeAndroid() {
    let backgroundDrawable = new android.graphics.drawable.GradientDrawable();
    let colors = this.gradientColors.map(c => (new Color(c)).android);
    backgroundDrawable.setColors(colors);
    backgroundDrawable.setGradientType(this.gradientType);

    const orient = Orientation[this.gradientOrient] || Orientation.LEFT_RIGHT; // Defaults to LEFT_RIGHT
    const orientation = android.graphics.drawable.GradientDrawable.Orientation[orient];
    backgroundDrawable.setOrientation(orientation);
    this.el.nativeElement.android.setBackgroundDrawable(backgroundDrawable);
  }
}
