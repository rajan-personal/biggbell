<script lang="ts">
    import { PUBLIC_API_URL } from '$env/static/public';
    export let data;

    let formData = { ...data.data.data };

    async function handleSubmit() {
        try {
            const response = await fetch(PUBLIC_API_URL + '/items/creator/' + data.data.data.id + '?expand=*', {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                throw new Error('Failed to update profile');
            }

            const result = await response.json();
            console.log('Profile updated successfully', result);
            // You can add a success message or redirect the user here
        } catch (error) {
            console.error('Error updating profile:', error);
            // You can display an error message to the user here
        }
    }
</script>

<div class="flex flex-col items-center min-h-screen w-screen bg-gray-100 p-8">
    <h1 class="text-3xl font-bold py-10 text-indigo-700">Update Your Profile</h1>
    
    <form class="w-full max-w-4xl bg-white shadow-md rounded-lg p-6" on:submit={handleSubmit}>
        <div class="mb-6">
            <h2 class="text-2xl font-semibold mb-4 text-indigo-600">Personal Information</h2>
            <label class="block mb-4">
                Full Name:
                <input type="text" bind:value={formData.full_name} class="w-full p-3 border border-gray-300 rounded bg-gray-50 shadow-sm">
            </label>
            <label class="block mb-4">
                Phone Number:
                <input type="tel" bind:value={formData.number} class="w-full p-3 border border-gray-300 rounded bg-gray-50 shadow-sm">
            </label>
            <label class="block mb-4">
                Email:
                <input type="email" bind:value={formData.mail_id} class="w-full p-3 border border-gray-300 rounded bg-gray-50 shadow-sm">
            </label>
            <label class="block mb-4">
                About You:
                <textarea bind:value={formData.about_you} class="w-full p-3 border border-gray-300 rounded bg-gray-50 shadow-sm"></textarea>
            </label>
        </div>

        <div class="mb-6">
            <h2 class="text-2xl font-semibold mb-4 text-indigo-600">YouTube Statistics</h2>
            <label class="block mb-4">
                Subscribers:
                <input type="number" bind:value={formData.yt_subscribers} class="w-full p-3 border border-gray-300 rounded bg-gray-50 shadow-sm">
            </label>
            <label class="block mb-4">
                Engagement:
                <input type="text" bind:value={formData.yt_engagement} class="w-full p-3 border border-gray-300 rounded bg-gray-50 shadow-sm">
            </label>
            <label class="block mb-4">
                Content Niche:
                <input type="text" bind:value={formData.yt_content_niche} class="w-full p-3 border border-gray-300 rounded bg-gray-50 shadow-sm">
            </label>
            <label class="block mb-4">
                Deliverables:
                <input type="text" bind:value={formData.yt_deliverables} class="w-full p-3 border border-gray-300 rounded bg-gray-50 shadow-sm">
            </label>
            <label class="block mb-4">
                Gender Ratio:
                <input type="text" bind:value={formData.yt_details_gender_ratio} class="w-full p-3 border border-gray-300 rounded bg-gray-50 shadow-sm">
            </label>
            <label class="block mb-4">
                Age To:
                <input type="text" bind:value={formData.yt_details_age_to} class="w-full p-3 border border-gray-300 rounded bg-gray-50 shadow-sm">
            </label>
            <label class="block mb-4">
                Top Cities:
                <input type="text" bind:value={formData.yt_details_top_cities} class="w-full p-3 border border-gray-300 rounded bg-gray-50 shadow-sm">
            </label>
        </div>

        <div class="mb-6">
            <h2 class="text-2xl font-semibold mb-4 text-indigo-600">Instagram Statistics</h2>
            <label class="block mb-4">
                Followers:
                <input type="number" bind:value={formData.ig_followers} class="w-full p-3 border border-gray-300 rounded bg-gray-50 shadow-sm">
            </label>
            <label class="block mb-4">
                Engagement:
                <input type="text" bind:value={formData.ig_engagement} class="w-full p-3 border border-gray-300 rounded bg-gray-50 shadow-sm">
            </label>
            <label class="block mb-4">
                Content Niche:
                <input type="text" bind:value={formData.ig_content_niche} class="w-full p-3 border border-gray-300 rounded bg-gray-50 shadow-sm">
            </label>
            <label class="block mb-4">
                Deliverables:
                <input type="text" bind:value={formData.ig_deliverables} class="w-full p-3 border border-gray-300 rounded bg-gray-50 shadow-sm">
            </label>
            <label class="block mb-4">
                Gender Ratio:
                <input type="text" bind:value={formData.ig_details_gender_ratio} class="w-full p-3 border border-gray-300 rounded bg-gray-50 shadow-sm">
            </label>
            <label class="block mb-4">
                Age To:
                <input type="text" bind:value={formData.ig_details_age_to} class="w-full p-3 border border-gray-300 rounded bg-gray-50 shadow-sm">
            </label>
            <label class="block mb-4">
                Top Cities:
                <input type="text" bind:value={formData.ig_details_top_cities} class="w-full p-3 border border-gray-300 rounded bg-gray-50 shadow-sm">
            </label>
        </div>

        <button type="submit" class="bg-indigo-600 text-white py-3 px-6 rounded hover:bg-indigo-700 mt-4">Update Profile</button>
    </form>
</div>
