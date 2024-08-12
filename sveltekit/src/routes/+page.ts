import { PUBLIC_API_URL } from '$env/static/public'

export const load = async () => {
    let data = await fetch(PUBLIC_API_URL + '/items/creator').then(res => res.json()).catch(err => console.log(err));
    return {
        data
    };
}