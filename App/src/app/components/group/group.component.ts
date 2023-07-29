import {
  Component,
  ChangeDetectionStrategy,
  OnInit,
  signal,
} from '@angular/core';
import { GroupWithRXDBService } from '../../infra/RxDB/groupWithRxDB.service';
import { Group } from '../../infra/domain-model/group.model';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GroupComponent implements OnInit {
  constructor(public groupWithRXDBService: GroupWithRXDBService) {}
  groups: Group[] = [];
  columns = ['名称', '活動場所', 'email', '電話番号', '削除'];
  groups$ = signal(this.groups);
  ngOnInit(): void {
    console.log('ngOnInit');
    this.groupWithRXDBService.findAllGroups().then((groups) => {
      if (groups) {
        this.groups = groups.map((group) => group._data) as Group[];
        console.log(this.groups);
        this.groups$.set(this.groups);
      }
    });
  }

  delete(id: string) {
    this.groupWithRXDBService.deleteById(id);
    this.groups = this.groups.filter((group) => group.id !== id);
    this.groups$.set(this.groups);
  }
}
