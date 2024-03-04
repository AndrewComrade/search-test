import React, { ReactNode } from 'react';
import { type FC } from 'react';

interface ContainerProps {
    children: ReactNode;
}

export const Container: FC<ContainerProps> = ({ children }) => {
    return <div className="max-w-7xl px-5 py-0 mx-auto">{children}</div>;
};
