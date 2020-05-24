const fetchData = async (searchTerm) => {
    const response = await axios.get('http://www.omdbapi.com/',{
        params:{
            apikey:'d9835cc5',
            s: searchTerm
        }
    });
    console.log(response.data);
};

let timeoutId;
const onInput = (event) => {
    if(timeoutId){
        clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(() => 
    {
        fetchData(event.target.value)
    },1000);
}

document.getElementById("searchMovie").addEventListener('input',onInput);