

export function getBaseUrl(): string {
    return process.env.NEXT_PUBLIC_SITE_URL || 'https://mathstutorgeneva.vercel.app';
}
