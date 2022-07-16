import { useState } from 'react';
import StudentList from './components/StudentList';
import data from './data';

function App() {
  const [students, setStudents] = useState(data);

  return (
    <div>
      <StudentList students={students} />
    </div>
  );
}
export default App;
