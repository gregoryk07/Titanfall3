let originTitle = document.title;

function oldTitle() {
    document.title = originTitle;
    console.log('User has came back to this window');
}

function newTitle() {
    document.title = '#SaveTitanfall';
    console.log('User has left this window');
}

window.onblur = newTitle;
window.onfocus = oldTitle;