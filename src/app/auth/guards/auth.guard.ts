// Angular 16+ - no se crea una clase para los guards

import {
  ActivatedRouteSnapshot,
  CanActivateFn,
  CanMatchFn,
  Route,
  RouterStateSnapshot,
  UrlSegment,
} from '@angular/router';

/* No hay necesidad de crear una clase, simplemente definiendo una función flecha y exportándola
podemos utilizar sus funcionalidades de guard en el app-routing */
export const canActivateGuard: CanActivateFn = ( //Hay que tener en cuenta el tipado CanActiveFn
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
) => {
  console.log('CanActivate');
  console.log({ route, state });

  return false;
};

export const canMatchGuard: CanMatchFn = ( //Tipado CanMatchFn
  route: Route,
  segments: UrlSegment[]
) => {
  console.log('CanMatch');
  console.log({ route, segments });

  return false;
};
