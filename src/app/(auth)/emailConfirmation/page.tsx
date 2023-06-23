'use client';
import { useRef } from 'react';
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';
import { Me } from '@/common/types';

export default function Page() {
    const router = useRouter();
    const email = useRef<HTMLInputElement>(null);
    const code = useRef<HTMLInputElement>(null);

    const handleConfirmation = async (
        event: React.FormEvent<HTMLFormElement>,
    ) => {
        event.preventDefault();
        // do frontend validation here

        console.log({
            email: email.current?.value,
            code: code.current?.value,
        });

        try {
            const res = await fetch(
                `http://${process.env.backendHost}/api/auth/verify/`,
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        email: email.current?.value,
                        code: code.current?.value,
                    }),
                },
            );
            const data = await res.json();
            Cookies.set('datashelf_token', `Bearer ${data.access_token}`, {
                secure: true,
                sameSite: 'strict',
            });
            console.log(data.access_token);
            // check if they're admin or not

            const meRes = await fetch(
                `http://${process.env.backendHost}/api/user/me`,
                {
                    headers: {
                        Authorization: `Bearer ${data.access_token}`,
                    },
                },
            );
            const meData: Me = await meRes.json();

            // if (data2.roles.includes(Role.ADMIN)) {
            //     router.push('/admin');
            //     return;
            // }
            router.push('/home');
        } catch (err) {
            alert(err);
            console.error(err);
        }
    };
    return (
        <main>
            <div className="flex min-h-screen flex-col items-center justify-center">
                <div className="w-full max-w-md">
                    <form
                        className="mb-4 rounded px-8 pb-8 pt-6 shadow-lg"
                        onSubmit={handleConfirmation}
                    >
                        <div className="mb-4">
                            <label
                                className="mb-2 block text-sm font-bold "
                                htmlFor="email"
                            >
                                Email
                            </label>
                            <input
                                className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight  shadow focus:outline-none"
                                id="email"
                                type="text"
                                placeholder="email"
                                ref={email}
                            />
                        </div>
                        <div className="mb-4">
                            <label
                                className="mb-2 block text-sm font-bold "
                                htmlFor="code"
                            >
                                Code
                            </label>
                            <input
                                className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight  shadow focus:outline-none"
                                id="code"
                                type="text"
                                placeholder="code"
                                ref={code}
                            />
                        </div>

                        <div className="flex items-center justify-between">
                            <button
                                className="focus:shadow-outline rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700 focus:outline-none"
                                type="submit"
                            >
                                Confirm
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </main>
    );
}
