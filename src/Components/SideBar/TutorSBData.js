import React from 'react'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import AssessmentIcon from '@mui/icons-material/Assessment';

export const TutorSBData = [  //array variable
        {
            title: 'Upload Assignment',
            icon: <AssignmentTurnedInIcon/>,
            link: '/UploadAssignment',
        },
        {
            title: 'Time Table',
            icon: <CalendarMonthIcon/>,
            link: '/TimeTable',
        },
        {
            title: 'Assessment',
            icon: <AssessmentIcon/>,
            link: '/Assessment',
        }
]
