import { Component, OnInit } from '@angular/core';

import * as TextToSvg from 'text-to-svg';

@Component({
  selector: 'app-text2-svg',
  templateUrl: './text2-svg.component.html',
  styleUrls: ['./text2-svg.component.css']
})
export class Text2SvgComponent implements OnInit {
  textToSvg: any;
  text: string;
  text_paths: any[] = [];
  height: number = 0;

  svg_options: any = {
    x: 0,
    y: 0,
    fontSize: 72,
    anchor: 'top',
    attributes: {
      fill: 'black',
      stroke: 'black'
    }
  };

  constructor() {
    this.text = "Ng Material Demo";
    TextToSvg.load('../../assets/fonts/Roboto-Black.ttf', (err, textToSvg) => {
      this.generateSvgs(textToSvg);
    });
  }

  generateSvgs(textToSvg) {
    this.text_paths = [];
    var acc_width = 0;
    for(var i = 0; i < this.text.length; ++i) {
      var text_path: string = textToSvg.getSVG(this.text[i], this.svg_options);
      console.log(text_path);
      var width = parseFloat(/width="([\d|.]+)"/.exec(text_path)[1]);
      var height = parseFloat(/height="([\d|.]+)"/.exec(text_path)[1]);

      var d = /d="(.*)"/.exec(text_path)[1];
      
      // if(pos_matches) {
      console.log('MATCHES', d.split(' ').map(pos => pos.substring(1, pos.length)));
        // pos = pos_matches[2].split(' ').map(n => parseFloat(n));
        // pos[0] += acc_width;
        // d = 'M' + pos[0] + ' ' + pos[1] + d.substring(pos_matches[2].length, d.length);
      // }
      
      console.log(d);
      // console.log("POS", pos);
      console.log("DIMENSIN", width, height);
      acc_width += width || 0;
      this.text_paths.push(d);
    }
  }

  ngOnInit() {
  }

}
