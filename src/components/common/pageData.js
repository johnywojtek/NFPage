export const pageData = (array, page) => {
    let data = []

    array.map(e => {
        if (e.node[page]) {
            data = e.node[page]
        }
    })
    return data
}
