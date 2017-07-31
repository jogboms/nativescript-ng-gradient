import { Directive, HostListener, ElementRef, Input } from '@angular/core';
import { Color } from 'color';

declare const ios: any, CAGradientLayer, NSMutableArray, CGPointMake;

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
    @Input('nsgradRadius') gradientRadius: number = 0;

    constructor(private el: ElementRef) { }

    @HostListener('loaded', ['$event'])
    onLoaded(event) {
        this.makeGradient();
    }

    makeGradient() {
        let nativeView = this.el.nativeElement;
        if (!nativeView) {
            throw new Error("Native view is not created yet!");
        }
        let gradientLayer = CAGradientLayer.layer();
        let nativeColors = NSMutableArray.alloc().initWithCapacity(this.gradientColors.length);

        this.gradientColors.forEach(function (color: Color) {
            nativeColors.addObject(color.ios.CGColor);
        });
        gradientLayer.colors = nativeColors;

        gradientLayer.frame = nativeView.bounds;
        this.setStartAndEndPoints(gradientLayer, orientation);
        nativeView.layer.insertSublayerAtIndex(gradientLayer, 0);
    }

    private setStartAndEndPoints(gradientLayer: any, orientation?: any) {
        switch (orientation) {
            case Orientation.TL_BR:
                gradientLayer.startPoint = CGPointMake(0, 0);
                gradientLayer.endPoint = CGPointMake(1, 1);
            case Orientation.LEFT_RIGHT:
                gradientLayer.startPoint = CGPointMake(0, 0.5);
                gradientLayer.endPoint = CGPointMake(1, 0.5);
            case Orientation.BL_TR:
                gradientLayer.startPoint = CGPointMake(0, 1);
                gradientLayer.endPoint = CGPointMake(1, 0);
            case Orientation.BOTTOM_TOP:
                gradientLayer.startPoint = CGPointMake(0.5, 1);
                gradientLayer.endPoint = CGPointMake(0.5, 0);
            case Orientation.BR_TL:
                gradientLayer.startPoint = CGPointMake(1, 1);
                gradientLayer.endPoint = CGPointMake(0, 0);
            case Orientation.RIGHT_LEFT:
                gradientLayer.startPoint = CGPointMake(1, 0.5);
                gradientLayer.endPoint = CGPointMake(0, 0.5);
            case Orientation.TR_BL:
                gradientLayer.startPoint = CGPointMake(1, 0);
                gradientLayer.endPoint = CGPointMake(0, 1);
            case Orientation.TOP_BOTTOM:
                gradientLayer.startPoint = CGPointMake(0.5, 0);
                gradientLayer.endPoint = CGPointMake(0.5, 1);
        }
    }
}
