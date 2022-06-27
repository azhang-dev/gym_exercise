
export const exerciseOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'c76c3e4928msha9ed1b51b2e2100p1e398fjsn2ddb024724ba',
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
  }
};



export const fetchData = async ( url, options ) => {
    const response = await fetch(url, options);
    const data = await response.json();

    return data;
}