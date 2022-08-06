import { Outlet } from 'react-router-dom';

export const QuizLayout: React.FunctionComponent<{}> = () => {
    return (
        <div className="flex justify-center justify-items-center">
            <Outlet />
        </div>
    );
};