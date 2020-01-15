
$('form').on('submit', submitKeyword);

$('#remove').on("click", removeGifs);

async function submitKeyword(e) {
    e.preventDefault();
    const apiKey = `http://api.giphy.com/v1/gifs/search`
    let search = await axios.get(apiKey, {
        params: {
            q: $('#keyword').val(),
            api_key: 'MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym'
        }
    })
    appendGifToDom(search.data.data[0].images.fixed_height.url);
}

function appendGifToDom(url) {
    let gifImage = `<img src="${url}">`;
    $(".container").append($(gifImage));
}

function removeGifs() {
    $(".container").empty();

}