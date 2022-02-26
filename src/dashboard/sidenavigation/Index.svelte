<script>
	import SidenavItems from './Items.svelte';
	import SidenavHeader from './Header.svelte';
	import { open, closeSidenav } from '../provider/store';
	import { clickOutside } from '../provider/click-outside';

	const style = {
		left: 'left-0',
		right: 'right-0'
	};

	export let mobilePosition = 'right';
</script>

<aside
	use:clickOutside
	on:click_outside={closeSidenav}
	class={`
	  top-0
	  h-screen
	  scrollbar
      bg-gray-200
      overflow-y-auto
      lg:bg-transparent lg:block lg:relative lg:w-64
      ${$open ? 'absolute w-8/12 z-40 sm:w-5/12' : 'hidden'}
      ${style[mobilePosition]}
   `}
>
	<div class="pb-32 lg:pb-6">
		<SidenavHeader />
		<SidenavItems />
	</div>
</aside>

<style>
	.scrollbar::-webkit-scrollbar {
		width: 0;
		background: transparent; /* hide sidenav scrollbar on Chrome, Opera and other webkit Browsers*/
	}
	.scrollbar {
		-ms-overflow-style: none;
	}
</style>
