/**
 * Created by rupakulr on 1/20/2017.
 */


Array.prototype.except = function (keys) {

    var removed = [];

    if(Array.isArray(keys))
    {
        for(var i = 0;i<this.length;i++)
        {
            if(keys.indexOf(i) == -1)
            {
                removed.push(this[i]);
            }
        }
    }
    else
    {
        for(var i = 0;i<this.length;i++)
        {
            if(i != keys)
            {
                removed.push(this[i]);
            }
        }
    }

    return removed;

};


var array = [1, 2, 3];
var res = array.except([1]);

console.log(res);

