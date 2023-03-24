import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Istudent } from 'src/app/sheard/model/student.interface';
import { ApiService } from 'src/app/sheard/service/apiService';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  studentData: Istudent[] = [];
  header: string[] = ["fname", "lname", 'email', 'date_of_Birth', 'gender', 'eductaion', 'company', 'experince', 'package']
  constructor(private _apiservice: ApiService,
    private _router: Router,
  ) { }

  ngOnInit(): void {
    this._apiservice.feachStudentData().subscribe(res => {
      this.studentData = res;
      console.log(this.studentData);
    })

  }
  onEditBtnAndDeleteBtn(event: Event, id: string) {
    // console.log(event, id);
    let editButton = (event.target as HTMLInputElement)!.innerText;
    console.log(editButton);
    if (editButton === 'Edit') {

      this._apiservice.OnEditStudent(id).subscribe(res => {
        this._router.navigate(['/forms', id])
        console.log(res);
      })
    } else {
       this._apiservice.OnDeleteData(id).subscribe(res =>{
          console.log(res);
            this.studentData = this.studentData.filter(element =>{
              return element.id !== id;
            })
       })
    }
  }

}
