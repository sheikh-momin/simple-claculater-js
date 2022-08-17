document.getElementById('btn').addEventListener('click',()=>{
  const resultFiled = document.getElementById("result")
  resultFiled.value = ''
})


function display(value) {
    document.getElementById("result").value += value;
}

function calculate() {
    let previousValue = document.getElementById("result").value;
    let newValue = eval(previousValue);
    document.getElementById("result").value = newValue;
}