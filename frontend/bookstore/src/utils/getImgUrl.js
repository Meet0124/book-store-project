function getImgUrl (name){
    return new URL(`../assets/project photo/books/${name}`, import.meta.url)
}
export default getImgUrl