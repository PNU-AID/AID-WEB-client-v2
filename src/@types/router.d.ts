declare module 'router' {
  export type RouteItem = {
    id: number;
    path: string;
    label: string;
    withAuth: boolean;
    element: JSX.Element;
  };
}
