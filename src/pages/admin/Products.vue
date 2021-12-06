<template>
<div>
    <div class="pt-3 pb-2 mb-3 border-bottom">
        <div class="btn-toolbar mb-2 mb-md-0">
            <router-link to="/admin/products/create" class="btn btn-sm btn-outline-secondary">Add</router-link>    
        </div> 
    </div>
    <div class="table-responsive">
        <table class="table table-striped table-sm">
            <thead>
                <tr>
                    <th scope="col">Title</th>
                    <th scope="col">Body</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="product in products" :key="product.id">
                    <td>{{ product.title }}</td>
                    <td>{{ product.body }}</td>
                    <td>
                        <div class="btn-group mr-2">
                            <router-link :to="`/admin/products/${product.id}/edit`" class="btn btn-sm btn-outline-secondary">Edit</router-link>
                            <a href="#" class="btn btn-sm btn-outline-secondary" @click="del(product.id)">Delete</a>
                        </div>
                    </td> 
                </tr>
            </tbody>
        </table>
    </div>
</div>
</template>

<script lang="ts">
import { ref, onMounted } from "vue";
import { Product } from "../../interfaces/product";

export default {
    name: "Products",
    setup() {
        const products = ref([]);

        onMounted(async () => {
            const response = await fetch('http://localhost:5001/posts');

            products.value = await response.json();
        });

        const del = async(id: number) => {
            if (confirm('Are you sure you want to delete this product?')) {
                await fetch(`http://localhost:5001/posts/${id}`, {
                    method: 'DELETE'
                });

                products.value = products.value.filter((p: Product) => p.id !== id);
            }
        }

        return {
            products,
            del
        }
    }
}
</script>