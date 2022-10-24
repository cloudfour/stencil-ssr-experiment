/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface ImageCompare {
        "image1": string;
        "image2": string;
    }
}
declare global {
    interface HTMLImageCompareElement extends Components.ImageCompare, HTMLStencilElement {
    }
    var HTMLImageCompareElement: {
        prototype: HTMLImageCompareElement;
        new (): HTMLImageCompareElement;
    };
    interface HTMLElementTagNameMap {
        "image-compare": HTMLImageCompareElement;
    }
}
declare namespace LocalJSX {
    interface ImageCompare {
        "image1"?: string;
        "image2"?: string;
    }
    interface IntrinsicElements {
        "image-compare": ImageCompare;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "image-compare": LocalJSX.ImageCompare & JSXBase.HTMLAttributes<HTMLImageCompareElement>;
        }
    }
}