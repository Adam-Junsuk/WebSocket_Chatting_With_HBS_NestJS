const socket = io('/chattings');

const getElementById = (id) => document.getElementById(id) || null;

const helloStrangerElement = getElementById('hello_stranger');
const chattingBoxElement = getElementById('chatting_box');
const formElement = getElementById('chat_form');

// 글로벌 소캣 핸들러
socket.on('user_connected', (username) => {
  drawNewChat(`${username}가 입장했어요`);
});
socket.on('new_chat', (data) => {
  const { chat, username } = data;
  drawNewChat(`${username}: ${chat}`);
});

// 이벤트 콜백 함수
const handleSubmit = (event) => {
  event.preventDefault();
  const inputValue = event.target.elements[0].value;
  if (inputValue !== '') {
    socket.emit('submit_chat', inputValue);
    //화면에 그리기
    drawNewChat(`me: ${inputValue}`);
    event.target.elements[0].value = '';
  }
};

const drawHelloStranger = (username) =>
  (helloStrangerElement.innerText = `안녕하세요 ${username}님`);
const drawNewChat = (message) => {
  const wrapperChatBox = document.createElement('div');
  const chatbox = `
    <div>
    ${message}
    </div>`;
  wrapperChatBox.innerHTML = chatbox;
  chattingBoxElement.append(wrapperChatBox);
};

function helloUser() {
  const username = prompt('뉘신교?');
  socket.emit('new_user', username, (data) => {
    drawHelloStranger(data);
  });
}

function init() {
  helloUser();
  formElement.addEventListener('submit', handleSubmit);
}

init();
