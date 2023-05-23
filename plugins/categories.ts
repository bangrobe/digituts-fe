export default defineNuxtPlugin({
    name: 'categories',
    enforce: 'pre', // or 'post'
    async setup(nuxtApp) {
        const { data } = await useFetchApi('/api/categories')
        console.log("In Plugin", data);
        const parentCategoriesId = [1]
        return {
            provide: {
                categories: data.value
            }
        }
    },
    hooks: {
        'app:created'() {
            const nuxtApp = useNuxtApp()
        }
    }

})