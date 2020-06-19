<template>
	<mavon-editor :subfield="false"
				  :defaultOpen="'preview'"
				  :editable="false"
				  :toolbarsFlag="false"
				  :value="article"></mavon-editor>
</template>

<script>
	export default{
		data (){
			return {
				title: "test",
				article:""
			}
		} ,
		created() {
			this.$axios({
				method: "get",
				url: "http://localhost:10520/test/user/sel?title=" + this.title
			})
			.then(suc =>{
				this.article = suc.data
			})
			.catch(err => {
				console.log(err);
			})
		}
	}
</script>

<style>
</style>
