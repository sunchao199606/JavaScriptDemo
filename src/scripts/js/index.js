// var elem = document.getElementById("test")

/*
 * 设置输入域(input/textarea)光标的位置
 * @param {HTMLInputElement/HTMLTextAreaElement} elem
 * @param {Number} index
 */
function setCursorPosition(index) {
    var val = elem.value
    var len = val.length
        // 超过文本长度直接返回
    if (len < index) return
    setTimeout(function() {
        elem.focus()
        if (elem.setSelectionRange) { // 标准浏览器
            elem.setSelectionRange(index, index)
        } else { // IE9-
            var range = elem.createTextRange()
            range.moveStart("character", -len)
            range.moveEnd("character", -len)
            range.moveStart("character", index)
            range.moveEnd("character", 0)
            range.select()
        }
    }, 10)
}

function setValue(val) {
    elem.value = val;
}

let me = {
    name: "John JR",
    age: 23,
    family: {
        father: "John",
        mother: "Vanisha"
    }
}

const formatPrint = (user) => {
    const text = `The user is ${user.name} ${user.surname}. Email: ${user.details}. Display Name: ${user.details}. ${user.name} has ${user.details} followers.`
    console.log(text);
}

formatPrint(me)