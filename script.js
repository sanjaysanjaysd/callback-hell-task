const div = document.createElement("div");

div.setAttribute("id", "callback-hell-div");

setTimeout(() => {
  div.innerHTML = 10;
  document.body.appendChild(div);
  setTimeout(() => {
    div.innerHTML = 9;
    document.body.appendChild(div);
    setTimeout(() => {
      div.innerHTML = 8;
      document.body.appendChild(div);
      setTimeout(() => {
        div.innerHTML = 7;
        document.body.appendChild(div);
        setTimeout(() => {
          div.innerHTML = 6;
          document.body.appendChild(div);
          setTimeout(() => {
            div.innerHTML = 5;
            document.body.appendChild(div);
            setTimeout(() => {
              div.innerHTML = 4;
              document.body.appendChild(div);
              setTimeout(() => {
                div.innerHTML = 3;
                document.body.appendChild(div);
                setTimeout(() => {
                  div.innerHTML = 2;
                  document.body.appendChild(div);
                  setTimeout(() => {
                    div.innerHTML = 1;
                    document.body.appendChild(div);
                    setTimeout(() => {
                      div.innerHTML = "Happy Independence Day!!";
                      document.body.appendChild(div);
                    }, 1000);
                  }, 1000);
                }, 1000);
              }, 1000);
            }, 1000);
          }, 1000);
        }, 1000);
      }, 1000);
    }, 1000);
  }, 1000);
}, 1000);