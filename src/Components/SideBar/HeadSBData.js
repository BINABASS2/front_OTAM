import React from 'react';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import AssessmentIcon from '@mui/icons-material/Assessment';
import AtmIcon from '@mui/icons-material/Atm';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import ChecklistRtlIcon from '@mui/icons-material/ChecklistRtl';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import CelebrationIcon from '@mui/icons-material/Celebration';

export const HaedSBData = [
  {
    title: 'Time Table',
    icon: <CalendarMonthIcon />,
    link: '/TimeTable',
  },
  {
    title: 'Assign Tutors',
    icon: <GroupAddIcon />,
    link: '/AssignTutor',
  },
  {
    title: 'Exams',
    icon: <ChecklistRtlIcon />,
    link: '/Exams',
  },
  {
    title: 'Assessment',
    icon: <AssessmentIcon />,
    link: '/Assessment',
  },
  {
    title: 'Salary',
    icon: <AtmIcon />,
    link: '/Salary',
  },
  {
    title: 'Events',
    icon: <CelebrationIcon />,
    link: '/Events',
  },
  {
    title: 'Profile',
    icon: <AdminPanelSettingsIcon />,
    link: '/Profile',
  },
];

