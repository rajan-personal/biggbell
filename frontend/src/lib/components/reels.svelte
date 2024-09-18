<script>
  import { onMount } from "svelte";

  // Data structure for reels
  const reels = [
    { url: "https://www.instagram.com/reel/C__IRmENL68/" },
    { url: "https://www.instagram.com/reel/C-DJ76rpWna/" },
    // Add more reels as needed
  ];

  onMount(() => {
    // Load Instagram embed script
    const script = document.createElement("script");
    script.src = "//www.instagram.com/embed.js";
    script.async = true;
    document.body.appendChild(script);

    // Clean up function
    return () => {
      document.body.removeChild(script);
    };
  });
</script>

<svelte:head>
  <title>Instagram Reels Showcase</title>
</svelte:head>

<div class="bg-gray-100 p-4">
  <h1 class="text-3xl font-bold text-center mb-8">
    Most Popular Reels
  </h1>

  <div class="max-w-full mx-auto overflow-x-auto">
    <div class="flex flex-nowrap pb-4 gap-4 scroll-container">
      {#each reels as reel}
        <div class="flex-shrink-0 w-80 sm:w-96">
          <blockquote
            class="instagram-media w-full"
            data-instgrm-permalink={reel.url}
          >
            <div class="p-4">
              <a
                href={reel.url}
                target="_blank"
                class="text-blue-600 hover:underline"
                >View this Reel on Instagram</a
              >
            </div>
          </blockquote>
        </div>
      {/each}
    </div>
  </div>
</div>

<style>
  .scroll-container {
    -webkit-overflow-scrolling: touch;
    scrollbar-width: none; /* Firefox */
    -ms-overflow-style: none; /* Internet Explorer 10+ */
  }
  .scroll-container::-webkit-scrollbar {
    display: none; /* WebKit */
  }
</style>