import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'stencil-ssr-experiment',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements',
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      baseUrl: 'https://fake-website.com',
      serviceWorker: null, // disable service workers
      prerenderConfig: './prerender.config.ts',
    },
  ],
};
