//1. 인증번호 : 화면에 나온거 따라치기
//2. 다양한 언어 버전 : 영어 누르면 영어로 나오고, 한국어 누르면 한국어로 나오고...
//3. 필수항목을 입력하지 않았습니다
//4. sns로그인 연동 (아이콘 + 링크연결)
//5. css UI 업데이트
//6. 로그인/회원가입을 따로 두기?!
//7. 최종 로그인까지...?
//8. 개인정보동의 체크박스

let elInputUsername = document.querySelector('#username');
console.log(elInputUsername);

let elFailureMessage = document.querySelector('.failure-message');
let elSuccessMessage = document.querySelector('.success-message');

let inputPassword = document.querySelector('#password');
let repeatPassword = document.querySelector('#password-retype');
let pwMessage = document.querySelector('.mismatch-message');

let repeatpwbox = document.querySelector('.repeatpwbox');

let signuptext = document.querySelector('.signuptext');
let logintext = document.querySelector('.logintext');

let selectBtn = document.getElementsByClassName('selector-btn'); //편의성..?성능...?



elInputUsername.onkeyup = function() {
  //console.log(elInputUsername.value); 키보드로 입력한 글자를 console에 나오게 한다
    //입력창에 글자를 키보드로 입력할 때 =>event : ~할 때 
    //사용할 수 있는 아이디입니다 라는 메세지가 출력
  if (isMoreThan4Length(elInputUsername.value)) {
    elSuccessMessage.classList.remove('hide');  //성공메세지 출력
    elFailureMessage.classList.add('hide'); //실패메세지 숨김
  }
  else {
    elSuccessMessage.classList.add('hide'); //성공메세지 숨김
    elFailureMessage.classList.remove('hide');  //실패메세지 출력
  }
}

//아이디 길이가 4자 이상이다
function isMoreThan4Length(value) {
  return value.length >= 4;
}

//inputPassword와 repeatPassword가 같으면 true반환
// 다르면 false반환
function isMatch (password1, password2) {
  return password1 === password2;
}

inputPassword.onkeyup = function(v){
  const value = v.target.value;
  logintextLightOn(value);
}


//안맞으면 메세지가 나오고(add) 맞으면 메세지가 가려진다(remove)
repeatPassword.onkeyup = function(v) {
  console.log(v.target)
  if (isMatch(inputPassword.value, repeatPassword.value)) {
    pwMessage.classList.add('hide');
  }
  else {
    pwMessage.classList.remove('hide');
  }
  console.log(issignuptextTrue());
  signuptextLightOn(issignuptextTrue(isMatch(inputPassword.value, repeatPassword.value)));
}

//아이디 성공메세지가 'hide'되지 '않고', 비밀번호 값이 빈문자열이지 않고, 비밀번호 불일치 메세지가 숨겨져있으면 => true를 반환
function issignuptextTrue(match) {
  return !(elSuccessMessage.classList.contains('hide')) && match;
}

//가입하기 버튼에 불이 들어온다
function signuptextLightOn(check) {
  if (check) {
    signuptext.classList.remove('lightOff');
  }else if(!check && !(signuptext.classList.contains('lightOff'))) {
    signuptext.classList.add('lightOff');
  }
}

//로그인하기 버튼에 불이 들어온다
function logintextLightOn(check) {
  if (check) {
    logintext.classList.remove('lightOff');
  }
  else if(!check && !(logintext.classList.contains('lightOff'))) {
    logintext.classList.add('lightOff');
  }
}

const loginCheck = function (check) {
  return isMoreThan4Length(username.value) && check;
}



/* 회원가입, 로그인 버튼 누르면 border-bottom이 왔다갔다 */

const addSelectEvent = function (btns) {
  for (let btn of btns) {
    btn.addEventListener ('click', (v) => {
      selectClickEvent(v);
    });
  }
}

const selectClickEvent = function(ele) {
  for (let e of selectBtn) {
    e.classList.remove('selector-border');
    e.removeAttribute('disabled', 'true');
  }
  if(!(ele.target.classList.contains('selector-border'))) {
    ele.target.classList.add('selector-border');
    ele.target.setAttribute('disabled', 'true');
  }

  if (ele.target.classList.contains('loginBtn')) {
    signuptext.classList.add('hide');
    logintext.classList.remove('hide');
    repeatpwbox.classList.add('hide');
  }
  else {
    signuptext.classList.remove('hide');
    logintext.classList.add('hide');   
    repeatpwbox.classList.remove('hide');
  }
}

addSelectEvent(selectBtn);