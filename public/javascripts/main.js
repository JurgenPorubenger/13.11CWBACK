console.log("Alive!");


document.querySelector("#reg_btn").addEventListener("click", function (e) {
        e.preventDefault();
        console.log("Click");
        // получаем данные формы
        let title = document.querySelector('#post_title').value;
        let text = document.querySelector('#post_text').value;
        // let direction = JSON.stringify({way});
        let formPost= {
            title,
            text
        };
        console.log(formPost);

        fetch('/api/user/addPost', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(formPost),
        })
            .then((response)=> {
                if (response.status === 200) {
                    console.log("response");
                    return  response.json()
                }
            })
            .then(result=>{
                // localStorage.setItem('result', result);
                console.log(result)
            })
            .catch(function(err) {
                console.log('Fetch Error :-S', err);
            });

    }
);