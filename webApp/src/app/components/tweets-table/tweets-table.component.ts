import {Component} from '@angular/core';
import {TweetsService} from '../../services/tweets.service';


@Component({  
  selector: 'tweets-table',
  templateUrl: './tweets-table.component.html',
  styleUrls: ['./tweets-table.component.css']
})
export class TweetsTableComponent {
  constructor(private tweetsService:TweetsService){}
  dataSource = this.tweetsService.getTweets();
  newTweets():void {
    location.reload();
 } 
}
class reload{
 timeout() {
      var that = this;
      setTimeout(function () {
         location.reload();
          that.timeout();
      }, 60000);} 
}
let reloadPage = new reload();
reloadPage.timeout();

