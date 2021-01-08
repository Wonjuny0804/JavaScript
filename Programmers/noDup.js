function solution(arr)
{
    var answer = [];
    answer = arr.filter((item, index) => {
        if (item !== arr[index - 1]) return true;
    })
    
    return answer;
}