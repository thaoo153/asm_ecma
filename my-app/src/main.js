import AboutPage from "./pages/About"
import HomePage from "./pages/Home"
// import Navigo from 'navigo'
import NotFoundPage from "./pages/NotFound"
import ProjectPage from "./pages/Project"
import ProjectDetailPage from "./pages/ProjectDetail"
import { router, render } from './lib'
import ProjectManagementPage from "./pages/Admin/ProjectManagement"

import 'bootstrap/dist/css/bootstrap.min.css';
import './css/index.css'
import AddProject from "./pages/Admin/AddProject"
import UpdateProjectPage from "./pages/Admin/UpdateProject"

const app = document.querySelector("#app") //tìm phần tử html có id là app

// const router = new Navigo('/') //khởi tạo router từ đối tượng Navigo

// const render = (content, container) => {
//     return container.innerHTML = content()
// }

router.on('/', () => { //sử dụng phương thức on để khai báo đường dẫn đến từng page
    return render(HomePage, app)
})
router.on('/about', () => {
    return render(AboutPage, app)
})
router.on('/project', () => {
    return render(ProjectPage, app)
})
router.on('/project/:id', ({ data }) => {
    // console.log(data); // {id:1000}
    return render(() => {
        return ProjectDetailPage(data)
    }, app) // ProjectDetailPage()()
})

// Admin
router.on('/admin/project', () => {
    return render(ProjectManagementPage, app)
})
router.on('/admin/addproject/add', () => {
    return render(AddProject, app)
})
router.on('/admin/updateproject/update/:id', ({ data }) => {
    return render(() => {
        return UpdateProjectPage(data)
    }, app)
})


router.notFound(() => {
    return render(NotFoundPage, app)
})

router.resolve() //sử dụng phương thức resolve để thực thi 