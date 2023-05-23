const useFetchApi = (url, fromOptions = {}) => {
    const config = useRuntimeConfig();
    return useFetch(url, {
      // key: `books-${keyChange}`,
      ...fromOptions,
      baseURL: config.public.apiUrl,
      // watch: [keyChange]
    });
    
  };
  
  export default useFetchApi;
  