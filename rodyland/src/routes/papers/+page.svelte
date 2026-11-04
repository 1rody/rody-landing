<script>
    import Hero from "#lib/components/sections/papers/Hero.svelte";
    import Papers from "#lib/components/sections/papers/Papers.svelte";
    import Profile from "#lib/components/sections/papers/Profile.svelte";

    import ProfileWindow from "#lib/components/sections/papers/windows/Profile.svelte";
    import SocialsWindow from "#lib/components/sections/papers/windows/Socials.svelte";
    import StatusWindow from "#lib/components/sections/papers/windows/Status.svelte";

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