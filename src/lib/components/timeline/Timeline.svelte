<script>
	import Time from './Time.svelte';
	import TimelineDetails from './TimelineDetails.svelte';
	import TimelineParent from './TimelineParent.svelte';
	import about from '$lib/assets/about.me.json';
</script>

<TimelineParent>
	{#each about.timeline as timeline,i}
		<Time >
			<svelte:fragment slot="date">{@html timeline.date}</svelte:fragment>
			<svelte:fragment slot="description">
				{#each timeline.events as event}
					<TimelineDetails>
						<svelte:fragment slot="title">{@html event.title}</svelte:fragment>
						<svelte:fragment slot="description">
							{@html event.description}
						</svelte:fragment>
					</TimelineDetails>
				{/each}
			</svelte:fragment>
		</Time>
	{/each}
</TimelineParent>
