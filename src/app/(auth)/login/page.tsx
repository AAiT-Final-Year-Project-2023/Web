'use client';
import { useRef } from 'react';
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';
import { headers } from 'next/dist/client/components/headers';
import { Me } from '@/common/types';
import { Role } from '@/common/constants';

export default function Page() {
    const router = useRouter();
    const username = useRef<HTMLInputElement>(null);
    const password = useRef<HTMLInputElement>(null);

    const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        // do frontend validation here

        console.log({
            username: username.current?.value,
            password: password.current?.value,
        });

        try {
            const res = await fetch(
                `http://${process.env.backendHost}/api/auth/signin/`,
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        username: username.current?.value,
                        password: password.current?.value,
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
                        className="mb-4 rounded bg-white px-8 pb-8 pt-6 shadow-lg"
                        onSubmit={handleLogin}
                    >
                        <div className="mb-4">
                            <label
                                className="mb-2 block text-sm font-bold text-gray-700"
                                htmlFor="username"
                            >
                                Username
                            </label>
                            <input
                                className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
                                id="username"
                                type="text"
                                placeholder="username"
                                ref={username}
                            />
                        </div>
                        <div className="mb-6">
                            <label
                                className="mb-2 block text-sm font-bold text-gray-700"
                                htmlFor="password"
                            >
                                Password
                            </label>
                            <input
                                className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
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
                                Sign In
                            </button>
                            <a
                                className="inline-block align-baseline text-sm font-bold text-blue-500 hover:text-blue-800"
                                href="#"
                            >
                                Forgot Password?
                            </a>
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
