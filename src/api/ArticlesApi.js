import UseAuth from "../Hooks/UseAuth"

export const articlesCreatedByPromise = (email) => {
    // const {signOutUser} = UseAuth()
    return fetch(`https://eduverse-server.vercel.app/articles/myArticles/${email}`, {
        headers: {
            authorization: `Bearer ${localStorage.getItem('token')}`
        }
    })
    .then(res => res.json())
}