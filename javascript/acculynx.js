const formContainer = document.querySelector('.acculynx-api');
const baseUrl = "https://api.acculynx.com"
const apiKey = "?api_key=NzdjMDI3ZjAtMTdjMy00NWI3LWIwMTEtYTM0MmYwMWM0NTZkZTg5OGYwMjMtNzI2Yy00MTE2LTkxYTktNmI3MDUxYzBhYmUw";

const getForm = () => {
  const endpoint = `${baseUrl}${apiKey}`;
  const xhr = new XMLHttpRequest;
  xhr.responseType = 'json';
  xhr.onreadystatechange = () => {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      acculynxObject = xhr.response;
      console.log(acculynxObject);
      if (nasaObject.media_type == 'image') {
        nasaPhoto.innerHTML = `<img src="${nasaObject.hdurl}" alt="">`;
        nasaIframe.classList.toggle('d-none');
      } else {
        nasaIframe.src = nasaObject.url;
      }
      nasaDescription.innerHTML = `${nasaObject.explanation}`;
    }
  },
  xhr.open('GET', endpoint);
  xhr.send();
}
