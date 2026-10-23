<script>
    import Hero from "#lib/components/pages/papers/Hero.svelte";
    import Papers from "#lib/components/pages/papers/Papers.svelte";
    import Profile from "#lib/components/pages/papers/Profile.svelte";

    import ProfileWindow from "#lib/components/pages/papers/windows/Profile.svelte";

</script>

<title>RODY LAND | PAPER TOWN</title>

<ProfileWindow/>
<main class="text-white font-pixel ">
    <Profile/>
    <Hero/>
    <Papers/>
</main>