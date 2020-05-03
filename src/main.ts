import 'hammerjs';

import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch(err => console.error(err));


// // para adicionar na tela inicial
// if ('serviceWorker' in navigator) {
//   window.addEventListener('load', () => {
//     navigator.serviceWorker.register('./ngsw-config.json')
//     .then((reg) => {
//       console.log('Registrado o serviceWorker', reg);
//     }).catch((err) => {
//       console.log('algo errado no serviceWorker', err);
//     });
//   });
// }


