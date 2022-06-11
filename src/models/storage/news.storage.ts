import { Injectable } from '@angular/core';
import { NewsProxy } from '../proxies/news.proxy';

@Injectable({
  providedIn: 'root',
})

export class NewsStorage {
  public news: NewsProxy[] = [
    {
      imageSrc: 'https://midias.correiobraziliense.com.br/_midias/jpg/2022/05/14/675x450/1_alexandre_de_moraes___stf-7976224.jpg?20220514225013?20220514225013',
      title: 'Ataque ao STF leva Moraes a incluir partido de extrema esquerda no inquérito das fake news',
      color: '',
      description: 'O ministro Alexandre de Moraes determinou nesta quinta-feira (2) à Polícia Federal a investigação de ataques do Partido da Causa Operária (PCO), de extrema esquerda, ao Supremo Tribunal Federal e a ministros da Corte.\n' +
        '\n' +
        'A apuração será realizada dentro do chamado inquérito das fake news. Moraes determinou que, em cinco dias, a PF tome o depoimento do presidente do PCO, Rui Costa Pimenta. Ele terá de explicar as postagens. O ministro determinou ainda o bloqueio dos perfis dos partido em redes sociais.\n' +
        '\n' +
        'O inquérito das fake news é o mesmo em que o presidente Jair Bolsonaro é investigado em razão da divulgação de informações falsas sobre urnas eletrônicas e ataques sem provas ao processo eleitoral. Também foi investigado nesse inquérito o deputado de extrema direita Daniel Silveira (PTB-RJ), por ataques e ofensas a ministros do STF. Ele agora responde a ação penal.\n' +
        '\n' +
        'Segundo o ministro, no caso do PCO, é preciso analisar se a estrutura partidária abastecida com dinheiro público está sendo utilizada para proferir os ataques contra a democracia.',
      realRating: +(Math.random() * 999).toFixed(0),
      fakeRating: +(Math.random() * 999).toFixed(0),
      comments: [{
        name: 'Matheus Jacob',
        description: 'Se ta na internet é verdade.',
        rating: true,
        profileImage: 'https://i.pinimg.com/736x/5a/72/e1/5a72e1f05f9e2e1b76a8438a7490dc3b.jpg',
      }],
    },
    {
      imageSrc: 'https://conteudo.imguol.com.br/c/entretenimento/40/2022/06/09/porsche-718-cayman-t-1-1654804614468_v2_1170x540.jpg.webp',
      title: 'Porsche 718 Cayman T evolui receita da diversão que está com dias contados.',
      color: '',
      realRating: +(Math.random() * 999).toFixed(0),
      fakeRating: +(Math.random() * 999).toFixed(0),
    },
    {
      color: '',
      title: 'Bolsonaro: Conversei \'por alto\' com Biden sobre sistema eleitoral do Brasil.',
      imageSrc: 'https://conteudo.imguol.com.br/c/noticias/64/2022/06/10/apos-encontro-com-biden-bolsonaro-disse-que-ficou-maravilhado-1654899213534_v2_900x506.jpg.webp',
      realRating: +(Math.random() * 999).toFixed(0),
      fakeRating: +(Math.random() * 999).toFixed(0),
    },
    {
      color: '',
      title: 'Carro voador japonês ganha certificação e deve começar a operar em 2025.',
      imageSrc: 'https://conteudo.imguol.com.br/c/entretenimento/f9/2022/05/04/skydrive-sd-05-1651668082922_v2_900x506.jpg.webp',
      realRating: +(Math.random() * 999).toFixed(0),
      fakeRating: +(Math.random() * 999).toFixed(0),
    },
  ];

  public getNews() {
    return this.news;
  }
}
