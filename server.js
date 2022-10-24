const stencil = require('./dist/hydrate');
const express = require('express');
const path = require('path');

const app = express();
const port = 3030;

async function serverRenderer(req, res, next) {
  const renderedHtml = await stencil.renderToString(
    `
    <image-compare
      image-1="https://cloudinary-marketing-res.cloudinary.com/image/upload/w_2000/sneakers-wide"
      image-2="https://cloudinary-marketing-res.cloudinary.com/image/upload/e_background_removal/ar_1.5,c_fill,w_2000/u_geometric-3,w_2000,ar_1.5,c_fill/fl_layer_apply/l_text:Roboto_150_bold:%E2%98%85%20%E2%98%85%20%E2%98%85%20%E2%98%85%20%E2%98%86,g_south_east,x_75,y_75,co_white/l_text:Roboto_120:$29.99,g_north_west,x_75,y_50,co_rgb:8b629f/l_8b629f,w_420,h_12,g_north_west,x_50,y_100/l_text:Roboto_120_bold:Sale:%20$19.99,g_north_west,x_520,y_50,co_white/l_badge-light,g_north_east,x_50,y_50,w_400/l_text:Roboto_100_bold:NEW,g_north_east,x_150,y_170,a_30,co_rgb:0f173b/f_auto,q_auto/sneakers-wide"
    >
    </image-compare>
  `,
  );

  let html = renderedHtml.html;
  html = html.replace(/<\!doctype html><html data-stencil-build="(.*)" class="hydrated"><head><meta charset="utf-8">/, '');
  html = html.replace('</head><body>', '');
  html = html.replace('</body>', '');
  html = html.replace('</html>', '');

  const regex = /<style sty-id="sc-image-compare">(.*)<\/style>/s;
  const css = html.match(regex)[1];

  // html += `<script type="module" src="/build/stencil-ssr-experiment.esm.js"></script>`;
  // res.send(html);

  html = html.replace(regex, '');
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify({ html, css, pathToJs: 'localhost:3030/build/stencil-ssr-experiment.esm.js' }));
}

async function run() {
  app.use('/build/', express.static(path.join(__dirname, 'www/build')));
  app.use('/assets/', express.static(path.join(__dirname, 'www/assets')));
  app.use(serverRenderer);

  app.listen(port, () => console.log(`server started at http://localhost:${port}/`));
}

run();
