import { Header } from '@/components/sections/header';
import { ReactNode } from 'react';

const AppLayout = ({ children }: { children: ReactNode }) => {
    return (
        <main className="root-container">
            <div className="mx-auto max-w-7xl">
                <Header />
                <div className="mt-20 pb-20">{children}</div>
            </div>
        </main>
    );
};

export default AppLayout;
