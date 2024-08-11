<script lang="ts">
    export let data;
</script>
<div class="flex justify-center items-center h-screen w-screen">
    <h1 class="text-3xl font-bold">Welcome to SvelteKit</h1>
    <p>{JSON.stringify(data)}</p>
</div>
