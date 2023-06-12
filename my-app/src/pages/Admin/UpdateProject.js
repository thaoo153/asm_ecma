import { update } from "../../api/project"
import { router, useEffect, useState } from "../../lib"
import 'bootstrap/dist/css/bootstrap.min.css';


const UpdateProjectPage = ({ id }) => {
    // console.log(id);
    const [project, setProject] = useState({}) //khai báo biến project để lưu trữ data

    // call api để lấy dữ liệu và gán vào biến project
    useEffect(() => {
        fetch(`http://localhost:3000/projectList/${id}`)
            .then(response => response.json())
            .then(data => setProject(data))
    }, [])

    // thêm mới data
    useEffect(() => {
        const updateForm = document.querySelector("#update-form")
        // tìm tới form update và lắng nghe sự kiện submit
        updateForm.addEventListener("submit", (event) => {
            event.preventDefault() //chặn sự kiện reload trang
            // lấy dữ liệu từ form
            const newData = {
                "id": id,
                "title": document.querySelector("#title").value,
                "content": document.querySelector("#content").value,
                "image": document.querySelector("#image").value,
                "repository": document.querySelector("#repository").value,

            }
            // gọi api để update data
            // fetch(`http://localhost:3000/projectList/${id}`, {
            //     method: "PUT", //phương thức PUT để cập nhật data
            //     headers: {
            //         'Content-Type': 'application/json' //định dạng dữ liệu gửi đi
            //     },
            //     body: JSON.stringify(newData) //chuyển đổi dữ liệu sang định dạng json
            // }).then(() => {
            //     router.navigate("/admin/project")
            //     //sau khi update thành công thì chuyển hướng về trang quản lý
            // })

            update(newData).then(() => { router.navigate("/admin/project") })
        })
    })
    return `
        <h1 class="my-5">Update Project</h1>
        
        <form action="" id="update-form">
        <div class="mb-3">
        <label class="form-label">Project title</label>
        <input type="text" class="form-control" id="title" value="${project.title}">
        </div>
        <div class="mb-3">
            <label class="form-label">Project content</label>
            <input type="text" class="form-control" id="content" value="${project.content}">
        </div>
        <div class="mb-3">
            <label class="form-label">Image</label>
            <input type="text" class="form-control" id="image" value="${project.image}">
        </div>
        <div class="mb-3">
            <label class="form-label">Repository</label>
            <input type="text" class="form-control" id="repository" value="${project.repository}">
        </div>
        <button class="btn btn-primary">Update Project</button>
        </form>
    `
}

export default UpdateProjectPage