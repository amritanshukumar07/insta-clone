bool Parenthesis(string s){
     stack st;
    for(int i=0;i<s.length();i++){ 
        if(s.length()==0){ return true;}

        if(s[i]=='(' || s[i]=='{' || s[i]=='['){
          st.push(s[i]);
        }
        if(!st.empty()){

        }
        if(s[i]==')' && st.top()=='('){
            
                st.pop();
    
        }
        else if(s[i]=='}'  && st.top()=='{'){
            st.pop();
        }
        else  if(s[i]==']' && st.top()=='['){
           st.pop();
        }

    }
    if(st.empty()){
        return true;
    }
    else return false;
}

a+[b*{c+d]}