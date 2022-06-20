import { Outlet } from 'react-router-dom';

export const LoggedLayout: React.FunctionComponent<{}> = () => {
    return (
        <div className="grid h-screen place-items-center bg-gray-800">
            <Outlet />
        </div>
    );
};