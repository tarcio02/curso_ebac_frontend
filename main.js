document.addEventListener('DOMContentLoaded', function () {
    const picture = document.querySelector('#avatar');
    const nami = document.querySelector('#nome');
    const username = document.querySelector('#usuario');
    const reps = document.querySelector('#repositorios');
    const followers = document.querySelector('#seguidores');
    const following = document.querySelector('#seguindo');
    const link = document.querySelector('#github');

    fetch('https://api.github.com/users/tarcio02')
        .then(function(res) {
            return res.json();
        })
        .then(function (json) {
            picture.src = json.avatar_url;
            nami.innerText = json.name;
            username.innerText = json.login;
            reps.innerText = json.public_repos;
            followers.innerText = json.followers;
            following.innerText = json.following;
            link.href = json.html_url;
        })


})