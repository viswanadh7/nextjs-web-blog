'use client';

import Link from 'next/link';
import { ReactNode } from 'react';

type TNextLink = {
    href: string;
    children: ReactNode | string;
    className?: string;
};
const NextLink = ({ href, children, className }: TNextLink) => {
    return (
        <Link href={href} className={className}>
            {children}
        </Link>
    );
};

export default NextLink;
