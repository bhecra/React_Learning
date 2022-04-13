import { LazyPage1, LazyPage2, LazyPage3 } from '../01-lazyload/pages';

interface Route {
  to: string;
  path: string;
  Component: () => JSX.Element;
  name: string;
}
export const routes: Route[] = [
  {
    to: '/home',
    path: 'home',
    Component: LazyPage1,
    name: 'Home',
  },
  {
    to: '/about',
    path: 'about',
    Component: LazyPage2,
    name: 'About',
  },
  {
    to: '/users',
    path: 'users',
    Component: LazyPage3,
    name: 'Users',
  },
];
