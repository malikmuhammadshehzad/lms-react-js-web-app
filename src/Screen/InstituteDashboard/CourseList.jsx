import React from 'react'
import { Box, Typography } from '@mui/material'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';



const courses = [
  {
    name: 'Web Development',
    image:'https://www.onlinecoursereport.com/wp-content/uploads/2020/07/shutterstock_394793860-1024x784.jpg',
    detail: 'Learn the basics of programming with HTML, CSS, and JavaScript.' ,
    duration: '3 months',
    fees: '$1000'
  },
  {
    name: 'Data Science',
    image:'https://www.onlinecoursereport.com/wp-content/uploads/2020/07/shutterstock_394793860-1024x784.jpg',
    detail: 'Master the skills needed to build dynamic and responsive web applications.',
    duration: '6 months',
    fees: '$2000'
  },
  {
    name: 'Mobile App Development',
    image:'https://www.onlinecoursereport.com/wp-content/uploads/2020/07/shutterstock_394793860-1024x784.jpg',
     detail: 'Discover the world of data science and learn how to analyze and visualize data.',
    duration: '4 months',
    fees: '$1500'
  },
  {
    name: 'UI/UX Design',
    image:'https://www.onlinecoursereport.com/wp-content/uploads/2020/07/shutterstock_394793860-1024x784.jpg',
    detail: 'Build your own mobile apps using React Native and other popular tools.' ,
    duration: '2 months',
    fees: '$800'
  },
  {
    name: 'Digital Marketing',
    image:'https://www.onlinecoursereport.com/wp-content/uploads/2020/07/shutterstock_394793860-1024x784.jpg',
    detail: 'Explore the exciting field of AI and learn how to build intelligent systems.' ,
    duration: '5 months',
    fees: '$1800'
  }
];

function CourseList() {
  return (
    <Box sx={{marginLeft:12  }}  >
    <Typography variant='h2' >Course List  </Typography>
    <Box sx={{ display:"flex" ,flexWrap:"wrap", justifyContent:"space-between" ,marginTop:"12px" }} >
    { courses.map((course,index)=>(
    <Card key={index} sx={{ maxWidth: 345 ,marginTop:"12px" }}>
      <CardMedia
        sx={{ height: 140 }}
        //  img= src="{course.image}" 
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
           {course.name}
        </Typography>
        <Typography variant="body1" color="text.secondary">
         {course.detail}
        </Typography>
      </CardContent>
      <CardActions>
      <Typography  sx={{marginRight:6.3}}  variant="h6" >
        Free:{course.fees}
        </Typography>
      <Typography  variant="h6" >
      Duration:{course.duration}
        </Typography>
      </CardActions>
    </Card>
      ))
    }
    </Box>
  </Box>
  )
}

export default CourseList