
let login_register = document.getElementById("login_register");
const return_div = document.createElement("div");
return_div.setAttribute("id", "return-div");
document.body.insertBefore(return_div, document.getElementById("login_register"));

function return_main(id_father) {
    let return_div = document.getElementById("return-div");
    return_div.innerHTML += `<div><button onclick="exit_();">Pagina Inicial</button></div>`
}


login_register.innerHTML += `
<input type="checkbox" id ="flip">
<div class="cover">
    <div class="front">
        <img src ="https://i.pinimg.com/236x/05/03/fb/0503fbd593187d454ea5ad2e0f68e23d.jpg">
        <div class="text">
        </div>
    </div>
    <div class="back">
    <img  class="backImg" src ="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxASEA8QDRIREBAPEBUVDw8VEBAREA8QFRIiFxUTFxMZHSggGiYxGxUTITEhJSkrMi4uFx81RDMtNygtLysBCgoKDQ0OGhAQGismICUtKy0tLSstLS0tLy0tLSsrLS0tLSsrKystLS0tLS0tLS0tMC0tLS0tKy0tLS0tLS0tLf/AABEIAKgBLAMBEQACEQEDEQH/xAAcAAEAAQUBAQAAAAAAAAAAAAAABgECAwQFBwj/xABAEAACAgIBAQQIAgQMBwAAAAAAAQISAxEEIQUGMVEHE0FhcYGRoSIyI0JSYhQXJFNygpKxwcLR8RUzRFSys9L/xAAaAQEAAwEBAQAAAAAAAAAAAAAAAQIDBAUG/8QAMhEBAQACAgACBgkEAwEAAAAAABEBAgMSBCEFIjFRodEUMkFhcYGRsfATQlLhQ1PxI//aAAwDAQACEQMRAD8A5p9IwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAv0VqYaFIaFIaFIaFIaFIaFIaFIaFIaFIaFIaFIaFIaFIaFIy4uNKXgunm+iOTn8dwcHltt5+7Hnn+fi6uDwXNzeeuPL358sfz8G1j7OX6z38Oh5PL6b3/49P1+WPm9Ti9D6/wDJt+n+2aPDxr9XfxbZw7+k/F7f3T8MYduno7wuv9t/HOV/8Hh+zH6Ixz43xX/Zt+rX6J4b/rx+ij42P9lf3FtfH+Lx7OTP7/urnwXhs/2Y/b9mOfAg/Da+f+p1cfpjxOv1pn8vk5t/RPh9vq3H5/NrZOBJflal9melw+meHby5MZ1+OPn8Hn83ojl189M4z8M/L4taUGujWmerpya747a5uPueZvx7aZ67YmVNFqrDQpDQpDQpDQpDQpDQpDQpDQpDQpDQpDQpDQpDQpDQpF+iKtDQpDQpDQpDQpDQpDQpDQpDQpDQpDQpDQpDQpF0Mbb0jLl5tOLXtvmYacXFvybddcN3DxYrq+r+yPn/ABXpLl5fV09XHx/X5Pd8N6P4+Pz388/Bs7PM6vR7Gx1OxsdTsbHU7Gx1OxsdTsbHU7LMkFJaktmvDy8nFt20zGXLx8fLjrvitLPxWuseq+6PoPCekteX1eTy2+Gfk8PxXo/bj9bTzx8cNfR6bzjQpDQpDQpDQpDQpDQpDQpDQpDQpDQpDQpDQpDQpGSpSrQqKQqKQqKQqKQqKQqKQqKQqKQqKQqKQqKRdjxNvS/2Mufn14te2zbh4duXbrhu44KK0v8Ac+c5+Xfm27bf+Pe4eLTi166rzHq27A6nYHU7A6nYHU7A6nYHU7A6nYHU7A6nZrZ8Htj80et4LxucTj5M/hn5vL8X4PGfX4/zx8mto9h5MKikKikKikKikKikKikKikKikKikKikKikKikZalavCopCopCopCopCopCopCopCopCopCopBRK7b41xcp11ztmYbWOGkeFz8m3Lv2z+T2+HjxxazC4x6tewOp2B1OwOp2B1OwOp2B1OwOp2B1OwOp2B1OwOp2a+bH7Uet4LxGdsdNvbj2PL8XwYxnvr7GOp31xQqKQqKQqKQqKQqKQqKQqKQqKQqKQqKQqKRkqUq8KikKikKikKikKikKikKikKikKikKikZMUPacPi+S+pj83b4XSevlkOHq7KDqUHUoOpQdSg6lB1KinerlciHIxQx5Z4sc8Lf4FtuUXJy6Lq+lPqa6aa5x54cPieTk13xjGZiK9zc+V5ORDNPJNxUXG8pyetvws+nsHJrr5TCfCb7ZztjbOc/ilRl1dtB1KDqUHUo0W1uubhXabYmWBwPY03xtrjOHlb6dds4UqWqsKikKikKikKikKikKikKikKikKikKikZqlKvCopCopCopCopCopCopCopCopCopCozmYqcYvkvSPN2uc3Lvx5YiuisTTQhTQhTQhTQhTQhTQhXC7z8HNk9Q8GOORwlOyk4qKThrrtrfy8kW1ww59dtp1w1O63ZXIw5ZTzwjjjPHVJSUm5btt6b8n7SdplTg030zcpRopHVTQhTQhTQhTQhVsonV4faXVz8+vsytqdVc0KikKikKikKikKikKikKikKikKikKikZqlKvCopCopCopCopCopCopCopCopCopBRKcmfVX48esrU5o6KVETSoiKVEKVEKVEK0s2TkRlNxxQyY1qmstcr6dfwyjXx/eImUds+7+fz73Hn3x46coyhljKKltSjHXrI9KOsn7VrfgJt7mWfE6ezzV7o9t5uS8yzKH6NRacVKP5t9NNv9knrEcPNne12uTy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">
    <div class="text">
    </div>
</div>
</div>
<form action="#">
  <div class="form-content">
    <div class="login-form">
        <div class="title">Login</div>
        <div class="input-boxes">
            <div class="input-box">
                <i class="fa-solid fa-envelope"></i>
                <input id="email_l" type="text" placeholder="Email" required>
            </div>
            <div class="input-box">
                <i class="fa-solid fa-lock"></i>
                <input id="password_l" type="password" placeholder="Senha" required>
            </div>
            <spam id ="erro_login"></spam><br>
            <div class="button input-box">
                <input type="button" value="Enter" onclick="validate_login();">
            </div>
            <div class="text login-text">
                Não tem uma conta: <label for="flip">Registrar agora</label>
            </div>
        </div>
    </div>

    <div class="signup-form">
        <div class="title">Registrar</div>
        <div class="input-boxes">
            <div class="input-box">
                <i class="fas fa-user"></i>
                <input id="name_r" type="text" placeholder="Nome Completo" required>
            </div>
            <div class="input-box">
                <i class="fa-solid fa-at"></i>
                <input id="email_r" type="text" placeholder="Email" required>
            </div>
            <div class="input-box">
                <i class="fa-solid fa-lock"></i>
                <input id="password_r" type="password" placeholder="Senha" required>
            </div>
            <div class="input-box">
                <i class="fa-solid fa-cake-candles"></i>
                <input id="old_r" type="text" placeholder="Idade:" required>
                <div class="input-box">
                    <i class="fa-solid fa-location-crosshairs"></i>
                    <input  id="cep_r" type="text" placeholder="Cep" required>
                </div>
            </div>
            <spam id ="erro_register"></spam><br>
            <div class="button input-box">
                <input type="button" value="Criar Conta" onclick="validate_register();">
            </div>
            <div class="text singup-text">
                Ja possui uma conta: <label for="flip">Entre</label>
            </div>
        </div>
    </div>
  </div>
</form>`


const bd_login = [{
    nome: "Admin",
    email: "test@test.com",
    idade: 19,
    password: "12345678",
    cep: "123456789",
}];
login_register.style.display = "none";
let active_l = 0
function active_loginRegister() {
    if (active_l == 0) {
        return_main("login_register")
        login_register.style.display = "block";
        div_product.style.display = "none"
        active_l = 1;
    }
}

function exit_() {
    if (active_l == 1) {
        active_l = 0;
        return_main("login_register")
        login_register.style.display = "none";
        div_product.style.display = "block"
        let element = document.getElementById("return-div");
        element.innerHTML = "";
    }
    console.log(active_l)
}

function validate_login() {
    const email = document.getElementById("email_l").value;
    const password = document.getElementById("password_l").value;
    var erro = 0;

    let msg = "Campo(s) Invalido(s) ou Não preenchido(s)";
    if (email.indexOf("@") == -1 || email.indexOf(".") == -1 || email == '') {
        erro = 1;
    } else {
        //verificar no bd se email existe
        for (var i = 0; i < bd_login.length; i++) {
            if (bd_login[0].email == email) {
                erro = 0;
                break;
            } else {
                msg = "Não foi encontrado uma conta para este email"
                document.getElementById("email_l").style.color = 'red';
                erro = 1;
            }
        }
    }
    if (password.length <= 0) {
        erro = 1;
    } else {
        //verificar no bd se senha confere
        if(erro == 0){
            for (var i = 0; i < bd_login.length; i++) {
                if (bd_login[0].password == password) {
                    erro = 0;
                    break;
                } else {
                    msg = "Senha Invalida"
                    document.getElementById("email_l").style.color = 'red';
                }
            }
        }
    }
    console.log(erro);
    if (erro == 1) {
        document.getElementById('erro_login').innerHTML = msg;
        document.getElementById("email_l").style.color = 'red';
    } else {
        document.getElementById('erro_login').innerHTML = "Sucess";
        document.getElementById("email_l").style.color = '';
        exit_();
        //funçao para carregar foto de perfil
    }
}

function validate_register() {
    let erro = 0;
    const nome = document.getElementById("name_r").value;
    const email = document.getElementById("email_r").value;
    const password = document.getElementById("password_r").value;
    const idade = parseInt(document.getElementById("old_r").value);
    const cep = document.getElementById("cep_r").value;

    let msg = "Campo(s) Invalido(s) ou Não preenchido(s)";

    if (email.indexOf("@") == -1 || email.indexOf(".") == -1 || email == '') {
        msg = "Campo(s) Invalido(s) ou Não preenchido(s)"
        erro = 1;
        console.log(erro)
        document.getElementById("email_r").style.color = 'red';
    } else {
        for (var i = 0; i < bd_login.length; i++) {
            if (bd_login[0].email == email) {
                msg = "Este Email ja esta registrado "
                document.getElementById("email_r").style.color = 'red';
                erro = 1;
                break;
            }
        }
    }
    if (nome.length < 3) {
        msg = "Campos Invalidos ou Não preenchidos"
        erro = 1;
        document.getElementById("name_r").style.color = 'red';
    }
    if (password.length < 5) {
        msg = "Senha deve conter mais de 5 caracteres"
        erro = 1;
        console.log(erro)
        document.getElementById("password_r").style.color = 'red';
    }
    if (cep.length < 8) {
        msg = "Campo(s) Invalido(s) ou Não preenchido(s)"
        erro = 1;
        console.log(erro)
        document.getElementById("cep_r").style.color = 'red';
    }
    if (idade < 18 || isNaN(idade)) {
        msg = "Idade Invalida"
        erro = 1;
        document.getElementById("old_r").style.color = 'red';
    }
    if (erro == 1) {
        document.getElementById('erro_register').innerHTML = msg;
        document.getElementById("email_l").style.color = 'red';
    } else {
        document.getElementById('erro_register').innerHTML = "";
        document.getElementById("email_l").style.color = '';
        var user = new Object;
        user.nome = nome;
        user.email = email;
        user.idade = idade;
        user.password = password;
        user.cep = cep;
        bd_login.push(user);
        console.log(bd_login);
    }

}