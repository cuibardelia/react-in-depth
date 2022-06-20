import clsx from 'clsx';
import React from 'react';

type TButton = {
    children: React.ReactNode;
    className?: string;
    type?: "submit" | "button" | "reset" | undefined;
};

export const Button: React.FunctionComponent<TButton> = ({ children, className, type}) => {
  return (
    <div className="">
      <button
          type={type}
        className={clsx(
          'rounded px-4 py-2',
          className
        )}
      >
        {children}
      </button>
    </div>
  );
};

export const PrimaryButton: React.FunctionComponent<TButton> = ({ children, className, type}) => {
    return <Button className={clsx("bg-quiz-purple", "text-white", className)} type={type}>{children}</Button>
}

export const SecondaryButton: React.FunctionComponent<TButton> = ({ children, className, type}) => {
    return <Button className={clsx("bg-steel-gray", "text-white", className)} type={type}>{children}</Button>
}