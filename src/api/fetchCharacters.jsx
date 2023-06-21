export async function fetchCharacters() {
    try {

        const response = await fetch('https://dummyjson.com/users')
        const results = await response.json()
        return results.users;

    } catch (error) {
        console.log(error);
    }
}