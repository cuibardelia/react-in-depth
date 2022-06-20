import { Outlet } from 'react-router-dom';

export const QuizLayout: React.FunctionComponent<{}> = () => {
    return (
        <div className="border-2 border-gray-200 rounded-sm max-w-fit text-center">
            <Outlet />
        </div>
    );
};