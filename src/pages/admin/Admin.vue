<template>
<div>
    <Nav />
    <div class="container-fluid">
        <div class="row">
            <main class="ms-sm-auto col-lg-12 px-md-4">
                <router-view />
            </main>
        </div>
    </div>
</div>
</template>

<script>
import Nav from '@/components/Nav';
export default {
    name: "Admin",
    components: { 
        Nav,
    }
}
</script>