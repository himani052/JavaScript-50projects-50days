### Insert an element with css

````css
#exemple:before {
   content: "#";
}

#exemple:after {
   content: ".";
}
````

### create custom properties 

````css
    :root {
    --line-border-fill: #3498db;
    --line-border-empty: #e0e0e0;
}
/* Use the one property */

.progress-container{
    background-color: var(--line-border-empty);
   
}
````