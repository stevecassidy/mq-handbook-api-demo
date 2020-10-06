import React, { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom'
import cmsService from '../services/cms'

const Course = () => {
  
    const {id} = useParams()
    const [course, setCourse] = useState({name: 'nothing'})

    useEffect(() => {
      cmsService.getCourse(id)
        .then( data => {
            console.log(data)
            setCourse(data)
        })
        .catch(() => {console.log("Error!")})
    }, [id])  // rerun if id changes

    return (
        <div>
        <h1>{course.course_name}</h1>

        <h2>Overview and Aims</h2>
        <div dangerouslySetInnerHTML={{__html: course.overview_and_aims_of_the_course}}></div>

        <pre>
            {JSON.stringify(course, null, 3)}
        </pre>
        </div>
    )
}

export default Course

