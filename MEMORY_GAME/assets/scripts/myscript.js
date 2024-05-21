fruits = [
    {
        "name":"apple",
        "src": "assets/images/apple.png"
    },
    {
        "name":"banana",
        "src": "assets/images/banana.png"
    },
    {
        "name":"grapes",
        "src": "assets/images/grapes.png"
    },
    {
        "name":"cherry",
        "src": "assets/images/cherry.png"
    },
    {
        "name":"melon",
        "src": "assets/images/melon.png"
    },
    {
        "name":"orange",
        "src": "assets/images/orange.png"
    },
    {
        "name":"pineapple",
        "src": "assets/images/pineapple.png"
    },
    {
        "name":"raspberry",
        "src": "assets/images/raspberry.png"
    }
]

first_pick = "";
second_pick = "";
checker = 1;

first_element = "";
second_element = "";

first_card = "";
second_card = "";

is_matched = []

fruits_shuffle = [0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7]
shuffle(fruits_shuffle)

allow_click = true

console.log(fruits_shuffle);

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
function cardClick()
{
    javascript:void(0);
}

var cards = document.querySelectorAll('.card');

[...cards].forEach((card)=>{
    card.addEventListener( 'click', function handleClick(event) {
        card_img = card.children[1].children[0]

        if(allow_click === false)
        {
            return;
        }

        if(is_matched.includes(card_img.dataset.fruitName))
        {
            return;
        }

        event.target.parentElement.classList.toggle('is-flipped');

        if(checker === 1)
        {
            first_pick = card_img.dataset.fruitName;
            first_element = card_img;
            first_card = event.target.parentElement;
            checker = 2;
        }
        else if(checker === 2)
        {
            second_pick = card_img.dataset.fruitName;
            second_element = card_img;
            second_card = event.target.parentElement;
            checker = 1;
        }

        if(first_pick !== "" && second_pick !== "")
        {
            if(first_pick === second_pick)
            {
                first_element.parentElement.classList.toggle('matched');
                second_element.parentElement.classList.toggle('matched');
                is_matched.push(first_pick);
                first_pick = ""
                second_pick = ""

                // second_card.removeEventListener('click',handleClick)
            }
            else{
                allow_click = false; //bawal mo click
                setTimeout(function(){
                    first_card.classList.remove('is-flipped');
                    second_card.classList.remove('is-flipped');
                    first_pick = ""
                    second_pick = ""
                    allow_click = true
                },1500)//milliseonds

            }
        }
        document.querySelector('#checker').innerHTML = checker
        console.log(is_matched)

    });

});




var imgs = document.querySelectorAll('img');

[...imgs].forEach((item,index)=>{
    item.src = fruits[fruits_shuffle[index]].src
    item.dataset.fruitName = fruits[fruits_shuffle[index]].name
});




function shuffle(array) {
    let currentIndex = array.length;

    // While there remain elements to shuffle...
    while (currentIndex != 0) {

        // Pick a remaining element...
        let randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
    }
}


