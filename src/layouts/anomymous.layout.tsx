import { Outlet } from 'react-router-dom';
import {FullLogo} from "../components/logo/FullLogo";

export const AnonymousLayout: React.FunctionComponent<{}> = () => {
  return (
    <div className="max-w-md m-auto mt-20 text-center text-steel-gray">
        <FullLogo />
      <Outlet />
    </div>
  );
};
