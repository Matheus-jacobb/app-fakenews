import { Component } from '@angular/core';
import { newsProxy } from 'src/models/proxies/news.proxy';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor() {}
  
  public news: newsProxy[] = [
    {
    imageSrc: 'https://tm.ibxk.com.br/2022/03/20/20160457106021.jpg?ims=1120x420',
    description: 'aaaaaaaaa',
    color: ''
  },
  {
    imageSrc: 'data:image/jpeg;base64,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',
    description: 'GSI cita sigilo e nega acesso a dados de reuniões de Bolsonaro e pastores',
    color: ''
  },
  {
    color: '',
    description: "Polícia mata a tiros homem e justifica: 'no boletim, será dado um jeito",
    imageSrc: 'data:image/jpeg;base64,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'
  }
  ]
}
