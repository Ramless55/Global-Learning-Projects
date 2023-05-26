/**
 * A container of integers that should support
 * addition, removal, and search for the median integer
 */
class Container {
    constructor() {
        this.value = [];
    }

    /**
     * Adds the specified value to the container
     *
     * @param {number} value
     */
    add(value) {
        // TODO: implement this method
        this.value.push(value)
    }

    /**
     * Attempts to delete one item of the specified value from the container
     *
     * @param {number} value
     * @return {boolean} true, if the value has been deleted, or
     *                   false, otherwise.
     */
    delete(value) {
        // TODO: implement this method
        const index = this.value.findIndex(number => number === value)
        if (index !== -1) { 
            this.value.splice(index, 1)
            return true
        }
        return false;
    }

    /**
     * Finds the container's median integer value, which is
     * the middle integer when the all integers are sorted in order.
     * If the sorted array has an even length,
     * the leftmost integer between the two middle
     * integers should be considered as the median.
     *
     * @return {number} the median if the array is not empty, or
     * @throws {Error} a runtime exception, otherwise.
     */
    getMedian() {
        // TODO: implement this method
        try{
            if(this.value.length === 0){
                throw new Error('')
            }
            
        }catch(err){
            console.log(err)
        }
        return 0;
    }

}

module.exports = Container;