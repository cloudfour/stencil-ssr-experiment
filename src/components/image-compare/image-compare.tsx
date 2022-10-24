import { Component, Host, h, Element, State, Prop } from '@stencil/core';

@Component({
  tag: 'image-compare',
  styleUrl: 'image-compare.css',
  shadow: true,
})
export class CldImageCompare {
  @Element() hostElement: HTMLElement;

  @State() exposure: string = '50';

  @Prop() image1: string = '';
  @Prop() image2: string = '';

  render() {
    return (
      // TODO: The real implementation needs to handle alt text
      <Host style={{ '--exposure': `${this.exposure}%` }}>
        <img class="image-1" src={this.image1} />
        <img class="image-2" src={this.image2} />
        <label>
          <span class="visually-hidden">How much of the first image should be shown?</span>
          <input
            type="range"
            value="50"
            min="0"
            max="100"
            onInput={e => {
              const target: HTMLInputElement = e.target as HTMLInputElement;
              this.exposure = target.value;
            }}
          />
        </label>
      </Host>
    );
  }
}
