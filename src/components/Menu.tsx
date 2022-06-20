import {Link} from "./styled-components";
import {useAuthContext} from "../features/Auth/Auth.context";

const enrichedMenu = [
    {
        name: "Home",
        to: "/dashboard"
    },
    {
        name: "My quizzes",
        to: "/quizzes"
    },
    {
        name: "Create new quiz",
        to: "/quizzes/new"
    },
    {
        name: "Legal stuff",
        to: "/legal"
    },
]

export const Menu: React.FunctionComponent<{}> = () => {
    const { logout, user } = useAuthContext();

    const isUserLoggedIn = user !== null;
    const menuData = isUserLoggedIn ? enrichedMenu : [];

    return (
        <nav className="bg-slate-900 w-full">
            <ul  className="flex text-orange-600 gap-2 w-7/12 m-auto">
                {menuData?.map((item, index) => (
                    <li key={`${item.to}-${index}`} className="ml-auto">
                        <Link
                            className="inline-block hover:underline p-2"
                            to={item.to}
                        >
                            {item.name}
                        </Link>
                    </li>
                    )
                )}
                {isUserLoggedIn ? (
                    <li className="ml-auto">
                        Hey There <span className="text-sky-300">{user.fName}</span>  &#128583;
                        <Link
                            className="inline-block hover:underline p-2"
                            to="/"
                            onClick={logout}
                        >
                            Logout
                        </Link>
                    </li>
                ) : (
                    <>
                        <li className="ml-auto">
                            <Link
                                className="inline-block hover:underline p-2"
                                to="/"
                            >
                                Login
                            </Link>
                        </li>
                        <li>
                            <Link
                                className="inline-block hover:underline p-2"
                                to="/register"
                            >
                                Register
                            </Link>
                        </li>
                    </>
                )}
            </ul>
        </nav>
    )
}