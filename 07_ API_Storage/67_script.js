const createTodo = async () => {
    let options = {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            title: 'foo',
            body: 'bar',
            userId: 1,
        }),
    }
    let p = await fetch('https://jsonplaceholder.typicode.com/posts', options)
    let response = await p.json()
    return response
}

const getTodo = async(id) => {
    let response = await fetch('https://jsonplaceholder.typicode.com/todos/' + id)
    let r = await response.json()
    return r
}
const mainFunc = async() => {
    let todo = await createTodo()
    console.log(todo)
    console.log(await getTodo(5))
}
mainFunc()

// run in console
// fetch('https://jsonplaceholder.typicode.com/todos/1')
//       .then(response => response.json())
//       .then(json => console.log(json))

