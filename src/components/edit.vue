<template>
	<div class="contain">
		<div class="acticle">
			<div class="title">
				<span>文章标题:</span>
				<input type="text" placeholder="输入文章标题" v-model="artcleInfo.title" />
			</div>
			<div class="type">
				<span>文章类型:</span>
				<select v-model="artcleInfo.type">
					<option value="html">html</option>
					<option value="css">css</option>
					<option value="javascript">javascript</option>
					<option value="vue.js">vue.js</option>
				</select>
			</div>
		</div>
		<mavon-editor v-model="artcleInfo.value" @change="getmd"></mavon-editor>
		<button class="submit" @click="senddata">
			提交
		</button>
	</div>
</template>

<script>
export default {
  data () {
	return { 
		artcleInfo: {
			title: "",
			type: "",
			value: "",
			content: ""
		}
	}
  },
  methods:{
	getmd(value, render) {
		this.artcleInfo.content = render;
	},
	senddata(){
		this.$axios({
			method:'post',
			url: 'http://localhost:10520/test/user/add',
			data: {
				title: this.artcleInfo.title,
				type: this.artcleInfo.type,
				mdtext: this.artcleInfo.value,
				mdhtml: this.artcleInfo.content
			}
		})
		.then((success)=>{
			if (success.data === 0) {
				alert("添加成功");
			} else{
				alert("添加失败");
			}
		})
		.catch((error)=>{
			console.log(error)
		})
		this.artcleInfo.title = this.artcleInfo.value = this.artcleInfo.content = this.artcleInfo.type = ""
	}
  }
}
</script>

<style scoped="scoped">
	.contain{
		width: 95vw;
		margin: 0 auto;
	}
	.acticle {
		width: 100%;
		height: 60px;
		display: flex;
		justify-content: space-around;
		align-items: center;
		color: #757575;
	}
	.title input{
		width: 20em;
		height: 2em;
		margin-left: 1em;
		padding-left: 1em;
		border-radius: 1em;
		border: 1px solid #757575;
		outline: none;
	}
	.title input:focus,
	.type select:focus{
		border: 1px solid #409EFF;
		transition: all 0.5s;
	}
	.type select{
		height: 2em;
		padding: 0 1em;
		margin-left: 1em;
		border-radius: 1em;
		border: 1px solid #757575;
		outline: none;
	}
	.type select option{
		color: #757575;
	}
	.submit{
		width: 10em;
		height: 3em;
		background-color: #409eff;
		border-radius: 2em;
		color: #fff;
		border: none;
		outline: none;
		display: block;
		margin: 2em auto;
		cursor: pointer;
		box-shadow: 0 1px 2px rgba(0,0,0,0.07),
					0 2px 4px rgba(0,0,0,0.07),
					0 4px 8px rgba(0,0,0,0.07),
					0 8px 16px rgba(0,0,0,0.07),
					0 16px 32px rgba(0,0,0,0.07),
					0 32px 64px rgba(0,0,0,0.07)
	}
	.submit:hover{
		background-color: #00C5FF;
		transition: all 0.5s;
	}
</style>
