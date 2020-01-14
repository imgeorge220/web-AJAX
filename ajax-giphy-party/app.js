
$('form').on('submit', submitKeyword);

async function submitKeyword(e) {
    e.preventDefault();
    const apiKey = `http://api.giphy.com/v1/gifs/search`
    let search = await axios.get(apiKey, {
        params: {
            q: $('#keyword').val(),
            api_key: 'MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym'
        }
    })
    console.log(search);
}


