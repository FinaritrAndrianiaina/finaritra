<script lang="ts">
	import '../app.css';
	import concurrent from 'svelte-typewriter/modes/concurrent';
	import { GithubIcon, LinkedinIcon } from 'svelte-feather-icons';
	import Markee from '$lib/components/Markee/Markee.svelte';
</script>

<svelte:body />

<div class="drawer">
	<input id="my-drawer-3" type="checkbox" class="drawer-toggle" />
	<div class="drawer-content">
		<!-- Navbar -->
		<nav class="flex justify-between z-0 py-6 bg-secondary lg:px-16 px-4 w-full">
			<div>
				<h1
					style="--cursor-width:1ch;--cursor-color:white;"
					use:concurrent={{
						interval: 100,
						cursor: true,
						delay: 300,
						keepCursorOnFinish: true,
						showCursorOnDelay: true
					}}
					class="text-5xl  lg:block hidden  text-secondary-content font-bold cursor-default"
				>
					Finaritra
				</h1>
				<h1
					style="--cursor-width:1ch;--cursor-color:white;"
					use:concurrent={{
						interval: 100,
						cursor: true,
						delay: 300,
						keepCursorOnFinish: true,
						showCursorOnDelay: true
					}}
					class=" lg:hidden block text-5xl text-secondary-content font-bold cursor-default"
				>
					F
				</h1>
			</div>
			<div class="hidden justify-around  space-x-1 lg:flex ">
				<a href="/cv_finaritra.pdf" class="btn btn-outline">curriculum vitae</a>
				<a href="mailto:finaritrandrianiaina@gmail.com" class="btn">Dire bonjour</a>
			</div>
			<div class="flex-none lg:hidden">
				<label for="my-drawer-3" class="btn btn-square btn-ghost">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						class="inline-block w-6 h-6 stroke-current"
						><path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M4 6h16M4 12h16M4 18h16"
						/></svg
					>
				</label>
			</div>
		</nav>
		<div class="my-3 -z-10 min-h-100">
			<slot />
		</div>
		<footer class="footer footer-center p-10 pb-3 bg-gradient-to-t from-secondary to-transparent text-secondary-content">
			<div>
			  <h1 class="text-3xl font-bold">
				Finaritra
			  </h1> 
			  <p>Copyright ©{new Date().getFullYear()} - All right reserved</p>
			</div>
		</footer>
	</div>
	<div class="drawer-side">
		<label for="my-drawer-3" class="drawer-overlay" />
		<ul class=" p-4 w-80 bg-base-100 space-y-2">			
			<li><a href="/cv_finaritra.pdf" class="w-full btn btn-outline">curriculum vitae</a></li>
			<li><a href="mailto:finaritrandrianiaina@gmail.com" class="w-full btn">Dire bonjour</a></li>
		</ul>
	</div>
</div>
<div class="fixed lg:block hidden  h-screen z-50 left-auto right-5 top-0">
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
<!--https://rolly.maj.digital/ -->
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
