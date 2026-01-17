import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/navigation';

export const proxy = createMiddleware(routing);

export const config = {
    // Match only internationalized pathnames
    matcher: ['/', '/(ua|en)/:path*']
};
