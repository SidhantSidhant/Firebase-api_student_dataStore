import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { map, takeUntil } from 'rxjs';
import { Istudent } from 'src/app/sheard/model/student.interface';
import { ApiService } from 'src/app/sheard/service/apiService';
import { AuthService } from 'src/app/sheard/service/auth.service';


@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.scss'],
  // changeDetection : ChangeDetectionStrategy.OnPush,
})
export class ReactiveFormsComponent implements OnInit {
  studentForm !: FormGroup;
  studentArray: Istudent[] = [];
  gender: string[] = ['male', 'female', 'other']
  edit: boolean = false;
  constructor(private _apiService: ApiService,
    private _router: Router,
    private _detect: ChangeDetectorRef,
    private _route: ActivatedRoute,
    private _authservice : AuthService
  ) { }

  ngOnInit(): void {
    this.createStudentForm();
    this.featchData();
    this.patchValueToForm();
  }

  patchValueToForm() {
    this._route.params.subscribe(res => {
      console.log(res)
      this._apiService.getSinglePrdouct(res['id']).subscribe(data => {
        console.log(data)
        this.studentForm.patchValue({
                fname: data.fname,
                lname: data.lname,
                email: data.email,
                date_of_Birth: data.date_of_Birth,
                gender: data.gender,
                eductaion: data.eductaion,
                company: data.company,
                experince: data.experince,
                package: data.package
        })
      })
    })
  }

  featchData() {
    this._apiService.feachStudentData()
      .subscribe(res => {
        console.log(res);
        this.studentArray = res;
          
      })
  }

  createStudentForm() {
    this.studentForm = new FormGroup({
      fname: new FormControl(null, [Validators.required], ),
      lname: new FormControl(null, [Validators.required]),
      email: new FormControl(null, [Validators.required],),
      date_of_Birth: new FormControl(null, [Validators.required]),
      gender: new FormControl(null, [Validators.required]),
      eductaion: new FormControl(null, [Validators.required]),
      company: new FormControl(null, [Validators.required]),
      experince: new FormControl(null, [Validators.required]),
      package: new FormControl(null, [Validators.required]),
    })
  }

  onSubmitstudentForm() {
    console.log(this.studentForm);
    let obj: Istudent = this.studentForm.value;
    this._apiService.createStudentData(obj).subscribe(
      res => {
        console.log(res);
        this._authservice.isSingUpUser()
        this._router.navigate(['/table'])
      }, err => {
        console.log(err);
      }, () => {
        console.log('The POST method is completed');
      })
  }

}

