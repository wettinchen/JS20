## JavaScript Chapter 20
It is my coding practice with the TUTORIAL of Dave Gray. 

## Source
### Dave Gray 的 JavaScript 課程
https://youtube.com/playlist?list=PL0Zuz27SZ-6Oi6xNtL_fwCrwpuqylMsgT

### Dave Gray 的 YouTube 頻道
https://www.youtube.com/@DaveGrayTeachesCode

## JavaScript Chapter 20
   Quick Concept outline
   中文摘要說明與重點提問

###  1. Strict Mode
        (1)Not Strict Mode
        (2)Strict Mode
        (3)使用 const 宣告避免Uncaught ReferenceError

###  2. Common JavaScript Error Types
        包含 ReferenceError, SyntaxError, TypeError

###  3. ReferenceError
        Uncaught ReferenceError: variable is not defined

###  4. SyntaxError
        Uncaught SyntaxError: Unexpected token '.'

###  5. TypeError
        Uncaught TypeError: Assignment to constant variable.

###  6. Using a Try Catch block
        使用 try catch 區塊

###  7. The catchID parameter
        在 catch 後方輸入參數 catchID

###  8. Using console.error() instead of console.log()
        使用 console.error()

###  9. console.warn()
        使用 console.warn()

### 10. console.table()
        使用 console.table()

### 11. Error Object properties: name, message, stack
        (1)使用 console.error(err.name) 回傳 TypeError
        (2)使用 console.error(err.message) 回傳 Assignment to constant variable.
        (3)使用 console.error(err.stack) 回傳 TypeError: Assignment to constant variable.

### 12. Create a Custom Error
        設置函數名稱為 customError，參數為 message，用 this 關鍵字指派 name 為 customError，message 為 message參數，stack 為 特定結果

### 13. throw keyword
        用 throw 關鍵字指派 customError("This is a custom error!");

### 14. The generic error constructor
        移除 customError(message)，修改 constructor 為 Error("This is a error!");

### 15. Adding a finally to your Try Catch block
        加入 finally 作為除外情況

### 16. An example of Try, Catch, Finally
        範例在 i 為1, 3, 5會回傳 Error