function solution(s) {


    let arr_s = []
    for(let i = 0; i < s.length; i ++){
        arr_s.push(s.charAt(i))
    }

    arr_s.sort()

    s=''
    for(let i = arr_s.length-1; i >= 0; i--){
        s+=arr_s.pop()
    }

    return s

}
