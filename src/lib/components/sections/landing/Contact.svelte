<script lang="ts">
  import { enhance } from "$app/forms";
  import { page } from "$app/state";

  let sending = $state(false);
</script>

<section id="contact" class="flex  z-8 relative flex-col items-center justify-center w-full h-full py-20 bg-white text-dark">
     <section id="message-form" class="flex flex-col bg-white border-1 border-black lg:shadow-xl   lg:w-2/3 items-center justify-center  h-full p-5 lg:px-30 text-dark">
        <h1 class="lg:text-8xl lg:p-8 text-5xl text-center flex font-climate flex-nowrap uppercase font-black leading-none">Get in touch</h1>
        <p>send me a message or connect with me on social media</p>
        <form class="flex flex-col items-center justify-center p-10 w-full"     method="POST"  action="?/contact"  use:enhance={() => { 
             sending = true;    
             return async ({ update }) => {  
                await update({ noScroll: true });      
                sending = false;  };  
            }
        }>
            <fieldset class="flex items-center justify-center w-full ">
                <div class="flex flex-col items-center justify-center w-full ">
                    <input type="text" required name="name" placeholder="Name" class="border-1 border-black p-2 m-2 w-full"/>
                    <input type="email" required name="email" placeholder="Email" class="border-1 border-black p-2 m-2 w-full"/>
                </div>
            </fieldset>
            <fieldset class="flex flex-col items-center justify-center w-full ">
                <textarea name="message" placeholder="I wanna something... create develop I WANT TO BUILD MY IDEA" required class="border lg:min-h-40 w-full p-2"></textarea>
            </fieldset>
            <button disabled={sending} class="bg-black text-white p-5 m-5 w-full">{sending ? "Enviando..." : "Enviar"}</button>

            {#if page.form?.ok}<p class="text-green-600">Enviado!</p>{/if}
            {#if page.form?.error}<p class="text-red-600">{page.form.error}</p>{/if}
        </form>
     </section>
</section>  