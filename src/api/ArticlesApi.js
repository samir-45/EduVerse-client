import UseAuth from "../Hooks/UseAuth"

export const articlesCreatedByPromise = (email) => {
    // const {signOutUser} = UseAuth()
    return fetch(`http://localhost:3000/articles/myArticles/${email}`, {
        headers: {
            authorization: `Bearer ${localStorage.getItem('token')}`
        }
    })
    .then(res => res.json())
}