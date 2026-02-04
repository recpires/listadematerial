// Dados extraídos do PDF "Lista de Material 2026" e Imagens de Papelaria
const materialData = {
  // --- EDUCAÇÃO INFANTIL ---
  maternal: {
    title: "Maternal (3 Anos)",
    totalBooks: "R$ 1.206,00",
    stationeryTotal: "R$ 233,90", // Valor adicionado da imagem
    books: [
      {
        name: "Coleção SIE - Ed. Infantil 3 anos - 1º Semestre",
        price: "R$ 192,00",
      },
      {
        name: "Coleção SIE - Ed. Infantil 3 anos - 2º Semestre",
        price: "R$ 192,00",
      },
      { name: "Coleção SIE - Bilíngue 3 anos (3 vol)", price: "R$ 496,00" },
      { name: "Brincando de Música - Iniciação Musical", price: "R$ 71,00" },
      { name: "1º Bim: Descobrindo as Cores com a Luisa", price: "R$ 22,00" },
      { name: "2º Bim: Descobrindo as Formas com a Gi", price: "R$ 22,00" },
      { name: "3º Bim: Aventuras Bíblicas 1", price: "R$ 43,00" },
      {
        name: "Todos os Sentimentos são importantes + Cards",
        price: "R$ 59,00",
      },
      { name: "Avental Plástico", price: "R$ 25,00" },
      { name: "A Bíblia para Crianças", price: "R$ 84,00" },
    ],
    stationery: [
      "1 Cx Lápis de cor jumbo (12 cores)",
      "1 Lápis preto nº 02 jumbo",
      "1 Apontador plástico c/ depósito (jumbo)",
      "1 Borracha branca macia",
      "1 Tesoura vai e vem",
      "1 Cx Giz de cera curto grosso (12 cores)",
      "4 Tubos de cola bastão 40gr",
      "4 Potes de massa de modelar (150gr)",
      "1 Cx Tinta pintura a dedo",
      "1 Cx Tinta guache (6 cores)",
      "1 Pincel (prancha) nº 18",
      "1 Pasta plástica transparente A3",
      "1 Caderno cartografia A4 50fls capa dura",
      "1 Pacote Palito de sorvete (100un)",
      "1 Pacote Creative Lumi Paper",
      "1 Pacote Algodão em bolinhas",
      "1 Fita adesiva larga",
      "1 Fita dupla face",
      "10 Sacos plásticos 4 furos A4",
      "1 Bloco Papel Canson A4",
    ],
  },
  pre1: {
    title: "Pré I (4 Anos)",
    totalBooks: "R$ 1.282,00",
    stationeryTotal: "R$ 232,00", // Valor adicionado da imagem
    books: [
      { name: "Coleção SIE - 4 anos - 1º Semestre", price: "R$ 229,00" },
      { name: "Coleção SIE - 4 anos - 2º Semestre", price: "R$ 229,00" },
      { name: "Coleção SIE - Bilíngue 4 anos (3 vol)", price: "R$ 496,00" },
      { name: "Brincando de Música - Vol 1", price: "R$ 71,00" },
      { name: "1º Bim: Descobrindo os números", price: "R$ 22,00" },
      { name: "2º Bim: Manchas e Listrinhas", price: "R$ 24,00" },
      { name: "3º Bim: Aventuras Bíblicas II", price: "R$ 43,00" },
      { name: "Sejam bem vindos Sentimentos + Cards", price: "R$ 59,00" },
      { name: "Avental de Plástico", price: "R$ 25,00" },
      { name: "A Bíblia para Crianças", price: "R$ 84,00" },
    ],
    stationery: [
      "2 Lápis pretos nº 02 jumbo",
      "1 Cx Lápis de cor jumbo (12 cores)",
      "1 Cx Giz de cera curto grosso (12 cores)",
      "1 Apontador plástico c/ depósito (jumbo)",
      "1 Borracha branca macia",
      "1 Tesoura vai e vem",
      "4 Tubos de cola bastão 20gr",
      "1 Caderno cartografia A4 50fls capa dura",
      "1 Cx Tinta guache (6 cores)",
      "1 Pincel (prancha) nº 18",
      "3 Potes massa de modelar (150gr)",
      "1 Pasta plástica transparente A3",
      "1 Cola Colorida (6 cores)",
      "1 Pacote Palito de sorvete (100un)",
      "1 Pacote Creative Lumi Paper",
      "1 Pacote Algodão em bolinhas",
      "1 Fita adesiva larga",
      "1 Fita dupla face",
      "10 Sacos plásticos 4 furos A4",
      "1 Bloco Papel Canson A4",
    ],
  },
  pre2: {
    title: "Pré II (5 Anos)",
    totalBooks: "R$ 1.355,00",
    stationeryTotal: "R$ 272,00", // Valor adicionado da imagem
    books: [
      { name: "Coleção SIE - 5 anos (7 vol)", price: "R$ 620,00" },
      { name: "Coleção SIE - Bilíngue 5 anos (3 vol)", price: "R$ 496,00" },
      { name: "Brincando de Música - vol 2", price: "R$ 71,00" },
      { name: "Na aventura com os Sentimentos + Cards", price: "R$ 59,00" },
      { name: "Avental de Plástico", price: "R$ 25,00" },
      { name: "A Bíblia para Crianças", price: "R$ 84,00" },
    ],
    stationery: [
      "3 Lápis pretos (jumbo)",
      "1 Cx Lápis de cor jumbo (12 cores)",
      "1 Cx Giz de cera curto grosso (12 cores)",
      "1 Apontador plástico c/ depósito (jumbo)",
      "1 Borracha branca macia",
      "1 Tesoura vai e vem",
      "4 Tubos de cola bastão 20gr",
      "1 Cx Tinta guache (12 cores)",
      "1 Pincel (prancha) nº 10",
      "3 Potes massa de modelar (150gr)",
      "1 Pasta plástica transp. ofício c/ alça",
      "1 Caderno brochura grande 50fls (amarelo)",
      "1 Caderno cartografia A4 50fls capa dura",
      "1 Cola colorida (6 cores)",
      "1 Pacote Palito de sorvete (100un)",
      "1 Pacote Creative Lumi Paper",
      "1 Pacote Algodão em bolinhas",
      "3 Fitas adesivas coloridas",
      "1 Fita dupla face",
      "1 Cx Canetinha hidrocor jumbo 12 cores",
      "1 Bloco Papel Canson A4",
    ],
  },

  // --- FUNDAMENTAL I ---
  "1ano": {
    title: "1º Ano Fundamental",
    totalBooks: "R$ 1.680,00",
    stationeryTotal: "R$ 212,65", // Valor adicionado da imagem
    books: [
      { name: "Coleção SIE - 1º Ano - 1º Semestre", price: "R$ 410,00" },
      { name: "Coleção SIE - 1º Ano - 2º Semestre", price: "R$ 410,00" },
      { name: "SIE F1 - Arte 1º Ano", price: "R$ 94,00" },
      { name: "Projeto Ler é uma aventura 1º ano", price: "R$ 35,00" },
      { name: "Vivam os Sentimentos + Cards", price: "R$ 49,00" },
      { name: "A Bíblia para Crianças", price: "R$ 84,00" },
      { name: "Coleção Let's Find Out 1 (Inglês)", price: "R$ 598,00" },
    ],
    stationery: [
      "1 Cx Giz de cera curto grosso",
      "1 Tubo cola branca 90gr",
      "1 Caderno brochurão 50fls (azul)",
      "1 Caderno brochurão 50fls (vermelho)",
      "1 Caderno cartografia grande 50fls",
      "3 Etiquetas adesivas redondas",
      "1 Pasta plástica fina c/ elástico",
      "1 Cx Tinta guache (12 cores)",
      "1 Pincel prancha nº 12",
      "1 Pote massa modelar (150gr)",
      "3 Lápis pretos nº 02",
      "1 Cx Lápis de cor (12 cores)",
      "1 Cx Canetinha hidrocor grossa",
      "1 Estojo, Borracha e Apontador",
      "1 Tesoura sem ponta",
      "3 Tubos cola bastão 20gr",
      "1 Pacote Creative Lumi Paper",
      "1 Bloco Canson A4",
      "1 Fita Kraft e 3 Fitas Coloridas",
    ],
  },
  "2ano": {
    title: "2º Ano Fundamental",
    totalBooks: "R$ 1.680,00",
    stationeryTotal: "R$ 179,60", // Valor adicionado da imagem
    books: [
      { name: "Coleção SIE - 2º Ano - 1º Semestre", price: "R$ 410,00" },
      { name: "Coleção SIE - 2º Ano - 2º Semestre", price: "R$ 410,00" },
      { name: "SIE F1 - Arte 2º Ano", price: "R$ 94,00" },
      { name: "Projeto Ler é uma aventura 2º ano", price: "R$ 35,00" },
      { name: "Conversando com os Sentimentos + Cards", price: "R$ 49,00" },
      { name: "A Bíblia para Crianças", price: "R$ 84,00" },
      { name: "Coleção Let's Find Out 2 (Inglês)", price: "R$ 598,00" },
    ],
    stationery: [
      "1 Tubo de cola branca 90gr",
      "1 Caderno brochura grande 100 fls (azul)",
      "1 Caderno brochura grande 100 fls (vermelho)",
      "1 Caderno de cartografia grande 50 fls",
      "1 Caixa de tinta guache 06 cores",
      "1 Pincel (prancha) nº 10",
      "1 Régua 30 cm",
      "3 Lápis pretos nº 02",
      "1 Caixa de lápis de cor 12 cores",
      "1 Apontador com depósito",
      "2 Borrachas brancas",
      "1 Tesoura sem ponta",
      "2 Tubos de cola bastão 40gr",
      "1 Caixa de canetinha hidrocor 12 cores",
      "1 Pacote de Creative Lumi Paper",
      "1 Bloco de Papel Canson A4",
      "1 Fita adesiva Kraft",
    ],
  },
  "3ano": {
    title: "3º Ano Fundamental",
    totalBooks: "R$ 1.596,00",
    stationeryTotal: "R$ 198,80", // Valor adicionado da imagem
    books: [
      { name: "Coleção SIE - 3º Ano - 1º Semestre", price: "R$ 410,00" },
      { name: "Coleção SIE - 3º Ano - 2º Semestre", price: "R$ 410,00" },
      { name: "SIE F1 - Arte 3º Ano", price: "R$ 94,00" },
      { name: "Projeto Ler é uma aventura 3º ano", price: "R$ 35,00" },
      { name: "Bate Bola com os Sentimentos + Cards", price: "R$ 49,00" },
      { name: "Coleção Let's Find Out 3 (Inglês)", price: "R$ 598,00" },
    ],
    stationery: [
      "1 Cola colorida 6 cores",
      "1 Caderno brochura grande 100 fls (vermelho)",
      "1 Caderno brochura grande 100 fls (verde)",
      "1 Caderno brochura grande 100 fls (azul)",
      "1 Caderno de cartografia grande 50 fls",
      "1 Pincel (prancha) nº 10",
      "1 Caixa de tinta guache 06 cores",
      "1 Régua 30 cm",
      "2 Lápis pretos nº 02",
      "1 Caneta esferográfica (verde)",
      "1 Caixa de lápis de cor 12 cores",
      "1 Caixa de canetinha hidrocor 12 cores",
      "1 Apontador com depósito",
      "2 Borrachas brancas",
      "1 Tesoura sem ponta",
      "2 Tubos de cola bastão 40gr",
      "1 Pacote de Creative Lumi Paper",
      "1 Bloco de Papel Canson A4",
      "1 Fita adesiva Kraft",
    ],
  },
  "4ano": {
    title: "4º Ano Fundamental",
    totalBooks: "R$ 1.649,00",
    stationeryTotal: "R$ 287,45", // Valor adicionado da imagem
    books: [
      { name: "Coleção SIE - 4º Ano - 1º Semestre", price: "R$ 410,00" },
      { name: "Coleção SIE - 4º Ano - 2º Semestre", price: "R$ 410,00" },
      { name: "Língua Inglesa 4º Ano", price: "R$ 147,00" },
      { name: "Arte 4º Ano", price: "R$ 94,00" },
      { name: "Escreva Corretamente Vol D", price: "R$ 88,00" },
      { name: "O Quebra Cabeça dos Sentimentos + Cards", price: "R$ 49,00" },
      { name: "Coleção Let's Find Out 4 (Inglês)", price: "R$ 598,00" },
    ],
    stationery: [
      "3 Cadernos brochura grande 100 fls (azul/verde/verm)",
      "1 Caderno de cartografia grande 50 fls",
      "1 Caneta marca texto amarela",
      "1 Pincel (prancha) nº 10",
      "1 Caixa de tinta guache 06 cores",
      "1 Régua 30 cm",
      "2 Lápis pretos nº 02",
      "1 Caixa de lápis de cor 12 cores",
      "1 Caixa de canetinha hidrocor 12 cores",
      "Canetas: 2 azuis, 1 preta, 1 vermelha, 1 verde",
      "1 Apontador com depósito",
      "1 Borracha branca macia",
      "1 Tesoura sem ponta",
      "2 Tubos de cola bastão 40gr",
      "1 Flauta doce Germânica Yamaha (C)",
      "1 Pacote de Creative Lumi Paper",
      "1 Bloco de Papel Canson A4",
      "1 Fita adesiva Kraft",
      "1 Corretivo em fita",
    ],
  },
  "5ano": {
    title: "5º Ano Fundamental",
    totalBooks: "R$ 1.130,00",
    stationeryTotal: "R$ 243,55", // Valor adicionado da imagem
    books: [
      { name: "Coleção SIE - 5º Ano - 1º Semestre", price: "R$ 313,00" },
      { name: "Coleção SIE - 5º Ano - 2º Semestre", price: "R$ 313,00" },
      { name: "Língua Inglesa 5º Ano", price: "R$ 147,00" },
      { name: "Ensino Religioso 5º Ano", price: "R$ 126,00" },
      { name: "Arte 5º Ano", price: "R$ 94,00" },
      { name: "Escreva Corretamente Vol E", price: "R$ 88,00" },
      { name: "Sentimentos trazem o tom + Cards", price: "R$ 49,00" },
    ],
    stationery: [
      "1 Régua 30 cm",
      "2 Lápis pretos nº 02",
      "1 Caixa de lápis de cor 12 cores",
      "Canetas: azul, preta, vermelha, verde",
      "1 Apontador com depósito",
      "1 Caneta marca texto amarela",
      "1 Corretivo em fita",
      "1 Borracha branca macia",
      "1 Tesoura sem ponta",
      "1 Transferidor",
      "2 Tubos de cola bastão 40gr",
      "1 Caixa de tinta guache 06 cores",
      "3 Cadernos espiral grande 100 fls",
      "1 Caderno de cartografia grande 50 fls",
      "1 Pincel nº 6 chato",
      "1 Caixa de canetinha hidrocor 12 cores",
      "1 Pacote de Creative Lumi Paper",
      "1 Bloco de Papel Canson A4",
      "1 Fita adesiva Kraft",
    ],
  },

  // --- FUNDAMENTAL II ---
  "6ano": {
    title: "6º Ano Fundamental II",
    totalBooks: "R$ 1.730,00",
    // Sem valor fixo de papelaria no PDF
    books: [
      { name: "Coleção SIE - 6º Ano - 1º Semestre", price: "R$ 519,00" },
      { name: "Coleção SIE - 6º Ano - 2º Semestre", price: "R$ 519,00" },
      { name: "SIE Inglês 6º Ano", price: "R$ 188,00" },
      { name: "SIE Ensino Religioso 6º Ano", price: "R$ 169,00" },
      { name: "SIE Arte 6º Ano", price: "R$ 138,00" },
      { name: "Escreva Corretamente", price: "R$ 83,00" },
      { name: "Paradidáticos (4 bimestres)", price: "R$ 114,00" },
    ],
    stationery: [
      "1 Régua 30cm",
      "3 Lápis pretos",
      "Canetas: 1 vermelha, 2 azuis, 2 pretas",
      "1 Corretivo em fita",
      "1 Marca texto",
      "1 Apontador, 2 Borrachas",
      "1 Tesoura sem ponta",
      "2 Colas bastão",
      "1 Cx Lápis de cor",
      "2 Cadernos universitários 98fls (Port/Mat)",
      "2 Cadernos universitários 10 matérias",
      "1 Caderno cartografia",
      "1 Estojo com zíper",
      "1 Kit desenho (transferidor, compasso)",
      "1 Pasta catálogo",
    ],
  },
  "7ano": {
    title: "7º Ano Fundamental II",
    totalBooks: "R$ 1.697,00",
    books: [
      { name: "Coleção SIE - 7º Ano - 1º Semestre", price: "R$ 519,00" },
      { name: "Coleção SIE - 7º Ano - 2º Semestre", price: "R$ 519,00" },
      { name: "SIE Inglês 7º Ano", price: "R$ 188,00" },
      { name: "SIE Ensino Religioso 7º Ano", price: "R$ 169,00" },
      { name: "SIE Arte 7º Ano", price: "R$ 138,00" },
      { name: "Projeto Ler é uma Descoberta 7", price: "R$ 40,00" },
      { name: "Paradidáticos (4 bimestres)", price: "R$ 124,00" },
    ],
    stationery: [
      "1 Régua 30cm",
      "3 Lápis pretos",
      "Canetas: 1 vermelha, 2 azuis, 2 pretas",
      "1 Corretivo em fita",
      "1 Marca texto",
      "1 Apontador, 2 Borrachas",
      "1 Tesoura sem ponta",
      "2 Colas bastão",
      "1 Cx Lápis de cor",
      "2 Cadernos universitários 98fls (Port/Mat)",
      "2 Cadernos universitários 10 matérias",
      "1 Caderno cartografia",
      "1 Estojo com zíper",
      "1 Kit desenho (transferidor, compasso)",
      "1 Pasta catálogo",
    ],
  },
  "8ano": {
    title: "8º Ano Fundamental II",
    totalBooks: "R$ 1.683,00",
    books: [
      { name: "Coleção SIE - 8º Ano - 1º Semestre", price: "R$ 519,00" },
      { name: "Coleção SIE - 8º Ano - 2º Semestre", price: "R$ 519,00" },
      { name: "SIE Inglês 8º Ano", price: "R$ 188,00" },
      { name: "SIE Ensino Religioso 8º Ano", price: "R$ 169,00" },
      { name: "SIE Arte 8º Ano", price: "R$ 138,00" },
      { name: "Projeto Ler é uma Descoberta 8", price: "R$ 40,00" },
      { name: "Paradidáticos (4 bimestres)", price: "R$ 110,00" },
    ],
    stationery: [
      "1 Régua 30cm",
      "3 Lápis pretos",
      "Canetas: 1 vermelha, 2 azuis, 2 pretas",
      "1 Corretivo em fita",
      "1 Marca texto",
      "1 Apontador, 2 Borrachas",
      "1 Tesoura sem ponta",
      "2 Colas bastão",
      "1 Cx Lápis de cor",
      "2 Cadernos universitários 98fls (Port/Mat)",
      "2 Cadernos universitários 10 matérias",
      "1 Caderno cartografia",
      "1 Estojo com zíper",
      "1 Kit desenho (transferidor, compasso)",
      "1 Pasta catálogo",
    ],
  },
  "9ano": {
    title: "9º Ano Fundamental II",
    totalBooks: "R$ 1.756,00",
    books: [
      { name: "Coleção SIE - 9º Ano - 1º Semestre", price: "R$ 519,00" },
      { name: "Coleção SIE - 9º Ano - 2º Semestre", price: "R$ 519,00" },
      { name: "SIE Inglês 9º Ano", price: "R$ 188,00" },
      { name: "SIE Ensino Religioso 9º Ano", price: "R$ 169,00" },
      { name: "SIE Arte 9º Ano", price: "R$ 138,00" },
      { name: "Projeto Ler é uma Descoberta 9", price: "R$ 40,00" },
      { name: "Paradidáticos (4 bimestres)", price: "R$ 183,00" },
    ],
    stationery: [
      "1 Régua 30cm",
      "3 Lápis pretos",
      "Canetas: 1 vermelha, 2 azuis, 2 pretas",
      "1 Corretivo em fita",
      "1 Marca texto",
      "1 Apontador, 2 Borrachas",
      "1 Tesoura sem ponta",
      "2 Colas bastão",
      "1 Cx Lápis de cor",
      "2 Cadernos universitários 98fls (Port/Mat)",
      "2 Cadernos universitários 10 matérias",
      "1 Caderno cartografia",
      "1 Estojo com zíper",
      "1 Kit desenho (transferidor, compasso)",
      "1 Pasta catálogo",
    ],
  },

  // --- ENSINO MÉDIO ---
  "1em": {
    title: "1ª Série Ensino Médio",
    totalBooks: "R$ 1.321,00",
    // Sem valor fixo de papelaria no PDF
    books: [
      { name: "Coleção SIE EM - 1º Ano - 1º Sem (7 vol)", price: "R$ 598,00" },
      { name: "Coleção SIE EM - 1º Ano - 2º Sem (7 vol)", price: "R$ 598,00" },
      { name: "SIE EM Projeto de Vida", price: "R$ 53,00" },
      { name: "1º Bim: Universo Paralelo", price: "R$ 35,00" },
      { name: "2º Bim: Nos bastidores da mídia", price: "R$ 37,00" },
    ],
    stationery: [
      "1 Régua 20cm",
      "3 Lápis pretos",
      "4 Canetas (2 azuis, 2 pretas)",
      "1 Corretivo em fita",
      "1 Apontador com depósito",
      "2 Borrachas",
      "1 Tesoura sem ponta",
      "1 Cola bastão",
      "1 Cx Lápis de cor",
      "1 Pasta Catálogo",
      "2 Cadernos univ. 10 matérias ou fichário",
    ],
  },
  "2em": {
    title: "2ª Série Ensino Médio",
    totalBooks: "R$ 1.397,00",
    // Sem valor fixo de papelaria no PDF
    books: [
      { name: "Coleção SIE EM - 2º Ano - 1º Sem (7 vol)", price: "R$ 598,00" },
      { name: "Coleção SIE EM - 2º Ano - 2º Sem (7 vol)", price: "R$ 598,00" },
      { name: "SIE EM Projeto de Vida - 2º Ano", price: "R$ 53,00" },
      { name: "SIE EM Filosofia - 2º Ano", price: "R$ 53,00" },
      { name: "1º Bim: A Descoberta", price: "R$ 38,00" },
      { name: "2º Bim: Risco Calculado", price: "R$ 57,00" },
    ],
    stationery: [
      "1 Régua 20cm",
      "3 Lápis pretos",
      "4 Canetas (2 azuis, 2 pretas)",
      "1 Corretivo em fita",
      "1 Apontador com depósito",
      "2 Borrachas",
      "1 Tesoura sem ponta",
      "1 Cola bastão",
      "1 Cx Lápis de cor",
      "1 Pasta Catálogo",
      "2 Cadernos univ. 10 matérias ou fichário",
    ],
  },
  "3em": {
    title: "3ª Série Ensino Médio",
    totalBooks: "R$ 1.642,00",
    // Sem valor fixo de papelaria no PDF
    books: [
      { name: "Coleção SIE EM - 3º Ano - 1º Sem", price: "R$ 598,00" },
      { name: "Coleção SIE EM - 3º Ano - 2º Sem", price: "R$ 598,00" },
      { name: "SIE EM Projeto de Vida - 3º Ano", price: "R$ 64,00" },
      { name: "SIE EM Sociologia - 3º Ano", price: "R$ 53,00" },
      { name: "Itinerário (Humanas ou Natureza) 1º Sem", price: "R$ 115,00" },
      { name: "Itinerário (Humanas ou Natureza) 2º Sem", price: "R$ 115,00" },
      { name: "1º Bim: Sonhe alto", price: "R$ 52,00" },
      { name: "2º Bim: A história da vida", price: "R$ 47,00" },
    ],
    stationery: [
      "1 Régua 20cm",
      "3 Lápis pretos",
      "4 Canetas (2 azuis, 2 pretas)",
      "1 Corretivo em fita",
      "1 Apontador com depósito",
      "2 Borrachas",
      "1 Tesoura sem ponta",
      "1 Cola bastão",
      "1 Cx Lápis de cor",
      "1 Pasta Catálogo",
      "2 Cadernos univ. 10 matérias ou fichário",
    ],
  },
};

// Referência aos elementos
const contentDiv = document.getElementById("dynamic-content");
const btns = document.querySelectorAll(".nav-btn");

// Função para renderizar o conteúdo
function renderContent(gradeKey) {
  const data = materialData[gradeKey];

  if (!data) {
    contentDiv.innerHTML = `<div style="text-align:center; padding:3rem; color:#888;">
            <h2><i class="fa-solid fa-file-pdf"></i></h2>
            <p>Lista desta turma ainda está sendo digitalizada.<br>Consulte o PDF original para mais detalhes.</p>
        </div>`;
    return;
  }

  // HTML da seção de Livros
  let booksHtml = data.books
    .map(
      (book) => `
        <tr>
            <td>${book.name}</td>
            <td class="price-col">${book.price}</td>
        </tr>
    `,
    )
    .join("");

  // HTML da seção de Papelaria (Checklist)
  let stationeryHtml = data.stationery
    .map(
      (item) => `
        <label class="check-item">
            <input type="checkbox" onclick="toggleCheck(this)">
            <span>${item}</span>
        </label>
    `,
    )
    .join("");

  // Se houver preço da papelaria, mostra o badge
  const stationeryPriceHtml = data.stationeryTotal
    ? `<span class="grade-total" style="margin-left: 15px; background-color: #e8f5e9; color: #2e7d32; font-size: 1rem;"><i class="fa-solid fa-tag"></i> Valor Kit: ${data.stationeryTotal}</span>`
    : "";

  // Montagem final
  contentDiv.innerHTML = `
        <div class="grade-header">
            <h2 class="grade-title">${data.title}</h2>
            <span class="grade-total"><i class="fa-solid fa-calculator"></i> Total Livros/Apostilas: ${data.totalBooks}</span>
        </div>

        <h3><i class="fa-solid fa-book"></i> Livros e Apostilas</h3>
        <table class="books-table">
            <thead>
                <tr>
                    <th>Descrição do Material</th>
                    <th style="text-align:right">Valor Estimado</th>
                </tr>
            </thead>
            <tbody>
                ${booksHtml}
            </tbody>
        </table>

        <h3><i class="fa-solid fa-pencil"></i> Material de Papelaria (Checklist) ${stationeryPriceHtml}</h3>
        <p style="margin-bottom:1rem; color:#666; font-size:0.9rem;">Clique nos itens para marcar o que já possui.</p>
        <div class="stationery-list">
            ${stationeryHtml}
        </div>
    `;

  // Reinicia animação de fade
  contentDiv.classList.remove("fade-in");
  void contentDiv.offsetWidth; // Trigger reflow
  contentDiv.classList.add("fade-in");
}

// Lógica de "Check" visual
window.toggleCheck = function (checkbox) {
  const parent = checkbox.closest(".check-item");
  if (checkbox.checked) {
    parent.classList.add("checked");
  } else {
    parent.classList.remove("checked");
  }
};

// Event Listeners para navegação
btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    // Remove active de todos
    btns.forEach((b) => b.classList.remove("active"));
    // Adiciona ao clicado
    btn.classList.add("active");

    const target = btn.getAttribute("data-target");
    renderContent(target);
  });
});

// Inicialização
document.addEventListener("DOMContentLoaded", () => {
  AOS.init();
  // Renderiza o Maternal por padrão
  renderContent("maternal");
});
