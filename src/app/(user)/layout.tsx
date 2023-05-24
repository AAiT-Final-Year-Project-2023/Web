import '../globals.css';
import UserNavbar from '@/components/UserNavbar';
import UserFooter from '@/components/UserFooter';

export const metadata = {
    title: 'Datashelf - Landing page',
    description: 'This is the landing page of the Datashelf website',
};

export default function Layout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body>
                <UserNavbar />
                {children}
                <UserFooter />
            </body>
        </html>
    );
}
