import axios from 'axios'

const BASEURL = 'http://localhost:3001/gateway/'


const listCourses = (year) => {

    return axios.get(BASEURL + 'list/courses/' + year)
                .then(data => data.data.Courses)
}


const getCourse = (id) => {
    return axios.get(BASEURL + 'get/course/' + id).then(data=> data.data)
}




export default {listCourses, getCourse}

