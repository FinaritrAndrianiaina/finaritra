<script>
	import Markee from '$lib/components/Markee.svelte';
	import {GithubIcon} from "svelte-feather-icons"
	import {scramble} from 'svelte-typewriter';
</script>

<div class="container mx-auto" style="min-height: full;">
		<div use:scramble={{scrambleDuration:2100}} class="py-40 px-24 flex  flex-col">
			<h1 class="text-9xl font-extrabold">Hello world!</h1>
			<h5 class="text-5xl">I am a developer</h5>
			<p class="text-3xl font-thin">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi reiciendis at, itaque quam
				perspiciatis nisi ipsam tenetur hic, neque non odio ipsa eaque aperiam, suscipit dolore sunt
				impedit sint enim!
			</p>
		</div>
	<hr class="my-1 border-primary" />
</div>

