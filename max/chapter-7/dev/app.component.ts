import {Component} from 'angular2/core';
import {ReversePipe} from "./reverse.pipe";

@Component({
    selector: 'app',
    template: `
        <section class="pipe">
          <h2>The Date Pipe</h2>
          <p>Today is: {{ today | date:'short' }}</p>
        </section>
        
        <section class="pipe">
          <h2>The lowercase and UPPERCASE Pipe</h2>
          <input type="text" #inputCasePipes (keyup)="0">
          <p>Today is: XXX</p>
          <div>Output Lowercase: {{ inputCasePipes.value | lowercase }}</div>
          <div>Output Uppercase: {{ inputCasePipes.value | uppercase }}</div>
        </section>
        
        <section class="pipe">
          <h2>The Slice Pipe</h2>
          <input type="text" #slicePipe (keyup)="0"> -
          from <input type="text" #start (keyup)="0">
          to <input type="text" #end (keyup)="0">
          <div>Output: {{ slicePipe.value | slice:start.value:end.value }}</div>
        </section>
        
        <section class="pipe">
          <h2>Number Pipes</h2>
          <input type="text" #inputNumberPipes (keyup)="0"> -
          currency: <input type="text" #currency value="EUR" (change)="0">
          <div>Decimal: {{ 1.0 * inputNumberPipes.value | number:'1.1-2' }}</div>
          <div>Currency: {{ 1.0 * inputNumberPipes.value | currency:currency.value:currencyShort.checked:'1.2' }}</div>
          <input type="checkbox" checked #currencyShort (change)="0">
          Short Currency Code
        </section>
        
        <section class="pipe">
          <h2>Chaining Muliple Pipes (e. g. uppercase and slice)</h2>
          <input type="text" #inputChainPipes (keyup)="0">
          <p>Output: {{ inputChainPipes.value | slice:1-3 | uppercase }}</p>
        </section>
        
        <section class="pipe">
          <h2>Custom Pipe (reverse string)</h2>
          <input type="text" #inputCustomPipe (keyup)="0">
          <p>Output: {{ inputCustomPipe.value | myReverse }}</p>
        </section>
        
        <section class="pipe">
          <h2>Async (stateful pipes)</h2>
          <p>Output (received after 2s): {{ stateFulPipeOutput | async }}</p>
        </section>
    `,
    pipes: [ReversePipe]
})

export class AppComponent {
    today = new Date();

    stateFulPipeOutput = new Promise((resolve, reject) => {
        setTimeout(() => resolve('Data is there'), 2000);

    });

}