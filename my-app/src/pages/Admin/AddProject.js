
import { add } from "../../api/project";
import { router } from "../../lib";
import { useEffect } from "../../lib";

const AddProjectPage = () => {
    useEffect(() => {
        const addForm = document.querySelector("#add-form")
        addForm.addEventListener('submit', (event) => {
            event.preventDefault();
            const newProject = {
                "title": document.querySelector("#title").value,
                "content": document.querySelector("#content").value,
                "image": document.querySelector("#image").value,
                "repository": document.querySelector("#repository").value

            }
            // fetch(`http://localhost:3000/projectList`, {
            //     method: 'POST',
            //     headers: {
            //         'Content-Type': 'application/json'
            //     },
            //     body: JSON.stringify(newProject)
            // }).then(() => {
            //     router.navigate('/admin/project')
            // })\
            add(newProject).then(() => {router.navigate('/admin/project')})
        })


    })
    return /*html*/`
        <h1 class="my-5">Add Project</h1>

        <form action="" id="add-form">
            <div class="mb-3">
            <label class="form-label">Project title</label>
            <input type="text" class="form-control" id="title">
            </div>
            <div class="mb-3">
                <label class="form-label">Project content</label>
                <input type="text" class="form-control" id="content">
            </div>
            <div class="mb-3">
                <label class="form-label">Image</label>
                <input type="text" class="form-control" id="image">
            </div>
            <div class="mb-3">
                <label class="form-label">Repository</label>
                <input type="text" class="form-control" id="repository">
            </div>
            <button class="btn btn-primary">Add Project</button>
        </form>
    `
}

export default AddProjectPage;