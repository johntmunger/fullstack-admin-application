<template>
  <form @submit.prevent="submit">
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
import { ref, onMounted } from "vue";
import { useRouter, useRoute } from "vue-router";

export default {
    name: "ProductsEdit",
    setup() {
        const title = ref('');
        const body = ref('');
        const router = useRouter();
        const route = useRoute();

        onMounted(async () => {
            const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${route.params.id}`)

            const product = await response.json();

            title.value = product.title;
            body.value = product.body;
        });

        const submit = async () => {
            await fetch(`https://jsonplaceholder.typicode.com/posts/${route.params.id}`, {
                method: 'PUT',
                headers: { 'Content-type': 'application/json; charset=UTF-8' },
                body: JSON.stringify({
                    title: title.value,
                    body: body.value,
                })
            });

            await router.push('/admin/products');
        }
        

        return {
            title,
            body,
            submit,
        }
    }
}
</script>

<style scoped>

</style>