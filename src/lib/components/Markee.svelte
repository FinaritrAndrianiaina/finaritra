<script>
    export let duration=10;
    export let repeat=29;
    export let revert=false;
    let repeater = [...Array(repeat).keys()];
</script>

<style>
	.animate-markee {
		animation: markee-animation linear infinite;
	}
	@keyframes markee-animation {
		from {
			transform: translateX(0%);
		}
		to {
			transform: translateX(-100%);
		}
	}
    .revert{
        animation-direction: reverse;
    }
</style>

<div class="overflow-hidden">
	<div class="animate-markee whitespace-nowrap" style="animation-duration: {duration}s;" class:revert={revert}>
        {#each repeater as i  }
            <slot/>
        {/each}
	</div>
</div>
