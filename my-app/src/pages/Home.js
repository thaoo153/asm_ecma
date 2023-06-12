import { getAll } from "../api/project"
import Header from "../components/header"
import { product, projectList } from "../dataFake"
import { useEffect, useState } from "../lib"

const Home = () => {
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
    return `
        ${Header()}

            ${projects.map((value) => {
        return `
                    <div class="card" style="width: 18rem;">
                        <img src="${value.image}" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h3 class="card-title">${value.title}</h3>
                            <h5 class="card-title">${value.repository} đ</h5>

                            <p class="card-text">${value.content}</p>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                `

    }).join("")
        }
        `
}

export default Home