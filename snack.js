async function fetchJson(url) {
    const response = await fetch(url)
    const obj = await response.json()
    return obj
}

const getChefBirthday = async (id) => {
    const recipe = await fetchJson(`https://dummyjson.com/recipes/${id}`)
    const user = await fetchJson(`https://dummyjson.com/users/${recipe.userId}`)
    return user.age
}

(async () => {
    const chefBirthday = await getChefBirthday(2)
    console.log(chefBirthday)
})()