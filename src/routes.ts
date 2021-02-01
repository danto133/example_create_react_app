type Route = {
    id: number;
    path: string;
    isAuth?: boolean;
    component: React.FC;
}

const routes: Route[] = [];

export default routes