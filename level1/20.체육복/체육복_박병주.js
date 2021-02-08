function Student(clothes) {
    this.clothes = clothes;
    
    this.giveClothes = function(friend){
        if(this.clothes==1){
            console.log('한개밖에 없다..')
        } else if(this.clothes>1){
            if(friend.clothes===0){
                console.log('내꺼줄게')
                this.clothes -= 1;
                friend.getClothes();
                return true;
            }
        }
        return false;
    }
    
    
    this.getClothes = function(){
        if(this.clothes===0){
            console.log('고마워');
            this.clothes += 1;
        }
    }
    
}


function solution(n, lost, reserve) {
    
    //학생 배열 만들기
    let arr_student = new Array();
    for(let i = 1; i <= n; i++){
        arr_student.push(new Student(1));
    }
    
    for(let i = 0; i<reserve.length; i++){
        let index = reserve[i]-1;
        arr_student[index].clothes++;
    }
    for(let i = 0; i<lost.length; i++){
        let index = lost[i]-1;
        arr_student[index].clothes--;
    }
    
    console.log(arr_student)
    //학생배열 만들기 끝
    
    
    let student;
    for(let i = 0; i < arr_student.length; i++){
        console.log(arr_student)
        student = arr_student[i]
        if(student.clothes>1){
            if(i!==0) {
                student.giveClothes(arr_student[i-1])
            };
            if(i!==arr_student.length-1)
                student.giveClothes(arr_student[i+1])
        }
    }
    // console.log(arr_student)
    
    // console.log(arr_student)
    let cnt_noClothes = n;
    for(let i = 0; i < arr_student.length; i++){
        if(arr_student[i].clothes===0) cnt_noClothes--;
    }
    return cnt_noClothes;
}
    
function isStudentInArray(number,arr){
    for(let i = 0; i < arr.length; i++){
        if(number===arr[i]) return true;
    }
    return false;
}