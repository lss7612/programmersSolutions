function solution(phone_number) {
    return phone_number.split('').map(($,idx)=>{
        if(idx<phone_number.length-4) return '*';
        return $;
    }).join('');
}