import RequestPostDetail from '@/components/requestpost/RequestPostDetail';
import { cookies } from 'next/dist/client/components/headers';

export default function Page() {
    const token = cookies().get('datashelf_token')?.value || '';

    return (
        <main className="container">
            <RequestPostDetail props={{ token }} />
        </main>
    );
}
