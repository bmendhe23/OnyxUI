const btnBaselineSnackbar = document.querySelector('.baseline-snackbar-btn');
const btnTopSnackbar = document.querySelector('.top-snackbar-btn');
const btnLeadingSnackbar = document.querySelector('.leading-snackbar-btn');
const closeBtnBaselineSnackbar = document.querySelector('.baseline-snackbar-close');
const closeBtnTopSnackbar = document.querySelector('.top-snackbar-close');
const closeBtnLeadingSnackbar = document.querySelector('.leading-snackbar-close');
const baselineSnackbarDiv = document.querySelector('.baseline-snackbar');
const topSnackbarDiv = document.querySelector('.top-snackbar');
const leadingSnackbarDiv = document.querySelector('.leading-snackbar');


closeBtnBaselineSnackbar.addEventListener('click', () => {
    baselineSnackbarDiv.style.display = 'none';
})

closeBtnTopSnackbar.addEventListener('click', () => {
    topSnackbarDiv.style.display = 'none';
})

closeBtnLeadingSnackbar.addEventListener('click', () => {
    leadingSnackbarDiv.style.display = 'none';
})

btnBaselineSnackbar.addEventListener('click', () => {
    baselineSnackbarDiv.style.display = 'flex';
    setTimeout(() => {
        baselineSnackbarDiv.style.display = 'none';
    }, 5000);
})

btnTopSnackbar.addEventListener('click', () => {
    topSnackbarDiv.style.display = 'flex';
    setTimeout(() => {
        topSnackbarDiv.style.display = 'none';
    }, 5000);
})

btnLeadingSnackbar.addEventListener('click', () => {
    leadingSnackbarDiv.style.display = 'flex';
    setTimeout(() => {
        leadingSnackbarDiv.style.display = 'none';
    }, 3000);
})