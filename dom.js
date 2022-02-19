document.getElementById('add-border').addEventListener('click', function(){
    const container = document.getElementById('friend-container');
    container.style.border = '3px solid lightGreen';
});

function addBackgroundColor(){
    const friends = document.getElementsByClassName('friend');
    for(const friend of friends){
        friend.style.backgroundColor = 'lightBlue';
    }
};

document.getElementById('add-friend').addEventListener('click', function(){
    const container = document.getElementById('friend-container');
    const friendDiv = document.createElement('div');
    friendDiv.classList.add('friend');
    friendDiv.innerHTML = `
        <h4 class="friend-name">New Friend</h4>
        <p>Obcaecati, magnam a.</p>
    `;
    container.appendChild(friendDiv);
})