<script>
    export let duration=10;
    export let repeat=29;
    export let revert=false;
	export let direction="horizontal";
    let repeater = [...Array(repeat).keys()];
</script>

<style>
	.animate-markee-horizontal {
		animation: markee-animation linear infinite;
	}
	.animate-markee-vertical {
		animation: markee-animation-vertical linear infinite;
	}
	@keyframes markee-animation {
		from {
			transform: translateX(0%);
		}
		to {
			transform: translateX(-50%);
		}
	}
	@keyframes markee-animation-vertical {
		from {
			transform: translateY(0%);
		}
		to {
			transform: translateY(-50%);
		}
	}
    .revert{
        animation-direction: reverse;
    }
</style>

<div class="overflow-hidden" class:vertical={direction=="vertical"}>
	<div class="animate-markee-{direction} whitespace-nowrap" style="animation-duration: {duration}s;" class:revert={revert}>
        {#each repeater as i  }
            <slot/>
        {/each}
	</div>
</div>
