import { useNavigate, useParams, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

const InstructorDetail = () => {
  const { id } = useParams();

  const navigate = useNavigate();
    const  inst  = useLocation();

    console.log(inst.state);

//   const [inst, setInst] = useState([]);

//   const getInstructor = () => {
//     fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
//       .then((res) => res.json())
//       .then((data) => setInst(data))
//       .catch((err) => console.log(err));
//   };
//   useEffect(() => {
//     getInstructor();
//   }, [id]);
// console.log(inst);
  return (
    <div className="container text-center">
      <h3>{inst.name}</h3>
      <img
        className="w-50"
        src={`https://avatars.dicebear.com/v2/avataaars/${id}.svg`}
        alt=""
      />
      <h4>{inst.email}</h4>
      <h4>{inst.phone}</h4>
      <div>
           <button onClick={() => navigate('/')} className='btn btn-success me-2 '>Home</button>
           <button onClick={() => navigate(-1)} className='btn btn-warning'>Go Back</button>
      </div>
    </div>
  );
};

export default InstructorDetail;