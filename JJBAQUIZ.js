// redirect to annother page
function redirectToQuiz(difficulty) {
    // Redirect to the corresponding quiz page
    window.location.href = `${difficulty}.html`;
}

document.querySelectorAll('abbr.noUnderline').forEach(function(el) {
    el.addEventListener('mouseenter', function() {
        // Store the title attribute value in a data-title attribute
        el.setAttribute('data-title', el.getAttribute('title'));
        // Remove the title attribute to prevent the default tooltip
        el.removeAttribute('title');
    });

    el.addEventListener('mouseleave', function() {
        // Restore the title attribute from the data-title attribute
        el.setAttribute('title', el.getAttribute('data-title'));
    });
});
