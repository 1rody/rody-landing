<script lang="ts">
    import SvelteMarkdown from "@humanspeak/svelte-markdown";
    import type { PageData } from "../../$types";

    let {data}: {data: PageData} = $props();
</script>

<article class="max-w-3xl mx-auto py-16 px-4 font-departure">
    <a href="/papers" class="text-sm opacity-60 hover:opacity-100 transition-opacity mb-10 inline-block"> ← Back </a>
    <div class="prose prose-neutral text-white dark:prose-invert max-w-none">
        <SvelteMarkdown source={data.content} />
    </div>
</article>