import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-main',
  imports: [FormsModule],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {
  public wordsBadArray: Array<string> = [];
  public textBadArray: Array<string> = [];
  public wordsBadSpan = '';
  public wordsBad = '';
  public textBad = '';
  public styleBorderWord = '';
  public placeholderWord = 'word here...';
  public styleBorderText = '';
  public placeholderText = 'text here...';

  addButtonClick(): void{
    if(this.wordsBad.trim() !== ''){
      this.styleBorderWord = '';
      this.placeholderWord = 'word here...';
      this.wordsBadArray.push(this.wordsBad.trim());
      this.wordsBad = '';
      this.wordsBadSpan = '';
      this.wordsBadArray.map(elem => this.wordsBadSpan = this.wordsBadSpan + elem + ' ')
    }
    else{
      this.styleBorderWord = 'border-red';
      this.placeholderWord = 'Please write a word!';

    }
  }

  cenzorButtonClick(): void{
    if(this.textBad.trim() !== ''){
      this.styleBorderText = '';
      this.placeholderText = 'text here...';
      this.textBadArray = this.textBad.trim().split(' ');
      this.textBad = '';
      this.textBadArray.map(elem => {
          if(this.wordsBadArray.includes(elem)){
            this.textBad = this.textBad + '*'.repeat(elem.length) + ' ';
          }
          else{
            this.textBad = this.textBad + elem + ' ';
          }
      })
      


    }
    else{
      this.styleBorderText = 'border-red';
      this.placeholderText = 'Please write a text!';
    }
  }

  resetButtonClick(): void{
    this.wordsBadArray = [];
    this.textBadArray = [];
    this.wordsBadSpan = '';
    this.wordsBad = '';
    this.textBad = '';
    this.styleBorderWord = '';
    this.placeholderWord = 'word here...';
    this.styleBorderText = '';
    this.placeholderText = 'text here...';
  }
}
