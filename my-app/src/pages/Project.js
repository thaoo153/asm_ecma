import { projectList } from "../dataFake"

const Project = () => {
    return `
        <h1>Project</h1>
        ${projectList.map((value) => {
        return `
                    <div>
                        <h2>${value.title}</h2>
                        <p>${value.content}</p>
                    </div>
                    `

    }).join("")
        }
            `

}

export default Project