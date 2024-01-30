import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { dataFake } from 'src/app/mocks/dataFake';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
})
export class ContentComponent implements OnInit {
  private contentId: string = '0';
  contentImage: string ='';
  contentTitle: string = '';
  contentDescription: string ='';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(
      (value) => (this.contentId = value.get('id') || "0")
    );

    this.setValueTocomponent(this.contentId)
  }

  setValueTocomponent(id: string) {
    const result = dataFake.filter((news) => news.id === +id)[0];

    this.contentImage = result.image_url;
    this.contentTitle = result.title;
    this.contentDescription = result.description;
  }
}
