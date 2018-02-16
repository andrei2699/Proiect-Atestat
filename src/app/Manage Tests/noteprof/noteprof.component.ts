import { Component, OnInit, ViewEncapsulation,ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NoteService } from '../note.service';
import { MatTableDataSource,MatSort,MatPaginator } from '@angular/material';
import { Element } from '@angular/compiler';

@Component({
  selector: 'app-noteprof',
  templateUrl: './noteprof.component.html',
  styleUrls: ['./noteprof.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class NoteprofComponent implements OnInit {

  constructor(private route: ActivatedRoute,
    private noteService: NoteService) { }

  note;
  dataSource = new MatTableDataSource();
  
  displayedColumns = [ 'Data','Username','Nume Test', 'Nota'];
  
  ngOnInit() {
    this.route.params.subscribe(params => {
      const materie = params['materie'];
      this.getNoteProf(materie);
    });
    
    if( window.localStorage )
    {
      if( !localStorage.getItem('firstLoad') )
        {
          localStorage['firstLoad'] = true;
          window.location.reload();
        }  
      else
      localStorage.removeItem('firstLoad');
      } 
  }
 
  getNoteProf(materie) {
    console.log(materie);
    this.noteService.getNoteProf(materie)
      .subscribe((note: any[]) =>{ this.dataSource.data = note});
  }
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  
    ngAfterViewInit() {
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    }
  applyFilter(filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.dataSource.filter = filterValue;
    }
}
