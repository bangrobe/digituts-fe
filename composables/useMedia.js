
const getMediaUrl = (path) => {
    const config = useRuntimeConfig();
    return `${config.public.apiUrl}${path}`
}

const useMedia = (url) => {
    const imageUrl = url.startsWith('/') ? getMediaUrl(url) : url;
    return imageUrl;
}

export default useMedia;