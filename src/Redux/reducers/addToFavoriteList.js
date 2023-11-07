export const searchJob = (search) => {
  return async (dispatch) => {
    try {
      const baseEndpoint =
        "https://strive-benchmark.herokuapp.com/api/jobs?search=";
      const response = await fetch(baseEndpoint + search + "&limit=20");
      if (response.ok) {
        const { data } = await response.json();
      } else {
        alert("Error fetching results");
      }
    } catch (error) {
      console.log(error);
    }
  };
};
