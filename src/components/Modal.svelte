<script>
	import { createEventDispatcher, onDestroy } from 'svelte';

	const dispatch = createEventDispatcher();
	const close = () => dispatch('close');

	let modal;

	const handle_keydown = e => {
		if (e.key === 'Escape') {
			close();
			return;
		}

		if (e.key === 'Tab') {
			// trap focus
			const nodes = modal.querySelectorAll('*');
			const tabbable = Array.from(nodes).filter(n => n.tabIndex >= 0);

			let index = tabbable.indexOf(document.activeElement);
			if (index === -1 && e.shiftKey) index = 0;

			index += tabbable.length + (e.shiftKey ? -1 : 1);
			index %= tabbable.length;

			tabbable[index].focus();
			e.preventDefault();
		}
	};

	const previously_focused = typeof document !== 'undefined' && document.activeElement;

	if (previously_focused) {
		onDestroy(() => {
			previously_focused.focus();
		});
	}
</script>

<svelte:window on:keydown={handle_keydown}/>

<div class="modal-background" on:click={close}></div>

<aside role="dialog" aria-modal="true" bind:this={modal}>
	<slot name="header"></slot>
	<slot></slot>
	<hr>

  <slot name="buttons">
	  <!-- svelte-ignore a11y-autofocus -->
    <button autofocus on:click={close}>close modal</button>
  </slot>
</aside>

<style>
	.modal-background {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: var(--dark50);
	}

	aside {
		position: absolute;
		position: fixed;
		left: 50%;
		top: calc(50% + var(--gutter2));
		width: calc(100vw - var(--spacer));
		max-width: 32em;
		max-height: calc(100vh - var(--spacer2));
		overflow: auto;
		transform: translate(-50%,-50%);

		background-color: var(--dark75);
    background-image: linear-gradient(315deg, var(--light50) 0%, var(--txt50));
		text-shadow: 1px 1px 2px var(--dark);
		padding: var(--gutter);
		border: solid var(--light);
		border-width: 2px 4px;
    border-radius: 4px;
		font-weight: bolder;
		/*text-align: center;*/
    z-index: 1;
	}
  hr {
    border-color: var(--light);
  }
</style>
