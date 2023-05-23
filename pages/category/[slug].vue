<template>
  <div>
    <article class="group" v-for="article in data.categories.data[0].attributes.posts.data" :key="article.id">
      <img
        v-if="article.attributes.featured_image.data"
        :src="useMedia(article.attributes.featured_image.data.attributes.url)"
        alt="Lava"
        class="w-full rounded-xl object-cover shadow-xl transition group-hover:grayscale-[50%]"
      />

      <div class="p-4">
        <NuxtLink :to="`/article/${article.attributes.slug}`">
          <h3 class="text-lg font-medium text-gray-900">
            {{  article.attributes.title }}
          </h3>
        </NuxtLink>

        <p class="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
           {{ article.attributes.description }}
        </p>
      </div>
    </article>
  </div>
</template>
<script setup>
const query = gql`
  query getCategoryBySlug($slug: String) {
    categories(filters: { slug: { eq: $slug } }) {
      data {
        id
        attributes {
          posts {
            data {
              id
              attributes {
                slug
                title
                description
                featured_image {
                  data {
                    attributes {
                      url
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;

const variables = { slug: useRoute().params.slug };
const { data } = await useAsyncQuery(query, variables);
console.log(data.value.categories.data[0].attributes.posts.data);
</script>
