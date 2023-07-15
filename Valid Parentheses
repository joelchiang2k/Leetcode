var isValid = function(s) {
   if(s.length == 1) return false
   let stack = []
   let map = {
       ")":"(",
       "}":"{",
       "]":"["
   }
   
   for(let i = 0; i < s.length; i++){
       let cbv = map[s[i]]
       
       if(cbv){                                       //if "}" "]" ")" found in map, pop their keys. e.g "({[]})" stack = ["(","{","["]
           if(stack.pop() != cbv) return false
       }
       else{                    //pushes "(" "[" "{" in stack if not found in map
           stack.push(s[i])
       }
   }
   
    return stack.length == 0 //if stack is empty, it is true
};
