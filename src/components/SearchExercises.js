import React from 'react';
import { useEffect, useState } from 'react';
import { Box, Button, Stack, TextField, Typography } from '@mui/material';
import { exerciseOptions, fetchData } from '../utils/fetchData';

const SearchExercises = () => {

  const URL = "https://exercisedb.p.rapidapi.com/exercises";

  const[search, setSearch] = useState('');
  const[exercises, setExercises] = useState([]);
  const[bodyParts, setBodyParts] = useState([]);

  useEffect(() => {
    const fetchExerciseData = async () => {
      const bodyPartsData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exerciseOptions);

      setBodyParts(['all', ...bodyPartsData]);
    }

    fetchExerciseData();
  }, [])

  const handleSearch = async () => {
    if(search) {
      const exerciseData = await fetchData("https://exercisedb.p.rapidapi.com/exercises", exerciseOptions);
      console.log(exerciseData);

      const searchedExercises = exerciseData.filter( (exercise) => exercise.name.toLocaleLowerCase().inlcudes(search)
      || exercise.target.toLocaleLowerCase().inlcudes(search)
      || exercise.equipment.toLocaleLowerCase().inlcudes(search)
      || exercise.bodyPart.toLocaleLowerCase().inlcudes(search)
      );

      setSearch ('')  ;
      setExercises(searchedExercises);                               
    }

  }

  return (
    <Stack alignItems="center" mt="37px" justifyContent="center" p="20px">
      <Typography fontWeight={700} sx={{
        fontSize: { lg: '44px', xs: '30px'}}} 
        mb="50px" textAlign="center">
        Awesome Exercise You <br /> 
        Should Know
      </Typography>
      <Box position="relative" mb="72px">
        <TextField sx={{
          input: {
            fontWeight: '700', 
            border: 'none', 
            borderRadius:'4px',
          },
          width: {lg: '800px', xs:'350px'},
          backgroundColor: '#fff',
          borderRadius:'40px'

        }} height="76px" value={search} onChange={(e) => setSearch(e.target.value.toLocaleLowerCase())} placeholder="Search Exercises" type="text"/>
        <Button className="search-btn" 
        sx={{
          width: { lg: '175px', xs: '80px'},
          fontSize: { lg: '20px', xs: '14px'},
        }}
        onClick={handleSearch}
        >
          Search  
        </Button>
      </Box>
    </Stack>
  )
}

export default SearchExercises