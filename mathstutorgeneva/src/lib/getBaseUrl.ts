

export function getBaseUrl(): string {
    if (typeof window !== 'undefined') {
        return window.location.origin;
    }
    return process.env.NEXT_PUBLIC_SITE_URL || 'https://mathstutorgeneva.vercel.app';
}

