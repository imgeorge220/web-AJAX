$(init());

$(".container").on("click", ".up-button", function (e) {
    changeScore(e, 1)
})
$(".container").on("click", ".down-button", function (e) {
    changeScore(e, -1)
})

async function init() {
    for (i = 0; i < 10; i++) {
        let newJoke = `<tr><td>${await grabJoke()}</td>
        <td class="up">
            <button class="up-button">+1</button>
        </td>
        <td class="down">
            <button class="down-button">-1</button>
        </td>
        <td class="score">0</td></tr>`;
        $('.container').append(newJoke);
    }
}

async function grabJoke() {
    let config = {
        headers: {
            'Accept': 'text/plain'
        }
    };
    let jokeObj = await axios.get('https://icanhazdadjoke.com/', config);
    return jokeObj.data;
}

function changeScore(e, num) {
    let oldScore = +($(e.target).parent().siblings(".score").text());
    $(e.target).parent().siblings(".score").text(oldScore += num);

}