import { useEffect, useState } from "../../lib"
import { getAll, remove } from "../../api/project"
import axios from "axios"
import 'bootstrap/dist/css/bootstrap.min.css';


const ProjectManagementPage = () => {
    const [projects, setProject] = useState([])
    useEffect(() => {
    //     fetch(`http://localhost:3000/projectList`)
    //         .then(res => res.json())
    //         .then(data => setProject(data))
        // .then((response) => {
        //     return response.json()
        // })
        // .then((data) => setProject(data))

        getAll().then(({data}) => setProject(data))
    }, [])

    useEffect(() => {
        const btnList = document.querySelectorAll(".btn-remove")
        for (let btn of btnList) {
            const id = btn.dataset.id
            btn.addEventListener('click', () => {
                // fetch(`http://localhost:3000/projectList/${id}`, {
                //     method: 'DELETE'
                // }).then(() => {
                //     const newProjectList = projects.filter((project) => {
                //         return project.id != id
                //     })
                //     setProject(newProjectList);
                // })
                if (confirm('co chac muon xoa khong')) {
                    remove(id).then(() => {
                        const newProjectList = projects.filter((project) => {
                            return project.id != id
                        })
                        setProject(newProjectList);
                    })    
                }
                
            })
        }
    })
    return /*html */`
        <h1>Management Page</h1>
        <a href="/admin/addproject/add"><button class="my-4 btn btn-primary">AddProject</button></a>
        <a href="../"><button type="button" class="btn btn-link">Back to Home</button></a>
        <table class="table">
        <thead class="table-danger">
            <tr>
            <th>Stt</th>
            <th>Project Title</th>
            <th>Project Content</th>
            <th>Image</th>
            <th>Repository</th>
            <th>Action</th>
            </tr>
        </thead>
        <tbody>
            ${projects.map((project, index) => {
        return `
                    <tr>
                        <td>${index + 1}</td>
                        <td>${project.title}</td>
                        <td>${project.content}</td>
                        <td><img src="${project.image}"/></td>
                        <td>${project.repository}</td>

                        <td>
                            <button class="btn-remove btn btn-danger" data-id="${project.id}">Delete</button>
                            <a href="/admin/updateproject/update/${project.id}"><button class="btn btn-secondary">Update</button></a>
                        </td>
                    </tr>
                `
    }).join("")}
        </tbody>
        </table>
    `
}
export default ProjectManagementPage