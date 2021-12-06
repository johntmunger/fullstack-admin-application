<template>
  <form @submit.prevent="submitPost">
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
import { ref } from "vue";
import { useRouter } from "vue-router";

export default {
    name: "ProductsCreate",
    setup() {
        const products = ref([]);
        const title = ref('');
        const image = ref('');
        const router = useRouter();

        const submitPost = async () => {

            await fetch(`http://localhost:5001/products`, {
                method: 'POST',
                headers: { 'Content-type': 'application/json; charset=UTF-8' },
                body: JSON.stringify({
                    title: title.value,
                    image: image.value,
                })
            });

            await router.push('/admin/products');
        }

        return {
            products,
            title,
            image,
            submitPost,
        }
    }
}
</script>

<style scoped>

</style>