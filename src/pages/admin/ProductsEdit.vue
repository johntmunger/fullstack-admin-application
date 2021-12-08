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

<script lang="ts">
import { ref, onMounted } from "vue";
import { useRouter, useRoute } from "vue-router";
// import { Product } from "../../interfaces/product";
import { fakeStoreService } from "../../services/FakeService";
import axios from "axios";

export default {
    name: "ProductsEdit",
    setup() {
        const title = ref();
        const image = ref();
        const router = useRouter();
        const route = useRoute();

        onMounted(async () => {
            const int = Number(route.params.id);
            const resp = await fakeStoreService.getProduct(int);

            title.value = resp.title,
            image.value = resp.image
        });

        const submit = async () => {
            await axios.put(`http://localhost:5001/products/${route.params.id}`, {
                title: title.value,
                image: image.value,
            })
            .then(response => (console.log(response.data), router.push('/admin/products')))
            .catch(err => console.log(err))
        }

        const submitPost = async (): Promise<void> => {
            const int = Number(route.params.id);
            await fakeStoreService.updateProduct(int, title.value, image.value);

            await router.push('/admin/products');
        }
    
        return {
            title,
            image,
            submit,
            submitPost
        }
    }
}
</script>

<style scoped>

</style>