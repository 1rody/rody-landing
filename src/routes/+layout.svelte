<script lang="ts">
  import '@fontsource/pixelify-sans/400.css';
  import '@fontsource/pixelify-sans/500.css';
  import '@fontsource/pixelify-sans/600.css';
  import '@fontsource/pixelify-sans/700.css';
  import '@fontsource-variable/climate-crisis';
  import '#lib/styles/globals.css';
    
  import '#lib/styles/globals.css';

  import favicon from '#lib/assets/favicon.svg';

  
  import type { LayoutProps } from './$types';

  import { onMount } from 'svelte';
  import { page } from '$app/state'; 
  import Lenis from 'lenis';
  import 'lenis/dist/lenis.css';

  let { children }: LayoutProps = $props();

  let lenis: Lenis | null = null;

  onMount(() => {
    lenis = new Lenis({
      autoRaf: true,
      duration: 1.2,
      smoothWheel: true,
    });

    // retornar a função de limpezaa
    return () => {
      lenis?.destroy();
      lenis = null;
    };
  });

  // sobe quando muda rota
  $effect(() => {
    //reagir a mudança de pagina
    page.url.pathname;

    if (lenis) {
      lenis.scrollTo(0, { immediate: true });
    }
  });
</script>

<svelte:head>
  <link rel="icon" href={favicon} />
</svelte:head>

{@render children()}