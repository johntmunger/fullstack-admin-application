<template>
  <form @submit.prevent="submit">
        <div class="form-group">
            <label>Title</label>
            <input v-model="title" class="form-control" name="title" />
        </div>
        <div class="form-group">
            <label>Image</label>
            <input v-model="image" class="form-control" name="image" />
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
        const image = ref('');
        const router = useRouter();
        const route = useRoute();

        onMounted(async () => {
            const response = await fetch(`http://localhost:5001/products/${route.params.id}`)

            const product = await response.json();

            title.value = product.title;
            image.value = product.image;
        });

        const submit = async () => {
            await fetch(`http://localhost:5001/products/${route.params.id}`, {
                method: 'PUT',
                headers: { 'Content-type': 'application/json; charset=UTF-8' },
                body: JSON.stringify({
                    title: title.value,
                    image: image.value,
                })
            });

            await router.push('/admin/products');
        }
        

        return {
            title,
            image,
            submit,
        }
    }
}
</script>

<style scoped>

</style>