<template>
	<div class="box">
		<router-link tag='div' v-for='(i,index) in nav' :to='i.url' class="foot" :key='index'>
			<div @click='onNavColor(index)'>
				<p :class='{color:index==navIndex}'><i :class="i.class"></i></p>
				<p :class='{color:index==navIndex}'><span>{{i.name}}</span></p>
			</div>
		</router-link>
	</div>
</template>
<script>
	export default {
		data(){
			return {
				navIndex: 0, 
				nav:[
					{
						name:'首页',
						class: 'fa fa-home',
						url: '/'
					},
					{
						name:'酒店',
						class:'fa fa-building',
						url: '/jiudian'
					},
					{
						name:'团队会议',
						class:'fa fa-group',
						url: '/huiyi'
					},
					{
						name:'入驻',
						class:'fa fa-plus',
						url: '/ruzhu'
					},
					{
						name:'我的',
						class:'fa fa-user',
						url: '/my'
					},


				]
			}
		},
		methods:{
			onNavColor:function(i){
				// console.log(i)
				this.navIndex = i
			}
		}
	}
</script>

<style lang='sass' scoped>
	.color
		transition: all 0.5s
		color: red
	p
		padding: 0
		margin: 0
	.box
		background: teal
		width: 100%
		padding: 2px 0
		position: fixed
		bottom: 0
		left: 0
		.foot
			display: inline-block
			width: 20%
			height: 1.2rem
			text-align: center
			line-height: 1.2rem


</style>
