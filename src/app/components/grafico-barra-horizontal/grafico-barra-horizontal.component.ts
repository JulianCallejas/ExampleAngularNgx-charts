import { Component, OnDestroy } from '@angular/core';


@Component({
  selector: 'app-grafico-barra-horizontal',
  templateUrl: './grafico-barra-horizontal.component.html',
  styleUrls: ['./grafico-barra-horizontal.component.css']
})
export class GraficoBarraHorizontalComponent implements OnDestroy {
  results: any[] = [
    {
      "name": "Juego 1",
      "value": 100
    },
    {
      "name": "Juego 2",
      "value": 100
    },
    {
      "name": "Juego 3",
      "value": 100
    },
    {
      "name": "Juego 4",
      "value": 100
    }
  ];;


  // options
  showXAxis = true;
  showYAxis = true;
  gradient = true;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Games';
  showYAxisLabel = true;
  yAxisLabel = 'Votes';
  colorScheme = 'nightLights'

  intervalo: any;

  constructor() {
    //para actualizar el grafico en tiempo real, hay que actualizar todo el arreglo de datos

    this.intervalo = setInterval(() => {
      let newDatos = [... this.results];
      for (let i in newDatos) {
        newDatos[i].value = Math.floor(Math.random() * 200) + 100;
      }
      this.results = [... newDatos];
    }, 3000);

  }
  ngOnDestroy(): void {
    clearInterval(this.intervalo);
  }

  onSelect(event: any) {
    console.log(event);
  }

}
