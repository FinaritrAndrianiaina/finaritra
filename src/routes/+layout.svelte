<script>
	import '../app.css';
	import { concurrent } from 'svelte-typewriter';
	import { GithubIcon,LinkedinIcon } from 'svelte-feather-icons';
	import Markee from '$lib/components/Markee.svelte';
</script>

<nav class="flex justify-between py-6 bg-secondary px-16 w-full">
	<div style="--cursor-width:1ch;--cursor-color:white;" class="min-h-12">
		<h1
			use:concurrent={{
				interval: 100,
				cursor: true,
				delay: 300,
				keepCursorOnFinish: true,
				showCursorOnDelay: true
			}}
			class="text-5xl text-secondary-content font-bold cursor-default"
		>
			Hello
		</h1>
	</div>
	<div class="flex justify-around  space-x-1">
		<button class="btn btn-ghost text-secondary-content">Home</button>
		<button class="btn btn-outline text-secondary-content">Work</button>
	</div>
</nav>

<div class="fixed z-50 left-auto right-10 top-0">
	<div class="vertical-box">
		<div>
			<div class="absolute w-full h-10 bg-gradient-to-b from-base-100 to-transparent z-10" />
			<Markee repeat={30} duration={120} direction="vertical">
				<a
					href="mailto:finaritrandrianiaina@gmail.com"
					class="mx-1 py-1 italic align-middle font-semibold text-xl hover:text-primary-content"
					>finaritrandrianiaina@gmail.com</a
				>
				<a
					href="mailto:finaritrandrianiaina@gmail.com"
					class="mx-1 py-1 font-semibold w-fit text-xl hover:text-primary-content"
					><GithubIcon class="inline" /></a
				>
				<a
					href="mailto:finaritrandrianiaina@gmail.com"
					class="mx-1 py-1 font-semibold text-xl hover:text-primary-content"><LinkedinIcon class="inline"/></a
				>
			</Markee>
		</div>
	</div>
</div>

<div class="my-3 min-h-100">
	<slot />
</div>

<style>
	.vertical-box {
		display: flex;
		flex-direction: column;
		-webkit-box-align: center;
		align-items: center;
		position: relative;
	}
	.vertical-box::before {
		content: '';
		display: block;
		width: 1.5px;
		height: 100px;
		margin: 0px auto;
		background-color: black;
	}
</style>
