const myForm = document.getElementById('myForm');
const email = document.getElementById('email');
const comment = document.getElementById('comment');

const content = document.getElementById('content');

const emailInfo = [
    {email: 'photo2Life@gmail.com', comment: '- Great work!'},
    {email: 'lunajosh@me.com', comment: '- Really love your work!'}
];

const buildInfoList = () => {
    content.innerHTML = '';
    emailInfo.forEach(person => {
        const infoBox = document.createElement('div');
        infoBox.classList.add('info-box');
    
        infoBox.innerText = `${person.email} ${person.comment}`;
        content.append(infoBox);
    })
}

buildInfoList();


myForm.addEventListener('Submit', (event) => {
    event.preventDefault();
    const data = {
        email: email.value, 
        comment: comment.value
    };
    emailInfo.push(data);
    buildInfoList();
    myForm.reset();
})


