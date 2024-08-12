import { PUBLIC_API_URL } from '$env/static/public'

export const load = async ({ params }) => {
    let data = await fetch(PUBLIC_API_URL + '/items/creator/' + params.id + '?expand=*').then(res => res.json()).catch(err => console.log(err));
    return {
        data
    };
}