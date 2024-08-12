<script lang="ts">
    import { goto } from '$app/navigation';
    export let data;
</script>

<div class="flex flex-col  items-center h-screen w-screen bg-yellow-50">
    <h1 class="text-3xl font-bold py-10">Welcome to Biggbell</h1>
    
    {#each data.data.data as item, i}
        <div on:click={() => goto(`/${item.id}`)} class="text-xl py-2 cursor-pointer hover:text-blue-500">
            <p>{i+1}. {item.full_name}</p>
        </div>
    {/each}
</div>