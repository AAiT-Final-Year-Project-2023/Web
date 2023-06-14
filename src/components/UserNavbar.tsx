'use client';

import { Me } from '@/common/types';
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';
import useSWR from 'swr';

const getUser = async (url: string) => {
    const token = Cookies.get('datashelf_token');
    const meRes = await fetch(url, {
        headers: {
            Authorization: `${token}`,
        },
    });
    return await meRes.json();
};

export default function UserNavbar() {
    const router = useRouter();
    const { data, error, isLoading } = useSWR(
        `http://${process.env.backendHost}/api/user/me`,
        getUser,
    );

    const handleLogout = (
        event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    ) => {
        event.preventDefault();
        Cookies.remove('datashelf_token');
        router.push('/login');
    };

    return (
        <nav className="">
            <div className="navbar bg-base-100">
                <div className="flex-1">
                    <a className="btn-ghost btn text-xl normal-case">
                        DataShelf
                    </a>
                </div>
                <div className="flex-none gap-2">
                    <div className="dropdown-end dropdown">
                        <label
                            tabIndex={0}
                            className="btn-ghost btn-circle avatar btn"
                        >
                            {!error && !isLoading && (
                                <div className="f flex w-10 items-center justify-center rounded-full">
                                    {/* {data.image ? (
                                        <img
                                            src={`http://${process.env.backendHost}/uploads/profile-images/${data.image}`}
                                        />
                                    ) : (
                                        <p>{data.username.charAt(0)}</p>
                                    )} */}
                                    <p className="h-full bg-green-200 text-lg leading-loose ">
                                        {data && data.username
                                            ? data.username.charAt(0)
                                            : ''}
                                    </p>
                                </div>
                            )}
                        </label>
                        <ul
                            tabIndex={0}
                            className="dropdown-content menu rounded-box menu-sm mt-3 w-52 bg-base-100 p-2 shadow"
                        >
                            <li>
                                <a className="justify-between">Profile</a>
                            </li>
                            <li>
                                <a>Settings</a>
                            </li>
                            <li>
                                <a onClick={handleLogout}>Logout</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
}