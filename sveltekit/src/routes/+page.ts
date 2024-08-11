const API_URL = "http://localhost:8055"

export const load = async () => {
    let data = await fetch(API_URL + '/items/creator').then(res => res.json()).catch(err => console.log(err));
    return {
        data
    };
}