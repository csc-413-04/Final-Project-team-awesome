import TextData from '../../dataText.json';


export function check(user, display) {


if (user === '') {
    display = true;
  }
  else {
    display = false;
  }
  return display;
}