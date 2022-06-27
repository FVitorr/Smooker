
let login_register = document.getElementById("login_register");

login_register.innerHTML += `
<input type="checkbox" id ="flip">
<div class="cover">
    <div class="front">
        <img src ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7550H8r9J-cQGUyEQQqSjyoonbaQGw2AeYw&usqp=CAU">
        <div class="text">
            <spam class="text-1">Texto Exemplo</spam>
            <spam class="text-2">Texto Exemplo 2</spam>
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
                <input type="text" placeholder="Email" required>
            </div>
            <div class="input-box">
                <i class="fa-solid fa-lock"></i>
                <input type="password" placeholder="Senha" required>
            </div>
            <div class="button input-box">
                <input type="submit" value="Enter">
            </div>
            <div class="text">
                Não tem uma conta: <label for="flip">Registrar agora</label>
            </div>
        </div>
    </div>

    <div class="signup-form">
        <div class="title">Registrar</div>
        <div class="input-boxes">
            <div class="input-box">
                <i class="fas fa-user"></i>
                <input type="text" placeholder="Nome Completo" required>
            </div>
            <div class="input-box">
                <i class="fa-solid fa-at"></i>
                <input type="text" placeholder="Email" required>
            </div>
            <div class="input-box">
                <i class="fa-solid fa-lock"></i>
                <input type="password" placeholder="Senha" required>
            </div>
            <div class="button input-box">
                <input type="submit" value="Enter">
            </div>
            <div class="text">
                Ja possui uma conta: <label for="flip">Entre</label>
            </div>
        </div>
    </div>
  </div>
</form>`