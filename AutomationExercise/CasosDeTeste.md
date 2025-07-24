# 📋 Casos de Teste - AutomationExercise.com

## 🔐 Autenticação  

### CT001 - Cadastro de novo usuário com dados válidos  **OK**
**Pré-condições:** Acessar a home do site  
**Passos:**
1. Clicar em "Signup / Login"
2. Preencher o nome e e-mail válidos
3. Preencher todos os campos obrigatórios do formulário
4. Submeter o cadastro
**Resultado esperado:** Usuário é cadastrado e logado com sucesso

---

### CT002 - Tentativa de cadastro com e-mail já registrado  **OK**
**Pré-condições:** Ter um e-mail já cadastrado  
**Passos:**
1. Acessar "Signup / Login"
2. Informar nome e e-mail já registrados
3. Submeter o formulário
**Resultado esperado:** Exibir mensagem de erro informando que o e-mail já existe

---

### CT003 - Login com credenciais válidas  **OK**
**Pré-condições:** Conta já criada  
**Passos:**
1. Clicar em "Signup / Login"
2. Informar e-mail e senha válidos
3. Clicar em "Login"
**Resultado esperado:** Usuário autenticado com sucesso

---

### CT004 - Login com senha ou senha incorreta  **OK**
**Pré-condições:** Conta já criada  
**Passos:**
1. Informar e-mail correto e senha incorreta
2. Clicar em "Login"
**Resultado esperado:** Exibir mensagem de erro de login inválido

---

## 🛍️ Compras e Carrinho

### CT005 - Adicionar item ao carrinho  
**Passos:**
1. Acessar home
2. Escolher um produto e clicar em "Add to cart"
3. Clicar em "View Cart"
**Resultado esperado:** Produto deve aparecer no carrinho com valor correto

---

### CT006 - Remover item do carrinho  
**Pré-condições:** Produto já no carrinho  
**Passos:**
1. Ir ao carrinho
2. Clicar no botão "X" para remover o item
**Resultado esperado:** Carrinho deve ficar vazio

---

### CT007 - Realizar checkout com usuário logado  
**Pré-condições:** Estar logado e com produto no carrinho  
**Passos:**
1. Ir ao carrinho
2. Clicar em "Proceed To Checkout"
3. Confirmar endereço e método de pagamento
4. Submeter pedido
**Resultado esperado:** Compra realizada com sucesso

---

## 🔍 Busca

### CT008 - Buscar por produto existente  
**Passos:**
1. Digitar nome de um produto válido no campo de busca
2. Clicar em "Search"
**Resultado esperado:** Produtos relacionados devem ser listados

---

### CT009 - Buscar por produto inexistente  
**Passos:**
1. Digitar nome inválido ou inexistente
2. Clicar em "Search"
**Resultado esperado:** Mensagem de "Product not found" ou similar

---

## 📧 Contato

### CT010 - Enviar mensagem pelo formulário de contato  
**Passos:**
1. Acessar "Contact us"
2. Preencher todos os campos obrigatórios (Name, Email, Subject, Message)
3. Anexar arquivo (opcional)
4. Submeter o formulário
**Resultado esperado:** Mensagem de sucesso exibida e redirecionamento à home

---

## 🧾 Outros

### CT011 - Verificar exibição de produtos em destaque na home  
**Passos:**
1. Acessar a home
**Resultado esperado:** Produtos em destaque visíveis, com imagem, nome e botão de "Add to cart"

---

### CT012 - Logout do sistema  
**Pré-condições:** Usuário logado  
**Passos:**
1. Clicar em "Logout"
**Resultado esperado:** Usuário redirecionado para tela de login

---

