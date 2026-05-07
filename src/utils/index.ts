export function createPageUrl(pageName: string) {
    if (pageName === 'Home') return '/';
    return withTrailingSlash('/' + pageName.replace(/ /g, '-'));
}

export function withTrailingSlash(url: string = '') {
    if (
        !url ||
        url === '/' ||
        url.startsWith('#') ||
        url.startsWith('tel:') ||
        url.startsWith('mailto:') ||
        /^https?:\/\//.test(url)
    ) {
        return url;
    }

    const [pathWithQuery, hash = ''] = url.split('#');
    const [path, query = ''] = pathWithQuery.split('?');
    const normalizedPath = path.endsWith('/') ? path : `${path}/`;
    const normalizedQuery = query ? `?${query}` : '';
    const normalizedHash = hash ? `#${hash}` : '';

    return `${normalizedPath}${normalizedQuery}${normalizedHash}`;
}
