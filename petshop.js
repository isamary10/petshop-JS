let animal =  {
    tipo: "Cachorro",
    nome: "Dino",
    idade: 2,
    raca: "Golden",
    porte: "Grande",
    sexo: "M",
    vacinado: true,
    tutor: {
        nome: "Isa",
        telefone: "(11) 1234-5678"
    }
};

let listaDeAnimais = [
{
    tipo: "Cachorro",
    nome: "Dino",
    idade: 2,
    raca: "Golden",
    porte: "Grande",
    sexo: "M",
    vacinado: true,
    tutor: {
        nome: "Isa",
        telefone: "(11) 1234-5678"
    }
},
{
    tipo:"Gato",
    nome:"Flor",
    idade:3,
    raca:undefined,
    porte:"Pequeno",
    sexo: "F",
    vainado: true,
    tutor:{
       nome: "Isa",
       telefone: "(11) 1234-5678" 
    }
}];

function adicionarPet(tipo, nome, idade, raca, porte, sexo, vacinado, tutor){
    let novoPet = {
            tipo:tipo,
            nome:nome,
            idade:idade,
            raca:raca,
            porte:porte,
            sexo:sexo,
            vacinado:vacinado,
            tutor:{
                nome:tutor,
                telefone:undefined
            }
        }
    listaDeAnimais.push(novoPet);
    console.log("Pet cadastrado com sucesso!");
}

function visualizarPets(){
    for(let i = 0; i < listaDeAnimais.length; i++){
        let animal = listaDeAnimais[i];
        console.log("------------------------------");
        console.log("Nome do Animal: " + animal.nome);
        console.log("Tipo de Animal: " + animal.tipo);
        console.log("Sexo do Animal: " + animal.sexo);
        console.log("Idade do Animal: " + animal.idade);
        console.log("Raça do Animal: " + animal.raca);
        console.log("Porte do Animal: " + animal.porte);
        console.log("Animal Vacinado: " + animal.vacinado);
        console.log("Nome do Tutor: " + animal.tutor.nome);
        console.log("Telefone do Tutor: " + animal.tutor.telefone);
    }
}
