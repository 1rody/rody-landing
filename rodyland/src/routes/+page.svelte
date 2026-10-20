<script>
    import Navbar from "#lib/components/layout/landing/NavBar.svelte";
    import Footer from "#lib/components/layout/landing/Footer.svelte";

    import Hero from "#lib/components/pages/landing/Hero.svelte";
    import Stars from "#lib/components/pages/landing/misc/Stars.svelte";
    import History from "#lib/components/pages/landing/History.svelte";
    import About from "#lib/components/pages/landing/About.svelte";
    import Projects from "#lib/components/pages/landing/Projects.svelte";


    import  FakeLoading from "#lib/components/pages/landing/Loading.svelte";
</script>

<title>
    RODY.CITY | WELCOME TO MY LAND ON WEB
</title>

<FakeLoading/>
<Navbar/>
<main>
    <Stars/>
    <Hero/>
    <History/>
    <About/>
    <Projects/>
</main>
<Footer/>