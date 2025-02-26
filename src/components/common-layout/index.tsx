import { ReactNode } from 'react';

interface CommonLayoutProps {
  children: ReactNode;
}


export function CommonLayout({children}: CommonLayoutProps){
    return(
        <div className="mx-auto max-w-7xl p-6 lg:px-8">
            {/* Header Compoment */}
            Header

            {/* Main Component */}
            <main>{children}</main>
        </div>
    )
}