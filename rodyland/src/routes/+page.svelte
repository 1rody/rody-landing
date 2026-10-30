<script>
    import Navbar from "#lib/components/layout/landing/NavBar.svelte";
    import Footer from "#lib/components/layout/landing/Footer.svelte";

    import Hero from "#lib/components/pages/landing/Hero.svelte";
    import Stars from "#lib/components/pages/landing/misc/Stars.svelte";
    import About from "#lib/components/pages/landing/About.svelte";
    import Projects from "#lib/components/pages/landing/Projects.svelte";

    import  FakeLoading from "#lib/components/pages/landing/Loading.svelte";

    //motion anim
    import { animate, scroll } from "motion"

    function scrollProgress(element) {
        return scroll(
        animate(element, { scaleX: [0, 1] }, { ease: "linear" })
        );
    }
</script>

<title>
    RODY.CITY | WELCOME TO MY LAND ON WEB
</title>

<div class="progress z-50 fixed top-1" {@attach scrollProgress}></div>
<FakeLoading/>
<Navbar/>
<main>
    <Stars/>
    <Hero/>
    <About/>
    <Projects/>
</main>
<Footer/>