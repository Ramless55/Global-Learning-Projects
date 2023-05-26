class VideoJuegos{
    constructor(genero, multijugador, plataforma){
        this.genero = genero;
        this.multijugador = multijugador;
        this.plataforma = plataforma;
    }
}

const apexLegends = new VideoJuegos('Shooter', true, 'PC/PS4/XBOX');
const marioBros = new VideoJuegos('Plataform', false, 'Nintendo');

array = [marioBros, apexLegends];

console.table(array);
console.table(marioBros.genero)

const marioBros2 = {
    gender: 'Platform',
    multiPlayer: false,
    platform: 'Nintendo'
};

marioBros2.multiPlayer = true;
marioBros2.year = 2003;

console.table(marioBros2);