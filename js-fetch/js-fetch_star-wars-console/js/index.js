console.clear();

const url = "https://swapi.py4e.com/api/people";

/*async function fetchData() {
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);
  console.log(data.results);
  console.log(data.results[2].eye_color);
  return data;
}*/
//fetchData();

async function fetchData() {
  try {
    const response = await fetch(url);

    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      console.error("Bad Response");
    }
  } catch (error) {
    console.error("An Error occurred");
  }
  console.log(data);
}

fetchData();
