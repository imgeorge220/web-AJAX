$(init());

async function init(){
    for (i = 0; i < 10; i++){
        let newJoke = `<p>${await grabJoke()}</p>`;
        $('.container').append(newJoke);
    }
}

async function grabJoke(){
    let config = {
        headers: {
            'Accept': 'text/plain'
        }
    };
    let jokeObj = await axios.get('https://icanhazdadjoke.com/', config);
    return jokeObj.data;
}