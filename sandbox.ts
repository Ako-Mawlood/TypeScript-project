const form =document.querySelector('form')!
const anchor=document.querySelector('a')!

const type=document.querySelector('#type') as HTMLInputElement
const toForm=document.querySelector('#tofrom') as HTMLFormElement
const details=document.querySelector('#details') as HTMLInputElement
const amount=document.querySelector('#amount') as HTMLInputElement
interface HasOutput{
    output():string
}
class Invoice implements HasOutput{
        constructor(
        readonly client:string,
        private details:string,
        public amount:number
    ){}
     

    output(){
        return `${this.client} ows ${this.amount}for ${this.details}`
    }

}
 class payment implements HasOutput{

    constructor(
        readonly recipeant:string,
        private details:string,
        public amount:number
    ){}
     

    output(){
        return `${this.recipeant} owed ${this.amount}for ${this.details}`
    }

 }


 
form.addEventListener('submit',(e:Event)=>{
    e.preventDefault() 
        class ListTemplete{
       constructor( private container:HTMLUListElement){}

    render(item:HasOutput,heading:string,position:'start'|'end'){
      const li = document.createElement('li')
      const h4=document.createElement('h4')
      h4.innerText=heading
      li.append(h4)
      const p=document.createElement('p')
      p.innerText=item.output()
      li.append(p)
      
      if(position==='start'){
        this.container.prepend(li)
      }else{
        this.container.append(li)
      }
    }


 }
    const ul =document.querySelector('ul')!
    const list=new ListTemplete(ul) 
    if(type.value==='payment'){
      let doc:HasOutput=new payment(toForm.value,details.value,amount.valueAsNumber)
    
     list.render(doc,type.value,'end')
             
    }else{
        let doc:HasOutput=new Invoice(toForm.value,details.value,amount.valueAsNumber)
     list.render(doc,type.value,'end')

    }
})
