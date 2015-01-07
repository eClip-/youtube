emp.transRangeFunc = function (x) {
    return emp.translate('width')+': '+x;
};

emp.transFunc = function (y) {
    return emp.translate('height')+': '+y;
};

emp.transCombinedFunc = function (x,y) {
    console.log(arguments);
    return (x/y).toFixed(2);
};