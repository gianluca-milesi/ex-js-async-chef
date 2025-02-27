// async function fetchJson(url) {
//     const response = await fetch(url)
//     const obj = await response.json()
//     return obj
// }

// const getChefBirthday = async (id) => {
//     const recipe = await fetchJson(`https://dummyjson.com/recipes/${id}`)
//     const user = await fetchJson(`https://dummyjson.com/users/${recipe.userId}`)
//     return user.age
// }

// (async () => {
//     const chefBirthday = await getChefBirthday(2)
//     console.log(chefBirthday)
// })()


async function fetchJson(url) {
    const response = await fetch(url)
    const obj = await response.json()
    return obj
}

async function getChefBirthday(id) {

    let recipe
    try {
        recipe = await fetchJson(`https://dummyjson.com/recipes/${id}`)
    } catch (error) {
        throw new Error(`Non posso recuperare la ricetta con id: ${id}`)
    }

    let user
    try {
        user = await fetchJson(`https://dummyjson.com/users/${recipe.userId}`)
    } catch (error) {
        throw new Error(`Non posso recuperare lo chef con id: ${id}`)
    }

    return user.birthDate
}

getChefBirthday(1)
    .then(birthday => console.log("Data di nascita dello chef:", birthday))
    .catch(error => console.error("Errore:", error.message));