import { writable } from 'svelte/store';

const open = writable(false);

const openSidenav = () => {
	open.update(() => true);
};

const closeSidenav = () => {
	open.update(() => false);
};

export { open, openSidenav, closeSidenav };
