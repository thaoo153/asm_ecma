import instance from "./instance";

const getAll = () => {
    return instance.get('/projectList')
}

const remove = (id) => instance.delete(`/projectList/${id}`)
// const remove = (id) => {
//     return instance.delete(`/projectList/${id}`)
// }
const add = (project) => instance.post('projectList', project)

const update = (project) => { //{id: 1, title: 'abc'}
    return instance.put(`/projectList/${project.id}`, project)
}

export {getAll, remove, add, update}