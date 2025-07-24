describe('Register', () => {
  it.only('Cadastro de novo usuário com dados válidos', () => {
    cy.visit('https://automationexercise.com/')

    cy.contains('a', ' Signup / Login').click()
    
    cy.get('[data-qa="signup-name"]').type("Andrey Alves2")
    cy.get('[data-qa="signup-email"]').type("andreyalves2@teste.com")
    cy.get('[data-qa="signup-button"]').click()
    cy.contains('h2', 'Enter Account Information').should('be.visible')
    cy.get('#id_gender1').check()
    cy.get('[data-qa="name"]').should('have.value', 'Andrey Alves2')
    cy.get('[data-qa="email"]').should('have.value', 'andreyalves12@teste.com')
    cy.get('[data-qa="password"]').type("teste1232")
    cy.get('[data-qa="days"]').select('15')
    cy.get('[data-qa="months"]').select('November')
    cy.get('[data-qa="years"]').select('1998')

    cy.get('[data-qa="first_name"]').type('ANdrey')
    cy.get('[data-qa="last_name"]').type('Alves')
    cy.get('[data-qa="address"]').type('Caixa dagua')
    cy.get('[data-qa="country"]').select('Canada')
    cy.get('[data-qa="state"]').type('Ceara')
    cy.get('[data-qa="city"]').type('Crato')
    cy.get('[data-qa="zipcode"]').type('63103123')
    cy.get('[data-qa="mobile_number"]').type('88921441234')
    cy.get('[data-qa="create-account"]').click()
    cy.contains('h2', 'Account Created!').should('be.visible')
    cy.get('[data-qa="continue-button"]').click()
    cy.contains('a', 'Logged in as Andrey Alves').should('be.visible')

  })

  it('Tentativa de cadastro com e-mail já registrado', () => {
    cy.visit('https://automationexercise.com/')

    cy.contains('a', ' Signup / Login').click()

    cy.get('[data-qa="signup-name"]').type("Andrey Alves")
    cy.get('[data-qa="signup-email"]').type("andreyalves1@teste.com")
    cy.get('[data-qa="signup-button"]').click()
    cy.contains('p', 'Email Address already exist!')
      .should('be.visible')
      
  })

  it('Login com credenciais válidas', () => {
    cy.visit('https://automationexercise.com/')

    cy.contains('a', ' Signup / Login').click()

    cy.get('[data-qa="login-email"]').type("andreyalves@teste.com")
    cy.get('[data-qa="login-password"]').type("teste123")
    cy.get('[data-qa="login-button"]').click()
    cy.contains('a', 'Logged in as Andrey Alves').should('be.visible')

  })

  it('Login com senha incorreta', () => {
    cy.visit('https://automationexercise.com/')

    cy.contains('a', ' Signup / Login').click()

    cy.get('[data-qa="login-email"]').type("andreyalves@teste.com")
    cy.get('[data-qa="login-password"]').type("teste123erro")
    cy.get('[data-qa="login-button"]').click()
    cy.contains('p', 'Your email or password is incorrect!')
      .should('be.visible')

  })

  it('Login com email incorreto', () => {
    cy.visit('https://automationexercise.com/')

    cy.contains('a', ' Signup / Login').click()

    cy.get('[data-qa="login-email"]').type("andreyalveserro@teste.com")
    cy.get('[data-qa="login-password"]').type("teste123")
    cy.get('[data-qa="login-button"]').click()
    cy.contains('p', 'Your email or password is incorrect!')
      .should('be.visible')

  })

})