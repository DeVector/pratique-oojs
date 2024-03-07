function Veiculo(nome, modelo, anoFabricacao, anoModelo) { 
    this.nome = nome;
    this.modelo = modelo;
    this.anoFabricacao = anoFabricacao;
    this.anoModelo = anoModelo;

 }

 function Motocicleta(nome, modelo, anoFabricacao, anoModelo, tipoMarcha, cilindrada){
    Veiculo.call(this, nome, modelo, anoFabricacao, anoModelo);

    this.tipoMarcha = tipoMarcha;
    this.cilindrada = cilindrada;

    this.ehRapida = function() {
        if (this.cilindrada >= 300){
            console.log("É rapida");
        } else {
            console.log("É economica");
        }
    }
 }

 function Carro(nome, modelo, anoFabricacao, anoModelo, tipoMarcha, tipoCombustivel, cilindrada){
    Veiculo.call(this, nome, modelo, anoFabricacao, anoModelo);

    this.tipoMarcha = tipoMarcha;
    this.tipoCombustivel = tipoCombustivel;
    this.cilindrada = cilindrada;

    this.ehRapida = function() {
        if (this.cilindrada >= 2000){
            console.log("É rapido");
        } else {
            console.log("É economico");
        }
    }
 }

 const moto1 = new Motocicleta('Honda', 'CG', 2023, 2024, 'Manual', 150);
 const moto2 = new Motocicleta('Honda', 'CB', 2016, 2017, 'Manual', 300);
 const carro1 = new Carro('Toyota', 'Etios', 2018, 2018, 'Automatico', 'Flex', 1500);
const carro2 = new Carro('Mitsubishi', 'Pajero', 2023, 2024, 'Manual', 'Diesel', 3000);

console.log(moto1);
console.log(moto2);
console.log(carro1);
console.log(carro2);
