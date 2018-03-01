<template>
	<div class="g-topHeader">
        虎扑体育
        <div class="g-search"></div>    
	</div>
</template>

<script type="text/javascript">
export default {
  name: 'topHeader',
  data () {
    return {
		tabs: [{
			href: '/match',
			name:'比赛',
            isActive: true
		},{
			href: '/news',
			name:'新闻',
            isActive: false
		},{
			href: '/forum',
			name:'论坛',
            isActive: false
		},{
			href: '/data',
			name:'数据',
            isActive: false
		},{
			href: '/more',
			name:'更多',
            isActive: false
		}]
    }
  },
  methods: {
    tabChange(thisTab) {
        this.tabs.forEach( tab => {
            tab.isActive = (tab.name == thisTab.name);
        })
    }
  }
}
</script>

<style lang="scss" scoped>
.g-topHeader {
    position: fixed;
    top: 0;
    width: 100%;
    height: 6rem;
    line-height: 6rem;
    text-align: center;
    color: #fff;
    font-style: italic;
    background: #900;
    font-size: 2.4rem;
}

.g-search {
    position: absolute;
    top: 50%;
    transform: translate(0, -50%) rotate(45deg);
    right: 2rem;
    width:2rem;
    height:2rem;
    border-radius:50%;
    border: 2px solid #fff;

    &::before {
        content: "";
        position: absolute;
        top: 50%;
        right: -1rem; 
        width: 1rem;
        height: 2px;
        background: #fff;
    }
}


</style>