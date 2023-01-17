<script lang="ts">
	import '../app.css';
	import concurrent from 'svelte-typewriter/modes/concurrent';
	import { GithubIcon, LinkedinIcon } from 'svelte-feather-icons';
	import Markee from '$lib/components/Markee/Markee.svelte';
</script>

<svelte:body  />
<nav
	class="flex justify-between z-0 py-6 bg-secondary lg:px-16 px-13 w-full"
>
	<div  >
		<h1 style="--cursor-width:1ch;--cursor-color:white;"
			use:concurrent={{
				interval: 100,
				cursor: true,
				delay: 300,
				keepCursorOnFinish: true,
				showCursorOnDelay: true
			}}
			class="lg:text-5xl text-xl text-secondary-content font-bold cursor-default"
		>
			Finaritra
		</h1>
	</div>
	<div class="flex justify-around  space-x-1">
		<a href="/cv_finaritra.pdf" class="btn btn-outline">curriculum vitae</a>
		<a href="mailto:finaritrandrianiaina@gmail.com" class="btn">Dire bonjour</a>
	</div>
</nav>

<div class="fixed h-screen z-50 left-auto right-5 top-0">
	<div class="vertical-box">
		<div>
			<div class="absolute w-full h-10 bg-gradient-to-b from-base-100 to-transparent z-10" />
			<Markee repeat={10} duration={100} direction="vertical">
				<a
					href="mailto:finaritrandrianiaina@gmail.com"
					class="mx-1 py-1 italic align-middle font-semibold text-xl hover:text-primary-content"
				>
					finaritrandrianiaina@gmail.com
				</a>
				<a
					href="https://github.com/FinaritrAndrianiaina"
					class="mx-1 py-1 w-fit text-xl hover:text-primary-content"
					><GithubIcon class="inline hover-bounce hover-bounce-vertical" /></a
				>
				<a
					href="https://www.linkedin.com/in/finaritrandrianiaina"
					class="mx-1 py-1 text-xl hover:text-primary-content"
					><LinkedinIcon class="inline hover-bounce hover-bounce-vertical" /></a
				>
			</Markee>
		</div>
	</div>
</div>

<div  class="my-3 -z-10 min-h-100">
	<slot />
</div>
<footer class="flex flex-col justify-end h-44 self-center bg-gradient-to-t from-secondary via-transparent  to-transparent">
	<h1 class="text-center text-primary-content">©️ Made with Svelte, Tailwind and DaisyUI</h1>
</footer>

<!--https://rolly.maj.digital/-->
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
