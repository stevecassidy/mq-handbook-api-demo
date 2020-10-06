import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom'

import cmsService from '../services/cms'

const CourseList = () => {

    const [courses, setCourses] = useState([])
  
    useEffect(() => {
      cmsService.listCourses('2020')
        .then( data => {
          setCourses(data)
        })
        .catch(() => {console.log("Error!")})
    })


    return (
        <ul>
            {courses.map(course => <li key={course.cl_id}>
                    <Link to={'/courses/' + course.cl_id}>{course.name}</Link></li>)}
        </ul>
    )
}

export default CourseList