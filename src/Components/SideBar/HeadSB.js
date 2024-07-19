import React from 'react';
import './HeadSB.css';
import { HaedSBData } from './HeadSBData';
import { useNavigate } from 'react-router-dom';

function HeadSB() {
  const navigate = useNavigate();

  return (
    <div className='HeadSB'>
      <ul className='HeadSBList'>
        {HaedSBData.map((val, key) => (
          <li
            key={key}
            className='row'
            id={window.location.pathname === val.link ? 'active' : ''}
            onClick={() => navigate(val.link)}
          >
            <div id='icon'>{val.icon}</div>
            <div id='title'>{val.title}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default HeadSB;




// import React from 'react';
// import './HeadSB.css';
// import { HaedSBData } from './HeadSBData';
// import { useNavigate } from 'react-router-dom';

// function HeadSB() {
//   const navigate = useNavigate();

//   return (
//     <div className='HeadSB'>
//       <ul className='HeadSBList'>
//         {HaedSBData.map((val, key) => (
//           <li
//             key={key}
//             className='row'
//             id={window.location.pathname === val.link ? 'active' : ''}
//             onClick={() => navigate(val.link)}
//           >
//             <div id='icon'>{val.icon}</div>
//             <div id='title'>{val.title}</div>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default HeadSB;

