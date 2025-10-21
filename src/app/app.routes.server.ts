import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  {
    path: '**', //this means all my routes are being rendered on the server (SSR). This also means I can't use browser API's such as localStorage
    renderMode: RenderMode.Prerender
  }
];
