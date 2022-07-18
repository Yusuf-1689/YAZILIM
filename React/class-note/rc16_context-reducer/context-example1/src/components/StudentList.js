import { useContext } from 'react';
import { StudentContext } from '../context/StudentContext';
import StudentItem from './StudentItem';

const StudentList = () => {
  //! Context'ten students verisini okuduk.
  const { students } = useContext(StudentContext);

  return (
    <div>
      {students.map((student) => (
        <StudentItem key={student.id} student={student} />
      ))}
    </div>
  );
};

export default StudentList;
