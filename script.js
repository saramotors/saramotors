document.getElementById('getInTouch').addEventListener('click', function () {
  const contactSection = document.getElementById('contact');
  contactSection.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
  });
});


const form = document.getElementById('form');
const result = document.getElementById('result');

form.addEventListener('submit', function (e) {
    e.preventDefault();
    const formData = new FormData(form);
    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    // Show a loading message
    result.innerHTML = "Please wait...";

    fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
        },
        body: json
    })
        .then(async (response) => {
            let json = await response.json();
            if (response.status === 200) {
                // Display the checkmark animation
                result.innerHTML = `
                    <div class="checkmark-container">
                        <div class="checkmark"></div>
                    </div>
                    <p class="mt-4">Thank you! Your message has been successfully sent.</p>
                `;
            } else {
                console.log(response);
                result.innerHTML = `<p class="mt-4">${json.message}</p>`;
            }
        })
        .catch((error) => {
            console.log(error);
            result.innerHTML = `<p class="mt-4">Something went wrong!</p>`;
        })
        .then(function () {
            form.reset();
            setTimeout(() => {
                result.style.display = "none";
            }, 3000);
        });
});
