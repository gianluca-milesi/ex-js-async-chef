async function fetchJson(url) {
    const response = await fetch(url)
    const obj = await response.json()
    return obj
}

const getChefBirthday = async (id) => {
    const recipe = await fetchJson(`https://dummyjson.com/recipes/${id}`)
    const user = await fetchJson(`https://dummyjson.com/users/${recipe.userId}`)
    return { ...recipe, user }
}

(async () => {
    const recipe = await getChefBirthday(2)
    console.log(recipe.user.age)
})()