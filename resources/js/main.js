let removeSVG = '<?xml version="1.0" encoding="UTF-8"?><svg width="512px" height="512px" enable-background="new 0 0 774.266 774.266" version="1.1" viewBox="0 0 774.266 774.266" xml:space="preserve" xmlns="http://www.w3.org/2000/svg"><path class="fill" d="m640.35 91.169h-103.38v-67.178c0-13.522-10.907-23.991-24.428-23.991-1.312 0-2.187 0.438-2.614 0.875-0.438-0.437-1.313-0.875-1.75-0.875h-246.46c-13.521 0-23.99 10.469-23.99 23.991v67.179h-103.82c-29.667 0-52.783 23.116-52.783 52.783v86.368h45.803v491.6c0 29.668 22.679 52.346 52.346 52.346h415.7c29.667 0 52.782-22.678 52.782-52.346v-491.6h45.366v-86.368c0-29.667-23.125-52.784-52.783-52.784zm-354.64-43.188h202.84v43.188h-202.84v-43.188zm313.64 673.94c0 3.061-1.312 4.363-4.364 4.363h-415.7c-3.052 0-4.364-1.303-4.364-4.363v-491.6h424.43v491.6zm45.366-539.58h-515.16v-38.387c0-3.053 1.312-4.802 4.364-4.802h506.44c3.053 0 4.365 1.749 4.365 4.802v38.387z" fill="#adadad"/><rect class="fill" x="475.03" y="286.59" width="48.418" height="396.94" fill="#adadad"/><rect class="fill" x="363.36" y="286.59" width="48.418" height="396.94" fill="#adadad"/><rect class="fill" x="251.69" y="286.59" width="48.418" height="396.94" fill="#adadad"/></svg>';
let completeSVG = '<?xml version="1.0" encoding="UTF-8"?><svg width="512px" height="512px" enable-background="new 0 0 612 612" version="1.1" viewBox="0 0 612 612" xml:space="preserve" xmlns="http://www.w3.org/2000/svg"><path class="fill" d="m421.27 173.42c-9.142-5.278-20.847-2.142-26.125 7l-122.3 211.85-68.429-63.112c-7.229-7.707-19.316-8.108-27.024-0.88-7.707 7.229-8.109 19.316-0.879 27.043l87.439 80.65c7.229 7.707 19.316 8.108 27.023 0.88 2.333-2.181 137.32-237.28 137.32-237.28 5.261-9.16 2.124-20.865-7.017-26.144zm-115.27-173.42c-169.01 0-306 136.99-306 306s136.99 306 306 306 306-136.99 306-306-136.99-306-306-306zm0 573.75c-147.88 0-267.75-119.88-267.75-267.75s119.88-267.75 267.75-267.75 267.75 119.88 267.75 267.75-119.88 267.75-267.75 267.75z" fill="#0000b2"/></svg>';


//User click of the add button
document.getElementById('addItem').addEventListener('click', function() {
    let itemValue = document.getElementById('item').value.trim();
    conditions(itemValue, item, error); 
});

//User touch device of add button
document.getElementById('addItem').addEventListener('touchstart', function() {
    let itemValue = document.getElementById('item').value.trim();
        conditions(itemValue, item, error);
});

//User enter key of add button
document.getElementById('item').addEventListener('keydown', function(event) {
    let itemValue = document.getElementById('item').value.trim();
    if (event.keyCode === 13) {
        conditions(itemValue, item, error); 
    }
});

