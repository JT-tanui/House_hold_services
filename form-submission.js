function setupFormSubmission(e) {
    document.getElementById(e).addEventListener("submit", function(e) {
        e.preventDefault();
        for (var t, n, o = e.target.elements, i = {}, r = 0; r < o.length; r++) "submit" === o[r].type ? t = o[r] : i[o[r].name] = o[r].value;
        t ? (n = t.innerText, i.analyticsId = window.LANDING_SITE_ID, t.innerText = "Sending...", fetch(window.LANDING_SITE_CONTACT_US_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(i)
        }).then(function(e) {
            if (console.log(e), e.ok) {
                t.innerText = "Done!";
                for (var n = 0; n < o.length; n++) "submit" !== o[n].type && (o[n].value = "")
            } else t.innerText = "Error. Please try again."
        }).catch(e => {
            console.error("Error:", e)
        }).finally(function() {
            setTimeout(function() {
                t.innerText = n
            }, 4e3)
        })) : console.error("No submit button found.")
    })
}
document.getElementById("mobile-menu-icon").addEventListener("click", function() {
    document.getElementById("nav-links-mobile").classList.toggle("hidden")
}), setupFormSubmission("contact-us-form");