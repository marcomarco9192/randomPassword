
const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
   "/"];

   
   
let passwordOne = document.getElementById("passwordOne-el")
let passwordTwo = document.getElementById("passwordTwo-el")

function generatePassword(length = 15) {
   let generatePassword = ""
   let generatePasswordTwo = ""

for (let i = 0; i < length; i++) {
    let randomNumber = Math.floor(Math.random() * characters.length);

    generatePassword += characters[randomNumber];
}

for (let i = 0; i < length; i++) {
    let randomNumberTwo = Math.floor(Math.random() * characters.length);

    generatePasswordTwo += characters[randomNumberTwo];
}
passwordOne.textContent = generatePassword;
passwordTwo.textContent =  generatePasswordTwo;

}

const copyButton = document.getElementById('btn-copy');

        copyButton.addEventListener('click', (event) => {
           const content = document.getElementById('passwordOne-el').textContent;
           navigator.clipboard.writeText(content).then(
            function(){
                alert("A MOZHE NAHYI PIDESH?"); // success 
            })


const copyButton = document.getElementById('btn-copy-two');

        copyButton.addEventListener('click', (event) => {
            const content = document.getElementById('passwordTwo-el').textContent;
            navigator.clipboard.writeText(content).then(
            function(){
                alert("A MOZHE NAHYI PIDESH?"); // success 
            })     
        })
      
    })
   

    







