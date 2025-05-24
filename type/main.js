   const text = "Thanks for watching";
    const el = document.getElementById("typewriter");
    let index = 0;

    function type() {
      if (index < text.length) {
        el.textContent += text.charAt(index);
        index++;
        setTimeout(type, 100);
      }
    }

    type();