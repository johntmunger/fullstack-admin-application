<template>
<div>
    <Nav />
    <div class="container-fluid">
        <div class="row">
            <Menu />
            <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4">
                <div class="table-responsive">
                    <table class="table table-striped table-sm">
                    <thead>
                        <tr>
                        <th scope="col">#</th>
                        <th scope="col">Header</th>
                        <th scope="col">Header</th>
                        <th scope="col">Header</th>
                        <th scope="col">Header</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td>1,001</td>
                        <td>random</td>
                        <td>data</td>
                        <td>placeholder</td>
                        <td>text</td>
                        </tr>
                    </tbody>
                    </table>
                </div>
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
        Menu
    }
}
</script>