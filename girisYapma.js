//Giriş Yapma Kayıt Olma
const users = [
    {
        name: "hande",
        password: 1234 
    },
    {
        name: "eylül",
        password: 1111
    },
    {
        name: "ayla",
        password: 1020
    },
    {
        name: "ece",
        password: 2022
    }
];

const userName = prompt("Giriş için lütfen kullanıcı adınızı giriniz.").toLocaleLowerCase();
const userPasword = Number(prompt("Lütfen şifrenizi giriniz."));

for (let i = 0; i < users.length; i++) {
    if((users[i].name === userName) && (users[i].password === userPasword)){
        alert("Başarı ile giriş yapıldı.");
        confirm("Çıkmak isterseniz 'Tamam' tıklayın");
        if(true);
        break;
        
    }else{
        alert("Böyle bir kullanıcı yok.");
        confirm("Kayıt olmak isterseniz 'Tamam' tıklayın");
        if(true);
        let newUserName = prompt("Kullanıcı adı giriniz.");
        let newUserPassword = Number(prompt("Şifrenizi giriniz."));
        const newObje = {
            name: newUserName,
            password: newUserPassword
        };
        users.push(newObje);
        break;
    }
    
}
console.log(users);
