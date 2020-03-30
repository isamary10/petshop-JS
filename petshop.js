let divPet = document.getElementById('pets');


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

function adicionarPet(tipo, nome, idacondensadode, raca, porte, sexo, vacinado, tutor){
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

        let divConteudoPet = document.createElement('div'); // <div></div>
        divConteudoPet.setAttribute('class','bixinho'); // criando class

        let pSeparador = document.createElement('p');
        pSeparador.textContent = "------------------------------";
        
        let pNomeAnimal = document.createElement('p');
        pNomeAnimal.textContent = "Nome do Animal: " + animal.nome;
        
        let pTipoAnimal = document.createElement('p');
        pTipoAnimal.textContent = "Tipo de Animal: " + animal.tipo;
        
        divConteudoPet.appendChild(pSeparador);
        divConteudoPet.appendChild(pNomeAnimal);
        divConteudoPet.appendChild(pTipoAnimal);

        divPet.appendChild(divConteudoPet);

        //console.log("Sexo do Animal: " + animal.sexo);
        //console.log("Idade do Animal: " + animal.idade);
        //console.log("Raça do Animal: " + animal.raca);
        //console.log("Porte do Animal: " + animal.porte);
        //console.log("Animal Vacinado: " + animal.vacinado);
        //console.log("Nome do Tutor: " + animal.tutor.nome);
        //console.log("Telefone do Tutor: " + animal.tutor.telefone);
    }
}

function buscarPet(nomePet) {
    for(i=0; i <listaDeAnimais.length; i++) {
        let animal = listaDeAnimais[i];

        if(animal.nome == nomePet){
            return console.log("Sim, existe esse animal cadastrado no sistema.")
        }
    }
    console.log("Não existe animal cadastrado.")
}