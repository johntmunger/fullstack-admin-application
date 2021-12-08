<template>
  <main>
    <div class="album py-5 bg-light">
        <div class="container">

            <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                <div class="col" v-for="product in products" :key="product.id">
                    <div class="card shadow-sm">
                        <img :src="product.image" height="180" />
                        <div class="card-body">
                            <p class="card-text">{{ product.title }}</p>
                            <div class="d-flex justify-content-between align-items-center">
                                <div class="btn-group">
                                <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
                                <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</main>

</template>

<script lang="ts">
import {ref, onMounted } from "vue";
import { Product } from "../interfaces/product";
import { fakeStoreService } from "../services/FakeService"; 
import axios from "axios";

export default {
    name: "Main",
    setup() {
        const products = ref([] as Product[] | undefined);

        onMounted(() => {
            fetchProducts();
        });

        const fetchProducts = async (): Promise<void> => {
            products.value = await fakeStoreService.getProducts();
        };

        return {
            products,
            fetchProducts,
        }
    }
}
</script>

<style scoped>
.card {
    margin-bottom: 2rem;
}
img {
    padding: 1.5rem;
}
</style>