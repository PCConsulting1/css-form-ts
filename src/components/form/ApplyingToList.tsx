import { useSelector } from 'react-redux'
// import ApplyingToItem from './ApplyingToItem'

const selectColleges = (state) => state.student.applying

export default function SelectedCollegeList() {
  const colleges = useSelector(selectColleges)

  const collegeList = colleges.map((college) => {
    return <ApplyingToItem key={college.collegeName} college={college} />
  })

  return <div>{collegeList}</div>
}
