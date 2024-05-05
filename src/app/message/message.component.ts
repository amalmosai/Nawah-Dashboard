import { Component,OnInit } from '@angular/core';
import { MessageService } from '../Serviecs/message.service';
import { IMessage } from '../I-message';


@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {
  POSTS: any;
  page: number = 1;
  count: number = 0;
  tableSize: number = 7;
  tableSizes: any = [3, 6, 9, 12];
  Message? : IMessage [];

  constructor(private MsgSrv : MessageService) {}

  ngOnInit(): void {
    this.fetchfar();
  }

  fetchfar(): void {
    this.Message= []
    this.MsgSrv.getAllMessages().subscribe({
      next: (res:any) => {
        let Exam = res.data as IMessage[];
        this.POSTS = Exam;
        console.log(this.POSTS);
      }
    })
  }

  onTableDataChange(event: any) {
    this.page = event;
    this.fetchfar();
  }
  onTableSizeChange(event: any): void {
    this.tableSize = event.target.value;
    this.page = 1;
    this.fetchfar();
  }

}
