export const packageAddedByPromise = (email) => {
    return fetch(`${import.meta.env.VITE_API_URL}/package?email=${email}`)
        .then(res => res.json())
}