/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let brackets_tracker = [];
    const STR_LEN = s.length;
    if(STR_LEN % 2 !== 0) return false; 
    const types_matches = {"(": ")","[": "]","{": "}"};
    let tracker_arr = [], tracker_cpy = [];
    for(keys in types_matches){
        if(types_matches[s[STR_LEN-1]]) return false;
    }
    for(let i = 0; i < STR_LEN; i++){
        if(types_matches[s[i]]) {
            tracker_arr.push(s[i]);
            tracker_cpy.push(s[i])
        }    
        else if(types_matches[tracker_arr.pop()] !== s[i]) return false;
    }
    if(tracker_cpy.length * 2 !== STR_LEN) return false;
    return true;
};