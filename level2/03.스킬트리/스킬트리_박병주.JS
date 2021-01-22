function solution(skill, skill_trees) {
    var answer = 0;
    var idx= 0;
    var compare1 = '', compare2='';

    for(var i=0; i<skill_trees.length; i++){
        // console.log("---------------")
        // console.log("스킬 : "+skill)
        // console.log("스킬 트리 : "+skill_trees[i]);
        // console.log("---------------")
        for( var j=0; j<skill_trees[i].length; j++){
            // console.log("스킬트리: "+skill_trees[i].charAt(j))
            // console.log(skill.indexOf(skill_trees[i].charAt(j)))
            // console.log("스킬트리 : "+skill.indexOf(skill_trees[i].charAt(j)))
            if(skill.indexOf(skill_trees[i].charAt(j)) != -1){
                // console.log("배우는 스킬 : "+skill_trees[i].charAt(j))
                //console.log(skill_trees[i].charAt(skill_trees[i].indexOf(skill[j])))
                //console.log(skill_trees[i].indexOf(skill[j]))
                compare1 += skill_trees[i].charAt(j);
                compare2 += skill.charAt(idx);
                idx++;                
            }
            
        }
        console.log(compare1+", "+compare2)
        idx =0;
        if( compare1 === compare2){
            // console.log("옳은 스킬트리")
            answer++;
        }
        compare1 =''
        compare2 =''
    }
    return answer;
}