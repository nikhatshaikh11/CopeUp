/*
Function to count remaining characters
*/

const messageEle = document.getElementById('message');
const counterEle = document.getElementById('counter');

messageEle.addEventListener('input', function (e) {
    const target = e.target;

    // Get the `maxlength` attribute
    const maxLength = target.getAttribute('maxlength');

    // Count the current number of characters
    const currentLength = target.value.length;

    counterEle.innerHTML = `${currentLength}/${maxLength}`;
});

/*
Function to send tweet
*/

const tweetMe = document.getElementById("tweetMe");
let x = "";

function myFunction() {
    x = document.getElementById("message").value;
}

const tweetNow = () => {
    let tweetPost = `https://twitter.com/intent/tweet?text=${x}`;
    window.open(tweetPost);
};



tweetMe.addEventListener('click', tweetNow);