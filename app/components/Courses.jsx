import Link from "next/link"

async function fetchCourses(){
    const response = await fetch("http://localhost:3000/api/courses");
    const courses = await response.json();
    return courses;
}

const Courses = () => {
  return (
    <div>Courses</div>
  )
}

export default Courses
