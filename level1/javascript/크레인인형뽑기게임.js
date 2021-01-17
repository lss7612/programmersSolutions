function solution(board, moves) {
        var answer = 0;

        var resultArr = [];
        var arrIdx = 0;

        for (var i = 0; i < moves.length; i++) {
          //크레인이 움직임
          for (var j = 0; j < board.length; j++) {
            //크레인이 내려옴
            if (board[j][moves[i] - 1] !== 0) {
              //내려오는데 0이 아닐때만 작동
              //   console.log(board[j][moves[i] - 1]);
              if (arrIdx === 0) {
                //한번도 집어본 적 없음
                resultArr.push(board[j][moves[i] - 1]);
                arrIdx++;
              } else {
                //한번은 잡아봄
                console.log('hi');
                resultArr.push(board[j][moves[i] - 1]);
                arrIdx++;
                // console.log(i + 1 + '번째: ' + resultArr);
                // console.log(arrIdx);
                if (resultArr[arrIdx - 1] === resultArr[arrIdx - 2]) {
                  resultArr.pop();
                  resultArr.pop();
                  arrIdx -= 2;
                  answer += 2;
                }
              }

              board[j][moves[i] - 1] = 0;

              break;
            }
          }
        }
        console.log(resultArr);
        return answer;
      }