import { lazy } from 'react';

type JSXComponent = () => JSX.Element;
interface Route {
  to: string;
  path: string;
  Component: React.LazyExoticComponent<JSXComponent> | JSXComponent;
  name: string;
}

const lazy1 = lazy(
  () =>
    import(/* webpackChunkName: "lazyPage1" */ '../01-lazyload/pages/LazyPage1')
);
const lazy2 = lazy(
  () =>
    import(/* webpackChunkName: "lazyPage2" */ '../01-lazyload/pages/LazyPage2')
);
const lazy3 = lazy(
  () =>
    import(/* webpackChunkName: "lazyPage3" */ '../01-lazyload/pages/LazyPage3')
);
export const routes: Route[] = [
  {
    to: '/home',
    path: 'home',
    Component: lazy1,
    name: 'Home',
  },
  {
    to: '/about',
    path: 'about',
    Component: lazy2,
    name: 'About',
  },
  {
    to: '/users',
    path: 'users',
    Component: lazy3,
    name: 'Users',
  },
];
