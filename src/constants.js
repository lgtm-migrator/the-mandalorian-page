export const main = {
    "data": [
        {
            "title": "Premissa",
            "text": `O Mandaloriano ocorre após a queda do Império, conforme retratado em O Retorno de Jedi, e antes do surgimento da Primeira Ordem, retratada em O Despertar da Força, que conta a história de um caçador de recompensas mandaloriano independente "nos confins da galáxia, longe da autoridade da Nova República, sempre buscando formas de fazer melhorias em sua armadura, até que em uma missão ele acaba encontrando um ser misterioso que precisa de sua ajuda, chamado Grogu, também conhecido como "A Criança", e opta por correr para proteger o bebê. Enquanto em sua busca para aprender mais sobre as origens de Grogu, eles são perseguidos por Moff Gideon.`,
            "href": "title-premise"
        },
        {
            "title": `Elenco`,
            "text": [
                `Em novembro de 2018, Pedro Pascal, Gina Carano e Nick Nolte foram escalados para os papéis principais. Depois de se encontrar com Favreau, Pascal inicialmente pensou que seria Boba Fett, mas ele interpreta um Mandaloriano chamado Din Djarin. Em 12 de dezembro de 2018, a LucasFilm anunciou que Giancarlo Esposito, Carl Weathers, Emily Swallow, Omid Abtahi e Werner Herzog se juntaram ao elenco principal. Em 21 de março de 2019, foi revelado que Taika Waititi estava gravando uma voz para a série, especulado para ser o droide caçador de recompensas IG-88, mas acabou sendo um novo personagem chamado IG-11. Imagens mostradas na Celebração de Star Wars em abril de 2019 revelaram que Bill Burr e Mark Boone Junior estavam na série, com Burr retratando um fora da lei. Na D23 Expo em agosto, foi revelado que Ming-Na Wen apareceria na série. Julia Jones foi anunciada em setembro.`,
                `Em março de 2020, foi relatado que Rosario Dawson iria aparecer como Ahsoka Tano na segunda temporada, que seria a primeira aparição live-action do personagem na tela. Tendo aparecido anteriormente na mídia de animação de Star Wars, The Clone Wars (filme e série de televisão) e Star Wars Rebels, a voz de Ahsoka foi brevemente ouvida no filme de ação ao vivo Star Wars: The Rise of Skywalker ; ela foi dublada por Ashley Eckstein nessas aparições. Pouco depois, Michael Biehn se juntou ao elenco como um caçador de recompensas. No início de maio, foi revelado que Temuera Morrison iria repetir o papel de Boba Fett. Morrison já havia retratado o pai de Boba, Jango Fett, em Star Wars: Episódio II - Ataque dos Clones e também dublou Boba Fett em várias mídias de Star Wars. Boba Fett foi anteriormente acusado de retornar no episódio da primeira temporada "The Gunslinger". Pouco depois, foi revelado que Katee Sackhoff estava reprisando seu papel como Bo-Katan Kryze, tendo anteriormente dublado a personagem em The Clone Wars e Rebels, e Timothy Olyphant foi revelado que também apareceu na temporada, como Cobb Vanth.`
            ],
            "href": "title-cast"
        }
    ],

}

export const characters = {
    "data": [
        {
            "name": "Din Djarin",
            "url": process.env.VUE_APP_DIN_DJARIN,
        },
        {
            "name": "Grogu",
            "url": process.env.VUE_APP_GROGU,
        },
        {
            "name": "Cara Dune",
            "url": process.env.VUE_APP_CARA_DUNE,
        },
        {
            "name": "Greef Carga",
            "url": process.env.VUE_APP_GREEF_KARGA,
        },
        {
            "name": "Boba Fett",
            "url": process.env.VUE_APP_BOBA_FETT,
        },
        {
            "name": "Bo-Katan",
            "url": process.env.VUE_APP_BO_KATAN,
        },
        {
            "name": "Ashoka Tano",
            "url": process.env.VUE_APP_AHSOKA_TANO,
        },
        {
            "name": "Fennec Shand",
            "url": process.env.VUE_APP_FENNEC_SHAND,
        },
        {
            "name": "Moff Gideon",
            "url": process.env.VUE_APP_MOFF_GIDEON,
        },
    ]
}

export const socialMedias = {
    "data": [
        {
            "img": process.env.VUE_APP_GITHUB_ICON,
            "url": "https://github.com/cristianpdev",
            "alt": "Github"
        },
        {
            "img": process.env.VUE_APP_TWITTER_ICON,
            "url": "https://twitter.com/cristianpdev",
            "alt": "Twitter"
        },
        {
            "img": process.env.VUE_APP_LINKEDIN_ICON,
            "url": "https://linkedin.com/in/cristian-penteado-6ab241177",
            "alt": "Linkedin"
        },
    ]
}

export const navigation = {
    data: [
        { item: "HOME", href: "#" },
        { item: "PREMISSA", href: "#title-premise" },
        { item: "ELENCO", href: "#title-cast" },
        { item: "PERSONAGENS", href: "#title-characters" },
    ]
}

export const lightTheme = "colors-light";
export const hrLight = "hr-light";
export const preLight = "pre-title-light";
export const sourceLight = "source-light";
export const rotateIcon = "rotate";
export const iconSetTheme = process.env.VUE_APP_THEME_IMAGE;
export const mainImage = process.env.VUE_APP_MAIN_IMAGE;
export const favicon = process.env.VUE_APP_FAVICON;