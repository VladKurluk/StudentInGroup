<template>
    <b-navbar type="is-dark">
        <template slot="brand">
            <b-navbar-item href="/">
                <img alt="Vue logo" src="../assets/logo.png">
                Test
            </b-navbar-item>
        </template>

        <template slot="end">
            <b-navbar-item tag="div">
                <div class="buttons">
                    <router-link class="button is-primary" to="/">Students</router-link>
                    <router-link class="button is-primary" to="/courses">Courses</router-link>
                </div>
            </b-navbar-item>
        </template>
    </b-navbar>
</template>

 <script>
 export default {
    name: 'Navbar',
 }
 </script>