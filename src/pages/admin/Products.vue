<template>
<div class="table-responsive">
    <table class="table table-striped table-sm">
        <thead>
            <tr>
                <th scope="col">#</th> 
                <th scope="col">Image</th>
                <th scope="col">Category</th>
                <th scope="col">Title</th>
                <th scope="col">Action</th>  
            </tr>
        </thead>
        <tbody>
            <tr v-for="product in products" :key="product.id">
                <td>{{ product.id }}</td>
                <td><img :src="product.image" height="50" /></td>
                <td>{{ product.category }}</td>
                <td>{{ product.title }}</td>
                <td>Delete Button Here</td> <!-- this is where you left off -->
            </tr>
        </tbody>
    </table>
</div>
</template>

<script>
import { ref, onMounted } from 'vue';
export default {
    name: "Products",
    setup() {
        const products = ref([]);

        onMounted(async () => {
            const response = await fetch('https://fakestoreapi.com/products');

            products.value = await response.json();
        });

        return {
            products
        }
    }
}
</script>