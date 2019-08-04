# Angular Custom Element
    
    1. Create an angular application without routing 
        Ex: ng new simple-angular-custome-element
    2. Go to the project 
        Ex: cd simple-angular-custome-element/
    3. Add the angular elements
        Ex: ng add @angular/elements
    4. Add the component 
        Ex: ng g component header
    5. Change the TS target version into ES2015
        EX: "target": "es2015",                
    6. Empty the Appcomponent of Bootstrap array in app module
        EX: bootstrap: []
    7. Create an Element by following
        ngDoBootstrap() {
            const headerElement = createCustomElement(HeaderComponent, {injector: this.injector});
            customElements.define('app-header', headerElement);
         }  
    8. Take the build
        EX: ng build --prod --output-hashing=none
    9. Merge the ./dist/simple-angular-custome-element/runtime.js 
                 ./dist/simple-angular-custome-element/polyfills.js 
                 ./dist/simple-angular-custome-element/scripts.js 
                 ./dist/simple-angular-custome-element/main.js   
                       to 
                       
                  destination file
                  
                  ./custome-elments/app-header.js       
                             
    10. now call the element
       Ex: <app-header title="ANGULAR CUSTOME HEADER ELEMENT"></app-header>


>Note: Use ShodowDom View encapsulate if you the styles are conflicts 


## Examples 
   open the **custome-elements/index.html** file 
