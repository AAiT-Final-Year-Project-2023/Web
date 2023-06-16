'use client';
import { useRef } from 'react';
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';
import { headers } from 'next/dist/client/components/headers';
import { Me } from '@/common/types';
import { Role } from '@/common/constants';
import Link from 'next/link';

export default function Page() {
    const router = useRouter();
    const email = useRef<HTMLInputElement>(null);
    const username = useRef<HTMLInputElement>(null);
    const password = useRef<HTMLInputElement>(null);

    const handleRegister = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        // do frontend validation here

        console.log({
            username: username.current?.value,
            password: password.current?.value,
            email: email.current?.value
        });

        try {
            const res = await fetch(
                `http://${process.env.backendHost}/api/auth/signup/`,
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        username: username.current?.value,
                        password: password.current?.value,
                        email: email.current?.value
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
                        onSubmit={handleRegister}
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
                                htmlFor="username"
                            >
                                Username
                            </label>
                            <input
                                className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight  shadow focus:outline-none"
                                id="username"
                                type="text"
                                placeholder="username"
                                ref={username}
                            />
                        </div>
                        <div className="mb-6">
                            <label
                                className="mb-2 block text-sm font-bold "
                                htmlFor="password"
                            >
                                Password
                            </label>
                            <input
                                className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight  shadow focus:outline-none"
                                id="password"
                                type="password"
                                placeholder="********"
                                ref={password}
                            />
                        </div>
                        <div className="flex items-center justify-between">
                            <button
                                className="focus:shadow-outline rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700 focus:outline-none"
                                type="submit"
                            >
                               Register 
                            </button>
                           <Link href={'/login'}>Login</Link> 
                        </div>
                    </form>
                    <div className="text-center">
                        <p className="mb-2 text-gray-500">Or sign in with</p>
                        <button
                            className="focus:shadow-outline rounded bg-red-500 px-4 py-2 font-bold text-white hover:bg-red-700 focus:outline-none"
                            type="button"
                        >
                            Google
                        </button>
                    </div>
                </div>
            </div>
        </main>
    );
}
