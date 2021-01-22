function solution(skill, skill_trees) {
    
    let answer=0;
    
    
    for(let i = 0; i < skill_trees.length; i++){
        let st = skill_trees[i];
        let skill_idx = 0;
        let standard_str = '';
        let compare_str = '';
        
        for(let j = 0; j < st.length; j++){
            let char_st = st.charAt(j);
            if(skill.indexOf(char_st) !== -1){
                compare_str += char_st;
                standard_str += skill.charAt(skill_idx);
                skill_idx++;
                if(standard_str!==compare_str){
                    break;
                }
            }
        }
        
        if(compare_str === standard_str){
            answer++;
        }
    }
    
    return answer
}