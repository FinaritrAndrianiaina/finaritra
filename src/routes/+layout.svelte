<script>
    import "../app.css";
	import {concurrent} from "svelte-typewriter"
</script>

<nav class="flex justify-between py-6 bg-white px-16 w-full">
	<div class="min-h-12">
		<h1 use:concurrent={{interval:100,cursor:true}} class="text-5xl font-bold cursor-default">Hello</h1>
	</div>
	<div class="flex justify-around space-x-1">
		<button class="btn btn-ghost">Home</button>
		<button class="btn btn-outline">Work</button>
	</div>
</nav>

<div class="my-3 min-h-100">
	<slot/>
</div>