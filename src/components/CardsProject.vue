<script>
import { getImageUrl } from '../utils/imageHelper'

export default {
    name: "CardsProject",
    data() {
        return {
            dataCards_project: [
                { 
                    id: 1,
                    path_img: getImageUrl('imagemDetailsDisparador_emails.png'),
                    path_img_logoName: getImageUrl('Disparador_Emails.png'),
                    title: 'Disparador de emails',
                    text: 'Sistema de disparo de emails em massa apartir de um arquivo CSV.',
                    data_Icon: [
                        { 
                            name_icon: getImageUrl('html.png'),
                            name_tech: 'HTML5',
                            color: '#F05032'
                        },
                        { 
                            name_icon: getImageUrl('css.png'),
                            name_tech: 'CSS3',
                            color: '#1098fa'
                        },
                        { 
                            name_icon: getImageUrl('javascript.png'),
                            name_tech: 'JAVASCRIPT',
                            color: '#F7DF1E'
                        },
                        { 
                            name_icon: getImageUrl('icon_electron.png'),
                            name_tech: 'ELECTRON.JS',
                            color: '#F7DF1E'
                        }
                    ],
                },
                { 
                    id: 2,
                    path_img: getImageUrl('imagemDetailsPersonal_website.png'),
                    path_img_logoName: getImageUrl('logoDetalispage.png'),
                    title: 'Personal WebSite',
                    text: 'Este projeto é um portfólio pessoal interativo desenvolvido com Vue.js. ',
                    data_Icon: [
                        { 
                            name_icon: getImageUrl('vue.png'),
                            name_tech: 'VUE',
                            color: '#42B883'
                        },
                        { 
                            name_icon: getImageUrl('typescript.png'),
                            name_tech: 'TYPESCRIPT',
                            color: '#C53635'
                        },
                        { 
                            name_icon: getImageUrl('icon_vite.png'),
                            name_tech: 'VITE',
                            color: '#C53635'
                        }
                    ],
                },
                { 
                    id: 3,
                    path_img: getImageUrl('imagemDetailsEasybank.png'),
                    path_img_logoName: getImageUrl('logoDetailspageEasybank.png'),
                    title: 'Easybank',
                    text: 'Este é um projeto de landing page com quatro seções para promover o banco Easybank.',
                    data_Icon: [
                        { 
                            name_icon: getImageUrl('vue.png'),
                            name_tech: 'VUE',
                            color: '#42B883'
                        },
                        { 
                            name_icon: getImageUrl('icon_vite.png'),
                            name_tech: 'VITE',
                            color: '#C53635'
                        }
                    ],
                },
                { 
                    id: 4,
                    path_img: getImageUrl('imagemDetailsDiscoverBank.png'),
                    path_img_logoName: getImageUrl('logoDetailspageDiscoverLand.png'),
                    title: 'Discover land',
                    text: 'Este projeto exibe fotos de países e informações detalhadas em um modal, com um campo de busca.',
                    data_Icon: [
                        { 
                            name_icon: getImageUrl('vue.png'),
                            name_tech: 'VUE',
                            color: '#42B883'
                        },
                        { 
                            name_icon: getImageUrl('icon_vite.png'),
                            name_tech: 'VITE',
                            color: '#C53635'
                        }
                    ],
                },
                { 
                    id: 5,
                    path_img: getImageUrl('imagemDetailsAgendamentoFmrb.png'),
                    path_img_logoName: getImageUrl('logoDetailsFMRB.png'),
                    title: 'Agedamento FMRB',
                    text: 'Projeto governamental para desenvolvimento de um sistema de agendamento de visitas para à (FMRB).',
                    data_Icon: [
                        { 
                            name_icon: getImageUrl('html.png'),
                            name_tech: 'HTML5',
                            color: '#F05032'
                        },
                        { 
                            name_icon: getImageUrl('css.png'),
                            name_tech: 'CSS3',
                            color: '#1098fa'
                        },
                        { 
                            name_icon: getImageUrl('javascript.png'),
                            name_tech: 'JAVASCRIPT',
                            color: '#F7DF1E'
                        }
                    ],
                },
                { 
                    id: 6,
                    path_img: getImageUrl('imagemDetailsSeloQuilomnos.png'),
                    path_img_logoName: getImageUrl('logoDetailsSelo.png'),
                    title: 'Selo Quilombos',
                    text: 'Projeto governamental para desenvolvimento de um Portal de notícias com dois formularios para o uso do selo',
                    data_Icon: [
                        { 
                            name_icon: getImageUrl('html.png'),
                            name_tech: 'HTML5',
                            color: '#F05032'
                        },
                        { 
                            name_icon: getImageUrl('css.png'),
                            name_tech: 'CSS3',
                            color: '#1098fa'
                        },
                        { 
                            name_icon: getImageUrl('javascript.png'),
                            name_tech: 'JAVASCRIPT',
                            color: '#F7DF1E'
                        },
                        { 
                            name_icon: getImageUrl('wordpress.png'),
                            name_tech: 'WORDPRESS',
                            color: '#1098fa'
                        }
                    ],
                }
            ]
        }
    },
    methods: {
        router_details(itemDataProject, title) {
            this.$router.push({ 
                name: 'Details',
                params: { title },
                query: { 
                    img_card: itemDataProject.path_img,
                    img_logoName: itemDataProject.path_img_logoName,
                    title: itemDataProject.title, 
                    description: itemDataProject.text
                }
            });
        }
    }
}
</script>

<template>
    <div v-for="itemDataProject in dataCards_project" :key="itemDataProject.id" class="cardProject">
        <div class="contaier_imgProject">
            <img :src="itemDataProject.path_img" alt="">
        </div>
        <div class="textContent_cardProject">
            <h1>{{ itemDataProject.title }}</h1>

            <p>{{ itemDataProject.text }}</p>

            <ul>
                <li v-for="itemData_icon in itemDataProject.data_Icon" :key="itemData_icon">
                    <div class="box_icon" style="box-s">
                        <img :src="itemData_icon.name_icon" alt="">
                    </div>
                    <p>{{ itemData_icon.name_tech }}</p>
                </li>

                <p class="see_more_details" @click="router_details(itemDataProject, itemDataProject.title)">
                    <i>Ver mais detalhes</i>
                    <span class="line_details"></span>
                </p>
            </ul>
        </div>
    </div>

</template>

<style scoped>
.cardProject {
    /* border: 3px solid gainsboro; */
    width: 45%;
    min-width: 30rem;
}
.contaier_imgProject {
    /* border: 3px solid rgb(34, 255, 0); */
    width: 100%;
    height: 20rem;
    display: flex;
    justify-content: center;
}
.contaier_imgProject > img {
    object-fit: contain;
    width: 90%;
    height: 90%;
}

.textContent_cardProject {
    /* border: 2px solid red; */
    padding: 15px 90px 0 90px;
    color: var(--color--text);
    display: flex;
    flex-direction: column;
    gap: 10px;
    text-align: center;
}
h1 {
    font-weight: 300;
}
p {
    font-weight: 200;
    /* border: 1px solid red; */
}
ul {
    list-style: none;
    display: flex;
    justify-content: center;
    gap: 40px;
    flex-wrap: wrap;
}
li {
    display: flex;
    flex-direction: column;
    align-items: center;
}
ion-icon {
    font-size: 2.5vw;
    /* color: #42B883; */
    transition: all 0.3s;
    cursor: pointer;
}
ion-icon:hover {
    scale: 1.2;
}
.box_icon {
    width: 50px;
    height: 50px;
    /* border: 1px solid red; */
}
.box_icon > img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    /* border: 2px solid red; */
    transition: all 0.3s;
}
.box_icon > img:hover {
    scale: 1.2;
}

.see_more_details {
    width: 100%;
    display: flex;
    flex-direction: column;
    /* justify-content: center; */
    align-items: center;
}

.line_details {
    display: block;
    width: 50%;
    height: 0.5px;
    background: var(--color--text);
}
@media(max-width: 1093px) {
    .cardProject {
        width: 70%;
    }
}

@media(max-width: 600px) {

    .cardProject {
        min-width: 100%;
    }
    .textContent_cardProject {
        padding: 0;
    }
}

@media(max-width: 400px) {
    .contaier_imgProject {
        height: 10rem;
    }
}

@media(max-width: 320px) {
    h1 {
        font-size: 7vw;
    }
    p {
        font-size: 0.5rem;
    }
    .box_icon {
        width: 30px;
        height: 30px;
    /* border: 1px solid red; */
    }
    
}
</style>