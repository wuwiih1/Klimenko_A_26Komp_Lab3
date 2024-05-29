function task2() {
    let x = document.getElementsByClassName("x")[0].value;
    document.getElementsByClassName("x")[0].value = document.getElementsByClassName("y")[0].value;
    document.getElementsByClassName("y")[0].value = x;
}
function task3() {
    if (document.getElementsByClassName("task3")[0] == undefined) {
        let elem1 = document.createElement("input")
        let elem2 = document.createElement("input")
        let elem3 = document.createElement("input")
        elem1.className = "task3 input1"
        elem1.placeholder = "перша сторона"
        elem2.className = "task3 input2"
        elem2.placeholder = "друга сторона"
        elem3.className = "task3 input3"
        elem3.placeholder = "третя сторона"
        let cont = document.getElementsByClassName("three")[0]
        cont.append(elem1)
        cont.append(elem2)
        cont.append(elem3)
    } else {
        let a = parseFloat(document.getElementsByClassName("input1")[0].value)
        let b = parseFloat(document.getElementsByClassName("input2")[0].value)
        let c = parseFloat(document.getElementsByClassName("input3")[0].value)
        if (a + b > c || c + b > a || a + c > b) {
            let p = (a + b + c) / 2
            let s = Math.sqrt(p * (p - a) * (p - b) * (p - c))
            if (document.getElementsByClassName("task3_answer")[0] == undefined) {
                let cont = document.getElementsByClassName("three")[0]
                let ans = document.createElement("p")
                ans.className = "task3_answer"
                ans.textContent = "Площа " + s
                cont.append(ans)
            } else {
                document.getElementsByClassName("task3_answer").textContent = "Площа " + s
            }
        }
    }
}
function task4() {
    if (document.getElementsByTagName("form")[0] == undefined) {
        let form = document.createElement("form")
        let input = document.createElement("input")
        let submit = document.createElement("input")
        input.placeholder = "10 значень через пробіл"
        input.className = "data"
        submit.type = "button"
        submit.value = "Розв'язати"
        submit.onclick = submit_
        form.append(input)
        form.append(submit)
        document.getElementsByClassName("three")[0].append(form)
    }
}
function submit_() {
    let data = document.getElementsByClassName("data")[0].value.split(" ").map(parseFloat);
    if (data) {
        let min = Infinity
        let res = 0
        for (let i of data) {
            min = Math.min(min, i)
        }
        for (let i of data) {
            if (i == min) {
                res++;
            }
        }
        alert(`Результат ${res}`);
        document.cookie = "res=" + res;
    }
}
window.onbeforeunload = () => {
    return confirm(`Локальне сховище буде очищено`);
}
