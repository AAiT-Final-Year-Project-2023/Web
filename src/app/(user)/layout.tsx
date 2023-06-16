import '../globals.css';
import UserNavbar from '@/components/UserNavbar';
import UserFooter from '@/components/UserFooter';
import Sidebar from '@/components/Sidebar';

export const metadata = {
    title: 'Datashelf - Landing page',
    description: 'This is the landing page of the Datashelf website',
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body>
                <UserNavbar />
                <div className='flex gap-20'>
                    <div className='relative'>
                        <aside className='fixed top-[38%]'>
                            <div className=''>
                                <Sidebar />
                            </div>
                        </aside>
                    </div>
                    <div className='flex-grow'>
                        {children}
                    </div>
                </div>
                <UserFooter />
            </body>
        </html>
    );
}
