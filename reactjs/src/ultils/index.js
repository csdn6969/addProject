import { BASE_URL } from "../app/index"
const getImagesProducts = (image)=>{

    return `${BASE_URL}/assets/uploads/products/${image}`
}
export default getImagesProducts