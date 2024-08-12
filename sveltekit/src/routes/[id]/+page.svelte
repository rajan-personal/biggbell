<script lang="ts">
    export let data;

    function displayValue(value: any): string {
        return value === null ? "N/A" : value.toString();
    }
</script>

<div class="flex flex-col items-center min-h-screen w-screen bg-yellow-50 p-8">
    <h1 class="text-3xl font-bold py-10">Profile page</h1>
    
    <div class="w-full max-w-4xl">
        <div class="bg-white shadow-md rounded-lg p-6 mb-6">
            <h2 class="text-2xl font-semibold mb-4">Personal Information</h2>
            <p><strong>Full Name:</strong> {data.data.data.full_name}</p>
            <p><strong>Phone Number:</strong> {data.data.data.number}</p>
            <p><strong>Email:</strong> {data.data.data.mail_id}</p>
            <p><strong>About:</strong> {displayValue(data.data.data.about_you)}</p>
        </div>

        <div class="bg-white shadow-md rounded-lg p-6 mb-6">
            <h2 class="text-2xl font-semibold mb-4">YouTube Statistics</h2>
            <p><strong>Subscribers:</strong> {displayValue(data.data.data.yt_subscribers)}</p>
            <p><strong>Engagement:</strong> {displayValue(data.data.data.yt_engagement)}</p>
            <p><strong>Content Niche:</strong> {displayValue(data.data.data.yt_content_niche)}</p>
            <p><strong>Deliverables:</strong> {displayValue(data.data.data.yt_deliverables)}</p>
            <p><strong>Gender Ratio:</strong> {displayValue(data.data.data.yt_details_gender_ratio)}</p>
            <p><strong>Age To:</strong> {displayValue(data.data.data.yt_details_age_to)}</p>
            <p><strong>Top Cities:</strong> {displayValue(data.data.data.yt_details_top_cities)}</p>
        </div>

        <div class="bg-white shadow-md rounded-lg p-6 mb-6">
            <h2 class="text-2xl font-semibold mb-4">Instagram Statistics</h2>
            <p><strong>Followers:</strong> {displayValue(data.data.data.ig_followers)}</p>
            <p><strong>Engagement:</strong> {displayValue(data.data.data.ig_engagement)}</p>
            <p><strong>Content Niche:</strong> {displayValue(data.data.data.ig_content_niche)}</p>
            <p><strong>Deliverables:</strong> {displayValue(data.data.data.ig_deliverables)}</p>
            <p><strong>Gender Ratio:</strong> {displayValue(data.data.data.ig_details_gender_ratio)}</p>
            <p><strong>Age To:</strong> {displayValue(data.data.data.ig_details_age_to)}</p>
            <p><strong>Top Cities:</strong> {displayValue(data.data.data.ig_details_top_cities)}</p>
        </div>
    </div>
</div>
