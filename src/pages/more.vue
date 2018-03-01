<template>
	<div class="more card" @click="changeTitle">
    <router-link to='/home'>
      <div class="card-content">
        <div class="media">
          <div class="media-left">
            <figure class="image is-48x48">
              <img src="http://bulma.io/images/placeholders/96x96.png" alt="Image">
            </figure>
          </div>
          <div class="media-content">
            <p class="title is-4">John Smith</p>
            <p class="subtitle is-6">@johnsmith</p>
          </div>
        </div>
        <div class="g-link-home" >我的主页 ></div>
      </div>
    </router-link>
	</div>	
</template>
<script>
export default {
  name: 'more',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    changeTitle() {
        
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.more {
    position: relative;
    overflow: hidden;
    margin-top: 7rem;

    .g-link-home {
      position: absolute;
      right: 2rem;
      top: 50%;
      transform: translate(0, -50%);
      font-size: 1.4rem;
      color: #ddd;
    }
}
</style>
