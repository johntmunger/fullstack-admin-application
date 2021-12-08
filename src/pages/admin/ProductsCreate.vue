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
import { ref } from "vue";
import { useRouter } from "vue-router";
import { Product } from "../../interfaces/product";
import { fakeStoreService } from "../../services/FakeService";

export default {
    name: "ProductsCreate",
    setup() {
        const products = ref<Product[]>([]);
        const title = ref<'' | undefined>();
        const image = ref<'' | undefined>();
        const router = useRouter();

        const submitPost = async (): Promise<void> => {
            if (title.value && image.value) {
                await fakeStoreService.createProduct(title.value, image.value);
                products.value = await fakeStoreService.getProducts();
            }
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