import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { Grid } from '@mui/material';
import { Container } from '@mui/system';

function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

export default function Snaps() {
  return (
    <Container maxWidth= "md" >
    <ImageList 
      sx={{ width: 1000, height: 450 }}
      variant="quilted"
      cols={4}
      rowHeight={121}
    >
      {itemData.map((item) => (
        <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
          <img
            {...srcset(item.img, 121, item.rows, item.cols)}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
    </Container>
  );
}





const itemData = [
  {
    img: 'https://images.unsplash.com/photo-1587232439648-04e7feaf1777?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YnVzZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60',
    title: 'Breakfast',
    rows: 2,
    cols: 2,
  },
  {
    img: 'https://images.unsplash.com/photo-1564694202883-46e7448c1b26?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YnVzZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60',
    title: 'Burger',
  },
  {
    img: 'https://images.unsplash.com/photo-1527295110-5145f6b148d0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHRyYWlufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60',
    title: 'Camera',
  },
  {
    img: 'https://images.unsplash.com/photo-1487553333251-6c8e26d3dc2c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fHBsYW5lfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60',
    title: 'Coffee',
    cols: 2,
  },
  {
    img: 'https://images.unsplash.com/photo-1488085061387-422e29b40080?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHBsYW5lfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60',
    title: 'Hats',
    cols: 2,
  },
  {
    img: 'https://images.unsplash.com/photo-1598625802253-d6b10223ff6c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8bWFyaW5lJTIwc2hpcHN8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60',
    title: 'Honey',
    author: '@arwinneil',
    rows: 2,
    cols: 2,
  },
  {
    img: 'https://images.unsplash.com/photo-1520349835333-c61eaf8b6692?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGJ1c2VzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60',
    title: 'Basketball',
  },
  {
    img: 'https://images.unsplash.com/photo-1593705581577-bc64e236dafa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGJ1c2VzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60',
    title: 'Fern',
  },
  {
    img: 'https://images.unsplash.com/photo-1534800891164-a1d96b5114e7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8YnVzZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60',
    title: 'Mushrooms',
    rows: 2,
    cols: 2,
  },
  {
    img: 'https://images.unsplash.com/photo-1610228444079-9286e0042bde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8YnVzZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60',
    title: 'Tomato basil',
  },
  {
    img: 'https://images.unsplash.com/photo-1608280240931-27cc6b4c9ade?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8YnVzZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60',
    title: 'Sea star',
  },
  {
    img: 'https://plus.unsplash.com/premium_photo-1661963900860-102260187602?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fG1hcmluZSUyMHNoaXBzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60',
    title: 'Bike',
    cols: 2,
  },
];