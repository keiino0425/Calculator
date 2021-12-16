function clickbutton(target){
  // htmlのresultからデータを取得
  let result = document.getElementById("result");
  // substringで使用するためにresultを文字列に変更する
  let result_text = result.textContent;
  // resultの文字列の最後を切り取る
  let last = result_text.substring(result_text.length - 1);
  // 入力したボタンを取得する
  let target_value = target.innerHTML;
  
  // ACを入力した場合はresultを0に変更する
  if (target_value == "AC"){
    result.innerHTML = "0"
  // =を入力した場合はresultで入力された計算を行う
  } else if(target_value == "="){
    result.innerHTML = eval(result.innerHTML);
  // 演算子が右端にあるときに演算子が並ばないようにする (3+++とならないようにする)
  } else if((target_value == "+") || (target_value == "-") || (target_value == "*") || (target_value == "/")){
    if ((last == "+") || (last == "-") || (last == "*") || (last == "/")){
      last.innerHTML = target_value
    } else {
      result.innerHTML += target_value
    }
  // 数値を入力するときに最初に0が記入されていたら0を除いて表示する(012とならないようにする)
  } else {
    if (result.innerHTML == "0"){
      result.innerHTML = target_value
    } else {
      result.innerHTML += target_value
    }
  }
}
