import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export const config = {
    matcher: [
        '/admin/:path*',
        '/datasets/:path*',
        '/home/:path*',
        '/profile/:path*',
        '/requestposts/:path*',
    ],
};

export function middleware(request: NextRequest) {
    if (!request.cookies.has('datashelf_token')) {
        return NextResponse.redirect(new URL('/login', request.url));
    }
    console.log(request.cookies.getAll());
    return;
}
