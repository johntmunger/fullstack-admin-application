<template>
  <form @submit.prevent="submitPost">
        <div class="form-group">
            <label>Title</label>
            <input v-model="title" class="form-control" name="title" />
        </div>
        <div class="form-group">
            <label>Body</label>
            <input v-model="body" class="form-control" name="body" />
        </div>
        <button class="btn btn-outline-secondary mt-3">Save</button>
  </form>
</template>

<script>
import { ref } from "vue";
import { useRouter } from "vue-router";

export default {
    name: "ProductsCreate",
    setup() {
        const products = ref([]);
        const title = ref('');
        const body = ref('');
        const router = useRouter();

        const submitPost = async () => {

            await fetch(`https://jsonplaceholder.typicode.com/posts`, {
                method: 'POST',
                headers: { 'Content-type': 'application/json; charset=UTF-8' },
                body: JSON.stringify({
                    title: title.value,
                    body: body.value,
                })
            });

            await router.push('/admin/products');
        }

        return {
            products,
            title,
            body,
            submitPost,
        }
    }
}
</script>

<style scoped>

</style>