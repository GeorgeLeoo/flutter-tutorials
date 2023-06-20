<!--
 * @Author: 季晓东
 * @Date: 2023-06-20 14:49:13
 * @LastEditors: 季晓东
 * @LastEditTime: 2023-06-20 15:25:20
 * @Description: 
 * @FilePath: /flutter-tutorials/src/App.vue
-->
<script setup>
import section1 from './section1.json'
</script>

<template>
	<div>
		<el-menu class="el-menu-demo" mode="horizontal" :ellipsis="false">
			<el-menu-item index="0">Flutter教程</el-menu-item>
			<div class="flex-grow" />
			<el-menu-item index="1"> </el-menu-item>
		</el-menu>
		<section class="body">
			<div v-for="(section, index) in section1" :key="index">
				<h1>{{ section['chapter'] }}</h1>
				<h2>{{ section['title'] }}</h2>
				<template v-for="(content, i) in section.desc" :key="i">
					<p>{{ content }}</p>
				</template>
				<div>
					<div v-for="(content, ci) in section.content" :key="ci" class="content">
            <h6>步骤{{ ci + 1 }}</h6>
						<p>{{ content.p }}</p>
						<p>{{ content.desc }}</p>
					</div>
				</div>
			</div>
		</section>
	</div>
</template>

<style scoped>
.content {
	position: relative;
	border-radius: 15px;
	padding: 1rem 2rem;
	background-color: var(--color-step-background);
	overflow: hidden;
	filter: blur(0);
  margin: 30px 0;
  border-left: 8px solid var(--color-figure-light-blue);
}
.body {
  padding: 3rem;
}
</style>
