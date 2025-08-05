import { Component, Input, signal, SimpleChanges } from '@angular/core';
import { ProductComponent } from "../../../products/components/product/product.component";

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [ProductComponent],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {
  @Input({required: true}) duration: number = 0;
  @Input({required: true}) message: string = '';
  counter = signal(0);
  counterReference: number | undefined;

  constructor() { 
    // NO ASYNC OPERATIONS HERE
    // This constructor is synchronous and does not involve any asynchronous operations.
    // Before Angular initializes the component, this constructor runs synchronously.
    console.log('CounterComponent initialized - Constructor called');
    console.log('-'.repeat(10))
    
  }
  ngOnChanges(changes: SimpleChanges) {
    // This method is called whenever an input property changes.
    console.log('CounterComponent ngOnChanges called');
    console.log('Changes:', changes);
    console.log('-'.repeat(10));
    const durationChange = changes['duration'];
    if (durationChange) {
      console.log(`Duration changed from ${durationChange.previousValue} to ${durationChange.currentValue}`);
      this.doSomething();
    }

  }
  ngOnInit() {
    // This method is called after the component's inputs have been initialized.
    // One time
    // Asynchronous operations can be performed here, such as fetching data.
    console.log('CounterComponent ngOnInit called');
    console.log('-'.repeat(10));
    this.counterReference = window.setInterval(() => {
      this.counter.update(value => value + 1);
      console.log(`Counter updated: ${this.counter()}`);
    }, 1000);
  }
  ngAfterViewInit() {
    // This method is called after the component's view has been fully initialized.
    // It is often used for DOM manipulations or to interact with child components.
    // This method is called after the view and child components have been initialized.
    console.log('CounterComponent ngAfterViewInit called');
    console.log('-'.repeat(10))
  }
  ngOnDestroy() {
    // This method is called just before the component is destroyed.
    // It is often used for cleanup tasks, such as unsubscribing from observables or detaching event listeners.
    console.log('CounterComponent ngOnDestroy called');
    console.log('-'.repeat(10))
    if (this.counterReference) {
      clearInterval(this.counterReference);
      console.log('Counter interval cleared');
    }

  }
  doSomething() {
    // This method can be called to perform some action, such as starting a countdown or updating the message.
    console.log('CounterComponent doSomething called');
    console.log('-'.repeat(10))
  }
}
