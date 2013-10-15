function activateFinder() {
    var listA = $('#listA'),
        listB = $('#listB'),
        target = $('#targetA'),
        targetParent = $('#intersection'),
        alert = $('#alert');
    var arrA = (listA && listA.val().length > 0 ? listA.val().split('\n') : []),
        arrB = (listB && listB.val().length > 0 ? listB.val().split('\n') : []);
    targetParent.hide();
    alert.hide();
    if (arrA.length === 0 || arrB.length === 0) {
        alert.html('<strong>Warning!</strong> One of the lists below is empty. Fill it and try again.');
        alert.show();
    }
    var result = _.intersection(arrA, arrB);
    target.val(_(result).toString().replace(/,/g, '\n'));
    targetParent.show();
}