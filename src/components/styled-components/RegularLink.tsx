import {Link as RouterLink, LinkProps} from "react-router-dom";
import React from "react";
import clsx from "clsx";

type TLink = {
    children: React.ReactNode;
    className?: string;
} & LinkProps;

export const RegularLink: React.FunctionComponent<TLink> = ({ children, className, ...props }) =>{
    return (
        <RouterLink
            className={clsx("text-tiffany-blue hover:underline", className)}
            {...props}
        >
            {children}
        </RouterLink>
    );
}
