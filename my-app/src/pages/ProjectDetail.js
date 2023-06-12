import { projectList } from "../dataFake"

const ProjectDetailPage = (data) => {
    console.log(data);

    const currentProject = projectList.find((project) => {
        return project.id == data.id
    })
    console.log(currentProject);

    if (currentProject) {
        return `
        <h1>Detail Page</h1>
        <h2>${currentProject.title}</h2>
        <p>${currentProject.content}</p?
    `
    }
    return `<h1>Project không tồn tại</h1>`
}

export default ProjectDetailPage