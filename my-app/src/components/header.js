import { menuList } from "../dataFake"
import './header.css'

const Header = () => {
    return `
        <nav class="my-2">
            <div class="row" style="align-items: center; gap: 300px">
                <a class="col" href=""><img src="https://iweb.tatthanh.com.vn/pic/3/blog/images/image(1262).png" style="max-width: 200px"/></a>
                <ul class="d-flex col">
                    ${menuList.map((value) => {
        return `
                    <li class="fw-bold"><a href='${value.path}'>${value.name}</a></li>
                                `
    }).join("")}
                </ul>
            </div>

            <img class="banner" src="https://picsum.photos/1280/400"/>
        </nav>
    `
}

export default Header