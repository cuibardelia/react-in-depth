import { Outlet } from 'react-router-dom';

export const LoggedLayout: React.FunctionComponent<{}> = () => {
    return (
        <div className="grid h-screen">
            <Outlet />
        </div>
    );
};