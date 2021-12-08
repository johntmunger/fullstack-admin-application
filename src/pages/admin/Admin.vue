<template>
<div>
    <Nav />
    <div class="container-fluid">
        <div class="row">
            <!-- <Menu /> -->
            <main class="ms-sm-auto col-lg-12 px-md-4">
                <router-view />
            </main>
        </div>
    </div>
</div>
</template>

<script>
import Nav from '@/components/Nav';
import Menu from '@/components/Menu';
export default {
    name: "Admin",
    components: { 
        Nav,
        // Menu
    }
}
</script>