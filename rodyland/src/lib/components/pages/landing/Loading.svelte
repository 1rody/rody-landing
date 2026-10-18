<script lang="ts">
  import { onMount } from 'svelte';
  let fakeLoading: HTMLElement | null = null;

  onMount(() => {
    const timer = setTimeout(() => {
      fakeLoading?.classList.add('hidden');
      fakeLoading?.classList.remove('bg-black')
      console.log('fake loading finalizado');
    }, 1000);

    return () => clearTimeout(timer);
  });
</script>

<section  bind:this={fakeLoading} class="h-screen fade-in w-full flex-col z-50 fixed absolute items-center justify-center flex bg-black">
  <p class="flow-up-anim text-white font-black">
    RODY.CITY 
  </p>
</section>