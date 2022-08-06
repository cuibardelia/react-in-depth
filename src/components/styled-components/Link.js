import {NavLink} from 'react-router-dom';

// TODO: className
export function Link({ children, className, ...props }) {
  return (
    <NavLink
      className={({ isActive }) =>
          `inline-block hover:underline py-2 pr-2 ${
              isActive && 'underscore'
          }`
      }
      {...props}
    >
      {children}
    </NavLink>
  );
}
