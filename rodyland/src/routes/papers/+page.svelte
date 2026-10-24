<script>
    import Hero from "#lib/components/pages/papers/Hero.svelte";
    import Papers from "#lib/components/pages/papers/Papers.svelte";
    import Profile from "#lib/components/pages/papers/Profile.svelte";

    import ProfileWindow from "#lib/components/pages/papers/windows/Profile.svelte";
    import SocialsWindow from "#lib/components/pages/papers/windows/Socials.svelte";
    import StatusWindow from "#lib/components/pages/papers/windows/Status.svelte";

</script>

<title>RODY LAND | PAPER TOWN</title>

<SocialsWindow/>
<ProfileWindow/>
<StatusWindow/>
<main class="text-white font-pixel ">
    <Profile/>
    <Hero/>
    <Papers/>
</main>