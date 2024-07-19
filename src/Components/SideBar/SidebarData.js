import React from 'react'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import AssessmentIcon from '@mui/icons-material/Assessment';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';

export const SidebarData = [  //array variable
    {
        title: 'Time Table',
        icon: <CalendarMonthIcon/>,
        link: '/TimeTable',
    },
    {
        title: 'Assignment',
        icon: <AssignmentTurnedInIcon/>,
        link: '/Assignment',
    },
    {
        title: 'Assessment',
        icon: <AssessmentIcon />,
        link: '/Assessment',
      },
]
