//app-routing.module.ts
const routes: Routes = [
    {path: 'path-a', component: HelloComponent},
    {path: 'path-b', component: HelloComponent},
]

//hello.component.ts
@component({
    selector: 'hello',
    template: `<h1>Hello</h1>`,
})

export class HelloComponent implements OnInit {
    timed$ = TimeRanges(1, 1000);
    ngOnInit(){
        this.timed$.subscribe(r => console.log(r))
    }
}

//Console output
0 -> 1 -> 2 -> 3 -> 4 -> 5 -> 6 -> 0 -> 7 -> 1 -> 8 -> 2 -> 9 (...)