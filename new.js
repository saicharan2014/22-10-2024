// task1
let arr1=[15,18,4,5,6,9]

function sorting(x){
for(let i=0;i<=x.length-1;i++){
for(let j=0;j<x.length-1-i;j++){
if(x[j]>x[j+1]){
temp=x[j+1]
x[j+1]=x[j]
x[j]=temp
}
    }
}
return arr1
}



let op1=sorting(arr1)
console.log(op1);
// // task2
let arr2=[10,14,4,5,6,9]

function secondlargest(x){
for(let i=0;i<=x.length-1;i++){
for(let j=0;j<x.length-1-i;j++){
if(x[j]>x[j+1]){
temp=x[j+1]
x[j+1]=x[j]
x[j]=temp
}
    }
}
return arr2[arr2.length-2]
}



let op2=secondlargest(arr2)
console.log(op2);
// // task 3
let postive=0
let negtive=0
let arr =[-1,-2,-5,1,2,10,15]
for(i=0;i<arr.length;i++){
if(arr[i]>0){
    postive++
}
else{
    negtive++
}

}
console.log("postive:"+ postive+" " +"negative:"+ negtive );
