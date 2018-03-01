<template>
	<div class="nav">
		<ul>
			<li v-for="tab in tabs" :class="{'active' : tab.isActive}" @click="tabChange(tab)">
				<router-link :to="tab.href" >
					{{ tab.name }}
				</router-link>
			</li>
		</ul>
	</div>
</template>

<script type="text/javascript">
export default {
  name: 'topNav',
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
.nav {
	position: fixed;
	bottom: 0;
	left: 0;
	right: 0;
	height: 6rem;
    
    &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 1px;
        background: #ddd;
        transform: scaleY(.5);
    }

    ul {
        width: 100%;
        display: flex;
    }

    li {
		flex: 1;
        height: 100%;
        cursor: pointer;

        a { 
            display: block;
            width: 100%;
            height: 100%;
            font-size: 1.2rem;
            line-height: 9rem;
            text-align: center;
            color: #333;
        }

        &.active {
            a {
                color: #900;
            }
        }
    }
}

</style>