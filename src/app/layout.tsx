import './globals.css';

export const metadata = {
  title: 'Datashelf - Landing page',
  description: 'This is the landing page of the Datashelf website',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
