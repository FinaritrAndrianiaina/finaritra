<script>
	import scramble from 'svelte-typewriter/modes/scramble';
	import Timeline from '$lib/components/timeline/Timeline.svelte';
	import Atropos from 'atropos/svelte';
	let x = 0,
		y = 0;
</script>

<svelte:window bind:innerWidth={x} bind:innerHeight={y} />
<Atropos shadowScale={0} class="overflow-hidden ">
	<div
		class="container mx-auto flex flex-col justify-center space-y-2 transition-transform"
		style="min-height: 80vh; "
	>
		<div
			data-atropos-offset="1"
			use:scramble={{ scrambleDuration: 1000 }}
			class="self-center w-5/6 py-10 flex text-center flex-col bg-base-100"
		>
			<h5 data-atropos-offset="-5" class="lg:text-4xl text-2xl">🌄 Hello world!!</h5>
			<div class="lg:text-6xl text-5xl  font-extrabold text-primary">
				<span>Je m'appelle </span><span class="underline">Finaritra</span>,
			</div>
			<h2 class="lg:text-5xl text-xl font-extrabold text-primary opacity-80">Développeur Backend & Frontend</h2>
		</div>
		<div data-atropos-offset="5" class="flex justify-center space-x-2 bg-base-100">
			<a href="/cv_finaritra.pdf" class="btn btn-outline shadow-sm hover:shadow-xl hover:scale-105">curriculum vitae</a>
			<a href="mailto:finaritrandrianiaina@gmail.com" class="btn shadow-sm hover:shadow-xl hover:scale-105">Dire bonjour</a>
		</div>
	</div>
</Atropos>
<main class="container mx-auto my-1  flex flex-col ">
	<hr class="border-primary mb-3" />
	<div class="lg:w-1/2 w-full lg:px-0 px-4 self-center">
		<section>
			<h5 class="text-2xl top-0 z-10 font-thin bg-base">
				<span class="font-bold">1.</span> A propos de moi
			</h5>
			<div class="flex flex-wrap">
				<p class="text-center ">
					Bonjour le monde,<br /> je m'appelle
					<span class="italic font-semibold"
						>ANDRIANIAINA <span class="underline">Finaritra</span> Haritiana</span
					>. <br />
					En ce moment, je suis étudiant en alternance en tant qu'Ingénieur d'étude et de développement
					chez Pulse. Je suis passionné par la création de solutions innovantes et j'aime travailler
					sur des projets stimulants qui ont un impact réel sur les utilisateurs. Je suis toujours à
					la recherche de nouvelles connaissances et opportunités.
				</p>
			</div>
		</section>
		<section class="flex flex-col">
			<h5 class="text-2xl my-5 bg-base  top-0 font-thin w-1/2 ">
				<span class="font-bold">2.</span> Parcours
			</h5>
			<div class="">
				<Timeline />
			</div>
		</section>
	</div>
</main>
