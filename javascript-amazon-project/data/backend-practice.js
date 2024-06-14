const xhr = new XMLHttpRequest();

xhr.addEventListener("load", () => {
  console.log(xhr.response);
});

xhr.open("GET", "https://supersimplebackend.dev");
//xhr.send() this code is asynchronus code and don't wait to execute it.
//It just send the request and don't wait for the response if there is another code after the line xhr.send()
//so that's why xhr.response will be undefined at first
xhr.send();
//xhr.response;
