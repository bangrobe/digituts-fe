<template>
    <div class="blog-detail-wrapper">
        <div class="details pt-section">
            <div class="container">
                <div class="grid grid-cols-1">
                    <ArticleDetail :article="article"/>
                    <p class="text-sm text-gray-900 text-right" v-if="article.link">
                        Source: {{ article.link }}
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
const article = ref({})
const query = gql`

query getPostBySlug($slug:String){
  findSlug(modelName:"post",slug: $slug){
    ... on PostEntityResponse{
      data{
        id
        attributes{
          title
          link
          content
          category{
            data {
              attributes {
                name
                slug
                logo_svg
              }
            }
          }
          tags {
            data {
              attributes {
                name
                slug
              }
            }
          }
        }
      }
    }
  }
}`
const variables = { slug: useRoute().params.slug }
const { data } = await useAsyncQuery(query, variables);
article.value = data.value.findSlug.data.attributes;
</script>