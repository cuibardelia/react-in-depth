import {Link} from "./styled-components";
import {useAuthContext} from "../features/Auth/Auth.context";

const LoggedMenu = [
    {
        name: "Quizzes",
        to: "/quizzes",
        type: "page"
    },
    {
        name: "Profile",
        to: "/me",
        type: "page"
    },
];

const AnonymousMenu = [
    {
        name: "Quizzes",
        to: "/general-quizzes",
        type: "page"
    },
    {
        name: "Profile",
        to: "/me",
        type: "page"
    },
];

export const Menu: React.FunctionComponent<{}> = () => {
    const { logout, user } = useAuthContext();

    const isUserLoggedIn = user !== null;
    const menuData = isUserLoggedIn ? LoggedMenu : AnonymousMenu;

    return (
        <nav className={`w-full p-7 ${isUserLoggedIn && 'bg-tiffany-blue'}`}>
            <ul className={`flex ${isUserLoggedIn ? 'text-white' : 'text-steel-gray'} gap-9 justify-end pr-20`}>
                {menuData?.map((item, index) => (
                    <li key={`${item.to}-${index}`}>
                        <Link
                            className="inline-block p-2"
                            to={item.to}
                        >
                            {item.name}
                        </Link>
                    </li>
                    )
                )}
                {isUserLoggedIn ? (
                    <li>
                        <Link
                            className="inline-block p-2"
                            to="/"
                            onClick={logout}
                        >
                            Log Out
                        </Link>
                    </li>
                ) : (
                    <li>
                        <Link
                            className="inline-block p-2"
                            to="/"

                        >
                            Log In
                        </Link>
                    </li>
                    )}

            </ul>
        </nav>
    )
}