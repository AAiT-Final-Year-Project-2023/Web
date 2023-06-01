import '../globals.css';
import AdminNavbar from '@/components/AdminNavbar';

export const metadata = {
    title: 'Datashelf - Admin Dashboard',
    description: 'This is the admin dashboard of the Datashelf website',
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body>
                <AdminNavbar />
                {children}
            </body>
        </html>
    );
}
