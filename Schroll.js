//version 1.5
//desarrollado por Christian Menendez Luttringer

class ScrollReveal
{
    constructor() 
    {
        this.options = Object.assign(
        {
            threshold: 0.1,
            visibleClass: 'Schv'
        });
  
        document.addEventListener('DOMContentLoaded', () => 
        {
            this.addStyles();
            this.intersectionObserver = new IntersectionObserver(entries => this.handleIntersection(entries),{ threshold: this.options.threshold });
            this.observeElements();
        });
    }
  
    addStyles() 
    {
        const styleElement = document.createElement('style');
        styleElement.innerHTML = `.Sch{opacity: 0;transform: translateY(20px);transition: opacity 0.5s ease, transform 0.5s ease;}.Sch.Schv {opacity: 1;transform: translateY(0);}`;
        document.head.appendChild(styleElement);
    }
  
    handleIntersection(entries){entries.forEach(entry => {(entry.isIntersecting)?entry.target.classList.add(this.options.visibleClass) :entry.target.classList.remove(this.options.visibleClass);});}
  
    observeElements() 
    {
        const elements = document.querySelectorAll('.Sch');
        elements.forEach(element => {this.intersectionObserver.observe(element);});
    }
}
  
const scrollReveal = new ScrollReveal();
  