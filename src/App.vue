<template>
    <div id="app">
        <topHeader></topHeader>
        <topNav></topNav>
        <router-view></router-view>
    </div>
</template>

<script>
import topNav from './components/topNav';
import topHeader from './components/topHeader';

export default {
    name: 'app',
    data() {
        return {
            test: 1
        }
    },
    components: { topNav, topHeader }
}
</script>

<style lang="scss" scoped>
body {
    font-family: tahoma, Arial, Roboto, 'Droid Sans', 'Helvetica Neue', 'Droid Sans Fallback', 'Hiragino Sans GB', 'Heiti SC', sans-self;
    -webkit-text-size-adjust: 100%;
    -ms-text-size-adjust: 100%;
    background: #eee;
}

#app {
    position: relative;
}
</style>
