// Estações e Cardápio (dados estáticos do protótipo)
const Estacoes = [
  { id: "fogo", nome: "Fogo & Brasa", desc: "Cortes premium, fogo alto e ponto perfeito", imagem: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1400&auto=format&fit=crop" },
  { id: "costela", nome: "Costela do Chef", desc: "Costela bovina low&slow que desmancha", imagem: "https://images.unsplash.com/photo-1553163147-622ab57be1c7?q=80&w=1400&auto=format&fit=crop" },
  { id: "defumados", nome: "Defumados", desc: "Brisket e fumaça de nogueira", imagem: "https://assets.epicurious.com/photos/54af436b4074bdfd06837a2d/1:1/w_1600,c_limit/51175220_smoked-brisket_1x1.jpg" },
  { id: "acompanhamentos", nome: "Acompanhamentos", desc: "Clássicos para completar", imagem: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?q=80&w=1400&auto=format&fit=crop" },
  { id: "bebidas", nome: "Bar & Bebidas", desc: "Refrescos, sucos e chopes", imagem: "https://images.unsplash.com/photo-1625865019845-7b2c89b8a8a9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmViaWRhc3xlbnwwfHwwfHx8MA%3D%3D" },
];

const Cardapio = {
  fogo: [
    { id: "fogo_picanha", nome: "Picanha na Brasa (200g)", preco: 44.9, imagem: "https://media.istockphoto.com/id/179211898/pt/foto/delicioso-churrasco.webp?a=1&b=1&s=612x612&w=0&k=20&c=GuCkvCUx25GlNa4HhrKmNdkARPJo1AVnBKxCSuy0z30=" },
    { id: "fogo_ancho", nome: "Bife Ancho Angus", preco: 52.9, imagem: "https://minervafoods.com/wp-content/uploads/2022/12/bife_acho-1.jpg" },
    { id: "fogo_chorizo", nome: "Chorizo Argentino", preco: 48.9, imagem: "https://images.unsplash.com/photo-1600891964092-4316c288032e?q=80&w=1400&auto=format&fit=crop" },
    { id: "fogo_frango", nome: "Coxinha da Asa Marinada (6un)", preco: 26.9, imagem: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1400&auto=format&fit=crop" },
    { id: "fogo_linguica", nome: "Linguiça Artesanal", preco: 21.9, imagem: "https://images.unsplash.com/photo-1703355333430-4c799ed364be?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bGluZ3VpJUMzJUE3YSUyMGFydGVzYW5hbHxlbnwwfHwwfHx8MA%3D%3D" },
    { id: "fogo_queijo", nome: "Espeto de Queijo Coalho", preco: 14.9, imagem: "https://media.istockphoto.com/id/1300395099/pt/foto/assorted-steak-skewers-on-top-of-a-board.webp?a=1&b=1&s=612x612&w=0&k=20&c=a09mrCH31QRmlbgvUjSOQnUa8m8A7sm7zboMvTlTBE0=" },
    { id: "fogo_mista", nome: "Mista da Casa (Carne e Linguiça)", preco: 39.9, imagem: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=1400&auto=format&fit=crop" },
  ],
  costela: [
    { id: "cos_bovina", nome: "Costela Bovina 12h", preco: 49.9, imagem: "https://images.unsplash.com/photo-1553163147-622ab57be1c7?q=80&w=1400&auto=format&fit=crop" },
    { id: "cos_suina", nome: "Costelinha BBQ", preco: 38.9, imagem: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1400&auto=format&fit=crop" },
    { id: "cos_sanduiche", nome: "Sanduíche de Costela Desfiada", preco: 32.9, imagem: "https://images.unsplash.com/photo-1561758033-d89a9ad46330?q=80&w=1400&auto=format&fit=crop" },
    { id: "cos_pastel", nome: "Pastel de Costela (4un)", preco: 24.9, imagem: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?q=80&w=1400&auto=format&fit=crop" },
    { id: "cos_arroz", nome: "Arroz de Costela Cremoso", preco: 29.9, imagem: "https://media.istockphoto.com/id/1659868119/pt/foto/rice-with-shredded-beef-ribs.webp?a=1&b=1&s=612x612&w=0&k=20&c=CfppUKRFbtoD67fONehZrRFHX3BHLP6RG4BZVYSLCi0=" },
    { id: "cos_croquete", nome: "Croquete de Costela", preco: 18.9, imagem: "https://images.unsplash.com/photo-1619860860774-1e2e17343432?q=80&w=1400&auto=format&fit=crop" },
  ],
  defumados: [
    { id: "tx_brisket", nome: "Smoked Brisket (150g)", preco: 44.9, imagem: "https://assets.epicurious.com/photos/54af436b4074bdfd06837a2d/1:1/w_1600,c_limit/51175220_smoked-brisket_1x1.jpg" },
    { id: "tx_pulled", nome: "Sanduíche Pulled Pork", preco: 34.9, imagem: "https://plus.unsplash.com/premium_photo-1740013836898-d550e5a5df89?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fHNhbmR1aWNoZSUyMHBvcmt8ZW58MHx8MHx8fDA%3D" },
    { id: "tx_turkey", nome: "Coxa de Peru Defumada", preco: 28.9, imagem: "https://images.unsplash.com/photo-1627799370307-9b2a689bb94f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fHBlcnUlMjBkZWZ1bWFkb3xlbnwwfHwwfHx8MA%3D%3D" },
    { id: "tx_macncheese", nome: "Mac 'n' Cheese", preco: 16.9, imagem: "https://images.unsplash.com/photo-1543339531-242d0bc29010?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1hYyUyMG4lMjBjaGVlc2V8ZW58MHx8MHx8fDA%3D" },
    { id: "tx_milho", nome: "Milho Assado na Manteiga", preco: 12.9, imagem: "https://images.unsplash.com/photo-1551754655-cd27e38d2076?q=80&w=1400&auto=format&fit=crop" },
    { id: "tx_bbq", nome: "Molho BBQ da Casa (Pote)", preco: 5.9, imagem: "https://images.unsplash.com/photo-1605494708467-59cc8ebbe337?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bW9saG8lMjBiYXJiZWN1ZXxlbnwwfHwwfHx8MA%3D%3D" },
  ],
  acompanhamentos: [
    { id: "aco_batata", nome: "Batata Rústica", preco: 14.9, imagem: "https://images.unsplash.com/photo-1552845683-cfefc701e423?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Njl8fGJhdGF0YSUyMHJ1c3RpY2F8ZW58MHx8MHx8fDA%3D" },
    { id: "aco_pao", nome: "Pão de Alho (2un)", preco: 12.9, imagem: "https://plus.unsplash.com/premium_photo-1711752902734-a36167479983?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cCVDMyVBM28lMjBkZSUyMGFsaG98ZW58MHx8MHx8fDA%3D" },
    { id: "aco_vinagrete", nome: "Vinagrete Fresco", preco: 7.9, imagem: "https://plus.unsplash.com/premium_photo-1671403964050-f7756da6c60b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fHNhbGFkYXxlbnwwfHwwfHx8MA%3D%3D" },
    { id: "aco_arroz", nome: "Arroz Carreteiro", preco: 18.9, imagem: "https://images.unsplash.com/photo-1715854501867-5533189a5e71?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fGFycm96JTIwdGVtcGVyYWRvfGVufDB8fDB8fHww" },
    { id: "aco_maionese", nome: "Salada de Maionese", preco: 14.9, imagem: "https://images.unsplash.com/photo-1609355109210-82d65e943fcc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8c2FsYWRhJTIwbWFpb25lc2V8ZW58MHx8MHx8fDA%3D" },
    { id: "aco_legumes", nome: "Legumes Grelhados", preco: 16.9, imagem: "https://images.unsplash.com/photo-1592417817098-8fd3d9eb14a5?q=80&w=1400&auto=format&fit=crop" },
  ],
  bebidas: [
    { id: "bb_chope", nome: "Chope Pilsen 300ml", preco: 12.9, imagem: "https://images.unsplash.com/photo-1608270586620-248524c67de9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2hvcHB8ZW58MHx8MHx8fDA%3D" },
    { id: "bb_ipa", nome: "Chope IPA 300ml", preco: 15.9, imagem: "https://images.unsplash.com/photo-1608270586620-248524c67de9?q=80&w=1400&auto=format&fit=crop" },
    { id: "bb_refri", nome: "Refrigerante Lata", preco: 7.5, imagem: "https://images.unsplash.com/photo-1625740822008-e45abf4e01d5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHJlZnJpZ2VyYW50ZXxlbnwwfHwwfHx8MA%3D%3D" },
    { id: "bb_suco", nome: "Suco Natural", preco: 9.5, imagem: "https://plus.unsplash.com/premium_photo-1676642588287-ad44c524d3b6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8c3VjbyUyMG5hdHVyYWx8ZW58MHx8MHx8fDA%3D" },
    { id: "bb_agua", nome: "Água Mineral", preco: 5.0, imagem: "https://images.unsplash.com/photo-1595994195534-d5219f02f99f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YWd1YSUyMG1pbmVyYWx8ZW58MHx8MHx8fDA%3D" },
    { id: "bb_caipi", nome: "Caipirinha de Limão", preco: 22.9, imagem: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?q=80&w=1400&auto=format&fit=crop" },
  ],
};
