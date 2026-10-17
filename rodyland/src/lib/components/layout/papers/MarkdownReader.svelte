<script lang="ts">
  import SvelteMarkdown from "@humanspeak/svelte-markdown";

  interface Props {
    content?: string;
  }

  let { content = "" }: Props = $props();
</script>

<div class="prose prose-neutral dark:prose-invert max-w-none">
  <SvelteMarkdown source={content} />
</div>