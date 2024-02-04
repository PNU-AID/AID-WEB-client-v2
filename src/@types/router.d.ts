declare module 'router' {
  export type RouteItem = {
    path: string;
    label: string;
    withAuth: boolean;
    element: JSX.Element;
    hidden?: boolean;
  };
}
