function myFunction() {
    // alert("Hey!")
    const url = "https://jordanstevewebsite.firebaseio.com/users/id3.json";
    const jordan = '{ "name" : "Jordan3" }'
    // fetch(url)
    //     .then(res => res.json())
    //     .then(data => alert(JSON.stringify(data)));
    fetch(url, {
        method: 'put',
        body: jordan,
        headers: {
            "Content-type": "application/json"
        }
    })
        .then(res => res.json())
        .then(function (data) {
            console.log('Request succeeded with JSON response', data);
        })
        .catch(function (error) {
            console.log('Request failed', error);
        });
}
