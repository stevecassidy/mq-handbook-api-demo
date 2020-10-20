
const axios = require("axios")

const BASE_URL = "http://localhost:3001/gateway/"

axios.get(BASE_URL + "list/majors/2020")
    .then(response => {
        response.data.Majors.map(major => {
            console.log(major.name)
            axios.get(BASE_URL + "get/major/" + major.cl_id)
                .then(response => {
                    if (response.data.structure) {
                        response.data.structure.map(s => process(s))
                    }
                })
        })
    })
    .catch(error => {console.log(error)})



/* Courses */
/*
axios.get(BASE_URL + "list/courses/2020")
     .then(response => { 
         response.data.Courses.map((course) => {
             axios.get(BASE_URL + "get/course/" + course.cl_id)
                  .then(course => {
                      const structure = course.data.structure
                      if (structure) {
                        structure.map(s => process(s))
                      }
                  })
         })
     })
     .catch(error => {console.log(error)})
    */



const process = (structure) => {
    console.log("processing")
    if (!structure) {
        return
    }

    // if it has a container, recurse onto that
    if (structure.hasOwnProperty('container')) {
        console.log("Processing container")
        structure.container.map(s => process(s))
    }
    if (structure.hasOwnProperty('relationship')) {
        structure.relationship.map( rel => {
            console.log(rel.academic_item_code, rel.academic_item_name)
            axios.get(BASE_URL + "get/unit/" + rel.child_record.cl_id)
                 .then(response => {
                     console.log("Got Unit")
                 })
                 .catch(error => {
                     console.log("Error for unit", error.config.url)
                 })
        })
    }
}