async function fetchJson(url) {
    const response = await fetch(url)
    const obj = await response.json()
    return obj
}

// const getChefBirthday = async (id) => {
//     const recipe = await fetchJson(`https://dummyjson.com/recipes/${id}`)
//     const user = await fetchJson(`https://dummyjson.com/users/${recipe.userId}`)
//     return user.birthDate
// }

// (async () => {
//     try {
//         const chefBirthday = await getChefBirthday(2)
//         console.log("Compleanno dello chef:", chefBirthday)
//     } catch (error) {
//         console.error(error)
//     } finally {
//         console.log("ciao")
//     }
// })()


async function getChefBirthday(id) {

    let recipe
    try {
        recipe = await fetchJson(`https://dummyjson.com/recipes/${id}`)
    } catch (error) {
        console.error(error)
        throw new Error(`Non posso recuperare la ricetta con id: ${id}`)
    }

    if (recipe.message) {
        throw new Error(recipe.message)
    }

    let user
    try {
        user = await fetchJson(`https://dummyjson.com/users/${recipe.userId}`)
    } catch (error) {
        console.error(error)
        throw new Error(`Non posso recuperare lo chef con id: ${id}`)
    }

    if (user.message) {
        throw new Error(user.message)
    }

    return user.birthDate
}

getChefBirthday(1)
    .then(birthday => console.log("Data di nascita dello chef:", birthday))
    .catch(error => console.error("Errore:", error.message));