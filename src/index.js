class Sorter {
    constructor() {
        this.arr = [];
        this.sortt = (function (a, b) {
            return a - b;
        })
        // your implementation
    }

    add(element) {
        this.arr.push(element);
        // your implementation
    }

    at(index) {
        return this.arr[index];
        // your implementation
    }

    get length() {
        return this.arr.length;
        // your implementation
    }

    toArray() {
        return this.arr;
        // your implementation
    }

    sort(indices) {
        let arrIndices = [];
    
        if (indices[0] > indices[indices.length - 1])
            indices.reverse();

        for (let i = 0; i < indices.length; i++)
            arrIndices.push(this.arr[indices[i]]);

        arrIndices.sort(this.sortt);

        for (let i = 0; i < indices.length; i++)
            this.arr.splice(indices[i], 1, arrIndices[i]);


        // your implementation
    }

    setComparator(compareFunction) {
        if (compareFunction)
            return this.sortt = compareFunction;
        else
            return this.sortt;

        // your implementation
    }
}

module.exports = Sorter;