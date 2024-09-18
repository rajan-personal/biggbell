<script lang="ts">
  import Reels from "$lib/components/reels.svelte";
  export let profileData = {
    coverImage:
      "https://pbs.twimg.com/profile_banners/1668063794/1672925615/1500x500",
    profileImage:
      "https://pbs.twimg.com/profile_images/856580774220357634/H35WMMje_400x400.jpg",
    name: "Bhuvan Bam",
    username: "@bhuvan.bam22",
    location: "Mumbai, India",
    tags: [
      "Comedy",
      "Entertainment",
      "Social Media",
      "TikTok",
      "Bollywood",
      "Movies",
      "Web Series",
    ],
    description: `Bhuvan Bam is an Indian comedian, actor, and social media personality. He is best known for his
        YouTube channel 'BB Ki Vines', where he posts short comedy sketches and videos. He has a huge
        fan following on social media and is considered one of the most influential personalities in
        India.`,
  };
</script>

<div class="bg-gray-100 min-h-screen py-8 px-4 sm:px-6 lg:px-8">
  <div class="max-w-md mx-auto sm:max-w-xl lg:max-w-2xl">
    <div class="relative">
      <!-- Cover Image -->
      <div
        class="h-36 sm:h-48 bg-cover bg-center rounded-t-lg"
        style="background-image: url('{profileData.coverImage}');"
      ></div>
      <!-- Profile Image -->
      <img
        src={profileData.profileImage}
        alt="Profile picture of {profileData.name}"
        class="absolute left-4 -bottom-14 sm:-bottom-16 transform w-28 h-28 sm:w-32 sm:h-32 rounded-full border-4 border-white object-cover"
      />
    </div>
    <div
      class="bg-white pt-16 sm:pt-20 pb-8 px-4 sm:px-6 shadow-sm rounded-b-lg"
    >
      <!-- Name and Username -->
      <h1 class="text-2xl sm:text-3xl font-bold text-gray-900">
        {profileData.name}
      </h1>
      <p class="text-gray-600 mt-1">{profileData.username}</p>
      <!-- Location -->
      <p class="text-gray-600 mt-1 flex items-center">
        <svg
          class="w-4 h-4 mr-1"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
            clip-rule="evenodd"
          ></path>
        </svg>
        {profileData.location}
      </p>
      <!-- Tags -->
      <div class="mt-4 flex flex-wrap gap-2">
        {#each profileData.tags as tag}
          <span
            class="px-3 py-1 bg-blue-100 text-blue-800 text-xs sm:text-sm font-semibold rounded-full"
            >{tag}</span
          >
        {/each}
      </div>
      <!-- Description -->
      <p class="mt-4 text-sm sm:text-base text-gray-700">
        {profileData.description}
      </p>
      <!-- Buttons -->
      <div class="flex flex-col sm:flex-row gap-4 mt-6">
        <button
          class="flex-1 py-2 px-4 border border-blue-600 text-blue-600 font-semibold rounded-full hover:bg-blue-50 transition duration-300"
        >
          Edit profile
        </button>
        <button
          class="flex-1 py-2 px-4 border border-blue-600 text-blue-600 font-semibold rounded-full hover:bg-blue-50 transition duration-300"
        >
          View connections
        </button>
      </div>
    </div>
  </div>
</div>

<Reels reels={[    
  { url: "https://www.instagram.com/reel/C__IRmENL68/" },
  { url: "https://www.instagram.com/reel/C-DJ76rpWna/" },
  { url: "https://www.instagram.com/reel/C__IRmENL68/" },
  { url: "https://www.instagram.com/reel/C-DJ76rpWna/" },
  { url: "https://www.instagram.com/reel/C__IRmENL68/" },
  { url: "https://www.instagram.com/reel/C-DJ76rpWna/" },
  { url: "https://www.instagram.com/reel/C__IRmENL68/" },
  { url: "https://www.instagram.com/reel/C-DJ76rpWna/" },
  { url: "https://www.instagram.com/reel/C__IRmENL68/" },
  { url: "https://www.instagram.com/reel/C-DJ76rpWna/" },
  { url: "https://www.instagram.com/reel/C__IRmENL68/" },
  { url: "https://www.instagram.com/reel/C-DJ76rpWna/" },
]} />
