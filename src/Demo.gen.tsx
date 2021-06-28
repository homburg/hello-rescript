/* TypeScript file generated from Demo.res by genType. */
/* eslint-disable import/first */


import {from as fromNotChecked} from 'rxjs';

import {map as mapNotChecked} from 'rxjs/operators';

// In case of type error, check the type of 'from' in 'Demo.re' and 'rxjs'.
export const fromTypeChecked: <a>(_1:a[]) => rxObservable<a> = fromNotChecked;

// Export 'from' early to allow circular import from the '.bs.js' file.
export const from: unknown = fromTypeChecked as <a>(_1:a[]) => rxObservable<a>;

// In case of type error, check the type of 'map' in 'Demo.re' and 'rxjs/operators'.
export const mapTypeChecked: <i,o>(_1:((_1:i) => o)) => (_1:rxObservable<i>) => rxObservable<o> = mapNotChecked;

// Export 'map' early to allow circular import from the '.bs.js' file.
export const map: unknown = mapTypeChecked as <i,o>(_1:((_1:i) => o)) => (_1:rxObservable<i>) => rxObservable<o>;

// tslint:disable-next-line:max-classes-per-file 
// tslint:disable-next-line:class-name
export abstract class rxObservable<t> { protected opaque!: t }; /* simulate opaque types */
