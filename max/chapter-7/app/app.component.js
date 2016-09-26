System.register(['angular2/core', "./reverse.pipe"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, reverse_pipe_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (reverse_pipe_1_1) {
                reverse_pipe_1 = reverse_pipe_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                    this.today = new Date();
                    this.stateFulPipeOutput = new Promise(function (resolve, reject) {
                        setTimeout(function () { return resolve('Data is there'); }, 2000);
                    });
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'app',
                        template: "\n        <section class=\"pipe\">\n          <h2>The Date Pipe</h2>\n          <p>Today is: {{ today | date:'short' }}</p>\n        </section>\n        \n        <section class=\"pipe\">\n          <h2>The lowercase and UPPERCASE Pipe</h2>\n          <input type=\"text\" #inputCasePipes (keyup)=\"0\">\n          <p>Today is: XXX</p>\n          <div>Output Lowercase: {{ inputCasePipes.value | lowercase }}</div>\n          <div>Output Uppercase: {{ inputCasePipes.value | uppercase }}</div>\n        </section>\n        \n        <section class=\"pipe\">\n          <h2>The Slice Pipe</h2>\n          <input type=\"text\" #slicePipe (keyup)=\"0\"> -\n          from <input type=\"text\" #start (keyup)=\"0\">\n          to <input type=\"text\" #end (keyup)=\"0\">\n          <div>Output: {{ slicePipe.value | slice:start.value:end.value }}</div>\n        </section>\n        \n        <section class=\"pipe\">\n          <h2>Number Pipes</h2>\n          <input type=\"text\" #inputNumberPipes (keyup)=\"0\"> -\n          currency: <input type=\"text\" #currency value=\"EUR\" (change)=\"0\">\n          <div>Decimal: {{ 1.0 * inputNumberPipes.value | number:'1.1-2' }}</div>\n          <div>Currency: {{ 1.0 * inputNumberPipes.value | currency:currency.value:currencyShort.checked:'1.2' }}</div>\n          <input type=\"checkbox\" checked #currencyShort (change)=\"0\">\n          Short Currency Code\n        </section>\n        \n        <section class=\"pipe\">\n          <h2>Chaining Muliple Pipes (e. g. uppercase and slice)</h2>\n          <input type=\"text\" #inputChainPipes (keyup)=\"0\">\n          <p>Output: {{ inputChainPipes.value | slice:1-3 | uppercase }}</p>\n        </section>\n        \n        <section class=\"pipe\">\n          <h2>Custom Pipe (reverse string)</h2>\n          <input type=\"text\" #inputCustomPipe (keyup)=\"0\">\n          <p>Output: {{ inputCustomPipe.value | myReverse }}</p>\n        </section>\n        \n        <section class=\"pipe\">\n          <h2>Async (stateful pipes)</h2>\n          <p>Output (received after 2s): {{ stateFulPipeOutput | async }}</p>\n        </section>\n    ",
                        pipes: [reverse_pipe_1.ReversePipe]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUF5REE7Z0JBQUE7b0JBQ0ksVUFBSyxHQUFHLElBQUksSUFBSSxFQUFFLENBQUM7b0JBRW5CLHVCQUFrQixHQUFHLElBQUksT0FBTyxDQUFDLFVBQUMsT0FBTyxFQUFFLE1BQU07d0JBQzdDLFVBQVUsQ0FBQyxjQUFNLE9BQUEsT0FBTyxDQUFDLGVBQWUsQ0FBQyxFQUF4QixDQUF3QixFQUFFLElBQUksQ0FBQyxDQUFDO29CQUVyRCxDQUFDLENBQUMsQ0FBQztnQkFFUCxDQUFDO2dCQTlERDtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFFBQVEsRUFBRSxLQUFLO3dCQUNmLFFBQVEsRUFBRSwwbEVBZ0RUO3dCQUNELEtBQUssRUFBRSxDQUFDLDBCQUFXLENBQUM7cUJBQ3ZCLENBQUM7O2dDQUFBO2dCQVVGLG1CQUFDO1lBQUQsQ0FSQSxBQVFDLElBQUE7WUFSRCx1Q0FRQyxDQUFBIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQge1JldmVyc2VQaXBlfSBmcm9tIFwiLi9yZXZlcnNlLnBpcGVcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdhcHAnLFxuICAgIHRlbXBsYXRlOiBgXG4gICAgICAgIDxzZWN0aW9uIGNsYXNzPVwicGlwZVwiPlxuICAgICAgICAgIDxoMj5UaGUgRGF0ZSBQaXBlPC9oMj5cbiAgICAgICAgICA8cD5Ub2RheSBpczoge3sgdG9kYXkgfCBkYXRlOidzaG9ydCcgfX08L3A+XG4gICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgXG4gICAgICAgIDxzZWN0aW9uIGNsYXNzPVwicGlwZVwiPlxuICAgICAgICAgIDxoMj5UaGUgbG93ZXJjYXNlIGFuZCBVUFBFUkNBU0UgUGlwZTwvaDI+XG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgI2lucHV0Q2FzZVBpcGVzIChrZXl1cCk9XCIwXCI+XG4gICAgICAgICAgPHA+VG9kYXkgaXM6IFhYWDwvcD5cbiAgICAgICAgICA8ZGl2Pk91dHB1dCBMb3dlcmNhc2U6IHt7IGlucHV0Q2FzZVBpcGVzLnZhbHVlIHwgbG93ZXJjYXNlIH19PC9kaXY+XG4gICAgICAgICAgPGRpdj5PdXRwdXQgVXBwZXJjYXNlOiB7eyBpbnB1dENhc2VQaXBlcy52YWx1ZSB8IHVwcGVyY2FzZSB9fTwvZGl2PlxuICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgIFxuICAgICAgICA8c2VjdGlvbiBjbGFzcz1cInBpcGVcIj5cbiAgICAgICAgICA8aDI+VGhlIFNsaWNlIFBpcGU8L2gyPlxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiICNzbGljZVBpcGUgKGtleXVwKT1cIjBcIj4gLVxuICAgICAgICAgIGZyb20gPGlucHV0IHR5cGU9XCJ0ZXh0XCIgI3N0YXJ0IChrZXl1cCk9XCIwXCI+XG4gICAgICAgICAgdG8gPGlucHV0IHR5cGU9XCJ0ZXh0XCIgI2VuZCAoa2V5dXApPVwiMFwiPlxuICAgICAgICAgIDxkaXY+T3V0cHV0OiB7eyBzbGljZVBpcGUudmFsdWUgfCBzbGljZTpzdGFydC52YWx1ZTplbmQudmFsdWUgfX08L2Rpdj5cbiAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICBcbiAgICAgICAgPHNlY3Rpb24gY2xhc3M9XCJwaXBlXCI+XG4gICAgICAgICAgPGgyPk51bWJlciBQaXBlczwvaDI+XG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgI2lucHV0TnVtYmVyUGlwZXMgKGtleXVwKT1cIjBcIj4gLVxuICAgICAgICAgIGN1cnJlbmN5OiA8aW5wdXQgdHlwZT1cInRleHRcIiAjY3VycmVuY3kgdmFsdWU9XCJFVVJcIiAoY2hhbmdlKT1cIjBcIj5cbiAgICAgICAgICA8ZGl2PkRlY2ltYWw6IHt7IDEuMCAqIGlucHV0TnVtYmVyUGlwZXMudmFsdWUgfCBudW1iZXI6JzEuMS0yJyB9fTwvZGl2PlxuICAgICAgICAgIDxkaXY+Q3VycmVuY3k6IHt7IDEuMCAqIGlucHV0TnVtYmVyUGlwZXMudmFsdWUgfCBjdXJyZW5jeTpjdXJyZW5jeS52YWx1ZTpjdXJyZW5jeVNob3J0LmNoZWNrZWQ6JzEuMicgfX08L2Rpdj5cbiAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgY2hlY2tlZCAjY3VycmVuY3lTaG9ydCAoY2hhbmdlKT1cIjBcIj5cbiAgICAgICAgICBTaG9ydCBDdXJyZW5jeSBDb2RlXG4gICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgXG4gICAgICAgIDxzZWN0aW9uIGNsYXNzPVwicGlwZVwiPlxuICAgICAgICAgIDxoMj5DaGFpbmluZyBNdWxpcGxlIFBpcGVzIChlLiBnLiB1cHBlcmNhc2UgYW5kIHNsaWNlKTwvaDI+XG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgI2lucHV0Q2hhaW5QaXBlcyAoa2V5dXApPVwiMFwiPlxuICAgICAgICAgIDxwPk91dHB1dDoge3sgaW5wdXRDaGFpblBpcGVzLnZhbHVlIHwgc2xpY2U6MS0zIHwgdXBwZXJjYXNlIH19PC9wPlxuICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgIFxuICAgICAgICA8c2VjdGlvbiBjbGFzcz1cInBpcGVcIj5cbiAgICAgICAgICA8aDI+Q3VzdG9tIFBpcGUgKHJldmVyc2Ugc3RyaW5nKTwvaDI+XG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgI2lucHV0Q3VzdG9tUGlwZSAoa2V5dXApPVwiMFwiPlxuICAgICAgICAgIDxwPk91dHB1dDoge3sgaW5wdXRDdXN0b21QaXBlLnZhbHVlIHwgbXlSZXZlcnNlIH19PC9wPlxuICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgIFxuICAgICAgICA8c2VjdGlvbiBjbGFzcz1cInBpcGVcIj5cbiAgICAgICAgICA8aDI+QXN5bmMgKHN0YXRlZnVsIHBpcGVzKTwvaDI+XG4gICAgICAgICAgPHA+T3V0cHV0IChyZWNlaXZlZCBhZnRlciAycyk6IHt7IHN0YXRlRnVsUGlwZU91dHB1dCB8IGFzeW5jIH19PC9wPlxuICAgICAgICA8L3NlY3Rpb24+XG4gICAgYCxcbiAgICBwaXBlczogW1JldmVyc2VQaXBlXVxufSlcblxuZXhwb3J0IGNsYXNzIEFwcENvbXBvbmVudCB7XG4gICAgdG9kYXkgPSBuZXcgRGF0ZSgpO1xuXG4gICAgc3RhdGVGdWxQaXBlT3V0cHV0ID0gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHJlc29sdmUoJ0RhdGEgaXMgdGhlcmUnKSwgMjAwMCk7XG5cbiAgICB9KTtcblxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
